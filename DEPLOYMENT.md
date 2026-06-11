# Deployment Guide - Uday's Resume Website

This guide covers all deployment options including Docker and AWS EC2.

---

## Table of Contents

1. [Local Development](#local-development)
2. [Docker Deployment](#docker-deployment)
3. [AWS EC2 Deployment with Docker](#aws-ec2-deployment-with-docker)
4. [AWS EC2 Manual Deployment](#aws-ec2-manual-deployment)
5. [HTTPS Setup](#https-setup)
6. [Troubleshooting](#troubleshooting)

---

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Run Development Server

```bash
# Navigate to project
cd uday-resume-website

# Install dependencies
npm install

# Start dev server (hot reload enabled)
npm run dev
```

Access at: `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output: `dist/` folder with optimized static files.

---

## Docker Deployment

### Prerequisites
- Docker installed
- Docker Compose installed (optional but recommended)

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and run production container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop container
docker-compose down
```

Access at: `http://localhost`

### Option 2: Using Docker Directly

```bash
# Build the image
docker build -t uday-resume .

# Run the container
docker run -d -p 80:80 --name uday-resume uday-resume

# View logs
docker logs -f uday-resume

# Stop container
docker stop uday-resume
docker rm uday-resume
```

### Development with Docker

```bash
# Run development container with hot reload
docker-compose --profile dev up resume-dev
```

Access at: `http://localhost:3000`

---

## AWS EC2 Deployment with Docker

### Step 1: Launch EC2 Instance

1. Go to AWS Console → EC2 → Launch Instance
2. Choose **Amazon Linux 2023** or **Ubuntu 22.04 LTS**
3. Instance type: `t2.micro` (free tier) or `t3.small`
4. Configure Security Group:
   - SSH (22) - Your IP
   - HTTP (80) - Anywhere (0.0.0.0/0)
   - HTTPS (443) - Anywhere (0.0.0.0/0)
5. Create or select key pair
6. Launch instance

### Step 2: Connect to EC2

```bash
# Set permissions for key file
chmod 400 your-key.pem

# Connect via SSH
ssh -i your-key.pem ec2-user@<EC2-PUBLIC-IP>
# For Ubuntu: ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

### Step 3: Install Docker on EC2

**Amazon Linux 2023:**
```bash
# Update system
sudo dnf update -y

# Install Docker
sudo dnf install docker -y

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Log out and back in for group changes
exit
```

**Ubuntu:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install docker.io docker-compose -y

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker ubuntu

# Log out and back in
exit
```

### Step 4: Upload Project Files

**From your local machine:**
```bash
# Create project archive
cd D:/Umday/uday-resume-website
tar -czvf resume-website.tar.gz --exclude='node_modules' --exclude='dist' .

# Upload to EC2
scp -i your-key.pem resume-website.tar.gz ec2-user@<EC2-PUBLIC-IP>:~/
```

### Step 5: Deploy on EC2

```bash
# SSH back into EC2
ssh -i your-key.pem ec2-user@<EC2-PUBLIC-IP>

# Create project directory
mkdir -p ~/resume-website
cd ~/resume-website

# Extract files
tar -xzvf ~/resume-website.tar.gz

# Build and run with Docker Compose
docker-compose up -d --build

# Verify container is running
docker ps

# Check logs
docker-compose logs -f
```

### Step 6: Access Your Website

Open browser: `http://<EC2-PUBLIC-IP>`

---

## AWS EC2 Manual Deployment

### Step 1-2: Same as Docker deployment

### Step 3: Install Node.js and Nginx

**Amazon Linux 2023:**
```bash
# Install Node.js 20
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install nodejs -y

# Install Nginx
sudo dnf install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

**Ubuntu:**
```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

# Install Nginx
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Step 4: Upload and Build

```bash
# Create web directory
sudo mkdir -p /var/www/resume
sudo chown $USER:$USER /var/www/resume

# From local machine - upload files
scp -i your-key.pem -r ./* ec2-user@<EC2-PUBLIC-IP>:/var/www/resume/

# On EC2 - build project
cd /var/www/resume
npm install
npm run build
```

### Step 5: Configure Nginx

```bash
sudo nano /etc/nginx/conf.d/resume.conf
```

Add configuration:
```nginx
server {
    listen 80;
    server_name _;
    root /var/www/resume/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Step 6: Start Nginx

```bash
# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## HTTPS Setup

### Using Let's Encrypt (Requires Domain)

```bash
# Install Certbot
# Amazon Linux:
sudo dnf install certbot python3-certbot-nginx -y
# Ubuntu:
sudo apt install certbot python3-certbot-nginx -y

# Get certificate (replace with your domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (already configured, but verify)
sudo certbot renew --dry-run

# Add cron job for renewal
sudo crontab -e
# Add line: 0 12 * * * /usr/bin/certbot renew --quiet
```

---

## Troubleshooting

### Docker Issues

```bash
# Check container status
docker ps -a

# View container logs
docker logs uday-resume

# Restart container
docker-compose restart

# Rebuild from scratch
docker-compose down
docker-compose up -d --build --force-recreate
```

### Nginx Issues

```bash
# Test configuration
sudo nginx -t

# View error logs
sudo tail -f /var/log/nginx/error.log

# View access logs
sudo tail -f /var/log/nginx/access.log

# Restart Nginx
sudo systemctl restart nginx
```

### Port Issues

```bash
# Check what's using port 80
sudo lsof -i :80
# or
sudo netstat -tlnp | grep :80

# Check firewall (Amazon Linux)
sudo firewall-cmd --list-all

# Check security group in AWS Console
# Ensure inbound rules allow HTTP (80) and HTTPS (443)
```

### Permission Issues

```bash
# Fix web directory permissions
sudo chown -R $USER:$USER /var/www/resume

# Fix Nginx permissions
sudo chown -R nginx:nginx /var/www/resume/dist
# or for Ubuntu
sudo chown -R www-data:www-data /var/www/resume/dist
```

---

## Quick Commands Reference

| Task | Command |
|------|---------|
| Start (Docker) | `docker-compose up -d` |
| Stop (Docker) | `docker-compose down` |
| Rebuild (Docker) | `docker-compose up -d --build` |
| View logs (Docker) | `docker-compose logs -f` |
| Start (Nginx) | `sudo systemctl start nginx` |
| Restart (Nginx) | `sudo systemctl restart nginx` |
| Test Nginx config | `sudo nginx -t` |
| Build project | `npm run build` |

---

## Update Website Content

To update resume content:

1. Edit `src/data/resumeData.js`
2. Rebuild:
   - Docker: `docker-compose up -d --build`
   - Manual: `npm run build && sudo systemctl restart nginx`
