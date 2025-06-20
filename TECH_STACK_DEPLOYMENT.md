# Emergency Ambulance Response App - Complete Tech Stack & AWS Deployment

## Full Technology Stack

### Frontend
- **React 18.3.1** - UI framework
- **TypeScript 5.6.3** - Type safety
- **Vite 5.4.14** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Styling framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **TanStack Query 5.60.5** - Data fetching and caching
- **Wouter 3.3.5** - Lightweight routing
- **React Hook Form 7.55.0** - Form handling
- **Framer Motion** - Animations

### Backend
- **Node.js 18+** - Runtime environment
- **Express 4.21.2** - Web framework
- **TypeScript** - Type safety
- **ESM modules** - Modern JavaScript modules

### Build & Development Tools
- **Vite** - Frontend build tool
- **ESBuild** - Backend bundling
- **TSX** - TypeScript execution
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Production Dependencies
```json
{
  "node": ">=18.0.0",
  "npm": ">=8.0.0"
}
```

## AWS VPS Deployment Guide

### Prerequisites
- Ubuntu 20.04+ or Amazon Linux 2
- SSH access to your VPS
- Domain name (optional)

### Step 1: Server Setup

```bash
# Connect to your AWS instance
ssh -i your-key.pem ubuntu@your-aws-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v18.x.x
npm --version   # Should show 8.x.x or higher

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx (optional, for reverse proxy)
sudo apt install nginx -y
```

### Step 2: Application Deployment

```bash
# Create application directory
sudo mkdir -p /var/www/ambulance-app
sudo chown $USER:$USER /var/www/ambulance-app
cd /var/www/ambulance-app

# Upload your files (use SCP, SFTP, or Git)
# Option 1: Using SCP from local machine
scp -i your-key.pem -r ./ambulance-app/* ubuntu@your-aws-ip:/var/www/ambulance-app/

# Option 2: Using Git
git clone https://github.com/ashokrl/ambulance-alert.git .

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "ambulance-app" -- start
pm2 save
pm2 startup

# Configure firewall
sudo ufw allow 22    # SSH
sudo ufw allow 5000  # App port
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### Step 3: Environment Configuration

Create `/var/www/ambulance-app/.env`:
```env
NODE_ENV=production
PORT=5000
HOST=0.0.0.0
```

### Step 4: Nginx Configuration (Recommended)

Create `/etc/nginx/sites-available/ambulance-app`:
```nginx
server {
    listen 80;
    server_name your-domain.com your-aws-ip;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    # Serve static files directly
    location /static/ {
        alias /var/www/ambulance-app/dist/client/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/ambulance-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Common AWS VPS Issues & Solutions

### Issue 1: Node.js Version Mismatch
```bash
# Remove old Node.js
sudo apt remove nodejs npm -y

# Install specific version
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
```

### Issue 2: Permission Errors
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /var/www/ambulance-app
```

### Issue 3: Port Already in Use
```bash
# Find process using port 5000
sudo netstat -tulpn | grep :5000
sudo kill -9 <process-id>

# Or use different port
export PORT=3000
```

### Issue 4: Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Check Node.js memory
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Issue 5: Service Worker Issues
Make sure these files exist in your build:
- `/public/manifest.json`
- `/public/sw.js`
- Proper HTTPS setup

## AWS Security Group Settings

Configure your AWS Security Group:
- **SSH (22)**: Your IP only
- **HTTP (80)**: 0.0.0.0/0
- **HTTPS (443)**: 0.0.0.0/0
- **Custom (5000)**: 0.0.0.0/0 (if not using Nginx)

## Monitoring & Maintenance

```bash
# Check application status
pm2 status
pm2 logs ambulance-app

# Monitor system resources
htop
df -h

# Update application
cd /var/www/ambulance-app
git pull
npm install
npm run build
pm2 restart ambulance-app
```

## Performance Optimization

```bash
# Enable gzip compression in Nginx
sudo nano /etc/nginx/nginx.conf
# Add in http block:
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

# Restart Nginx
sudo systemctl restart nginx
```

## Troubleshooting Commands

```bash
# Check if app is running
curl http://localhost:5000

# Check Nginx status
sudo systemctl status nginx

# Check logs
pm2 logs ambulance-app --lines 50
sudo tail -f /var/log/nginx/error.log

# Restart services
pm2 restart ambulance-app
sudo systemctl restart nginx
```

## Memory Requirements
- **Minimum**: 1GB RAM, 1 CPU core
- **Recommended**: 2GB RAM, 2 CPU cores
- **Storage**: 10GB minimum

The app is lightweight and should run smoothly on a t2.micro or t3.micro AWS instance.