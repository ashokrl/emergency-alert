# Emergency Ambulance Response App - Complete Hosting Guide

## Overview
This is a complete Progressive Web App (PWA) for emergency ambulance response with both Driver and Public interfaces. The app is mobile-optimized and can be installed on smartphones like a native app.

## What You'll Need
- A server with Node.js 18+ installed
- Domain name (optional but recommended)
- SSL certificate (for HTTPS - required for PWA features)

## Quick Start (5-minute setup)

### Option 1: Using a VPS (Recommended)

#### Step 1: Upload Files
1. Extract the provided ZIP file
2. Upload all files to your server using FTP/SCP to `/var/www/ambulance-app/`

#### Step 2: Install Dependencies
```bash
cd /var/www/ambulance-app
npm install
```

#### Step 3: Build for Production
```bash
npm run build
```

#### Step 4: Start the Application
```bash
npm start
```

The app will run on port 5000. Access it at `http://your-server-ip:5000`

### Option 2: Using PM2 (Production Process Manager)

#### Install PM2
```bash
npm install -g pm2
```

#### Start with PM2
```bash
cd /var/www/ambulance-app
pm2 start npm --name "ambulance-app" -- start
pm2 save
pm2 startup
```

## Detailed Hosting Options

### 1. DigitalOcean Droplet ($5/month)

#### Create Droplet
1. Go to DigitalOcean.com
2. Create new droplet with Ubuntu 22.04
3. Choose $5/month plan
4. Add SSH key or password

#### Setup Commands
```bash
# Connect via SSH
ssh root@your-droplet-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Create app directory
mkdir -p /var/www/ambulance-app
cd /var/www/ambulance-app

# Upload your files here (use SCP or Git)
# Then run:
npm install
npm run build
pm2 start npm --name "ambulance-app" -- start

# Setup firewall
ufw allow 5000
ufw enable

# Setup reverse proxy with Nginx (optional)
apt install nginx
```

#### Nginx Configuration (Optional)
Create `/etc/nginx/sites-available/ambulance-app`:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
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
    }
}
```

Enable the site:
```bash
ln -s /etc/nginx/sites-available/ambulance-app /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### 2. Shared Hosting (cPanel)

Most shared hosts don't support Node.js. Use VPS instead.

### 3. Heroku (Free Tier Available)

#### Steps:
1. Install Heroku CLI
2. Create new Heroku app
3. Add these files to your project root:

**Procfile:**
```
web: npm start
```

**Deploy:**
```bash
git init
git add .
git commit -m "Initial commit"
heroku create your-app-name
git push heroku main
```

### 4. Vercel (Recommended for Easy Setup)

#### Steps:
1. Go to vercel.com
2. Import your project from GitHub
3. Deploy automatically

#### vercel.json (add to project root):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/$1"
    }
  ]
}
```

### 5. Docker Deployment

#### Build Docker Image:
```bash
docker build -t ambulance-app .
docker run -p 5000:5000 ambulance-app
```

#### Docker Compose (docker-compose.yml):
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## SSL Certificate Setup (Required for PWA)

### Using Let's Encrypt (Free):
```bash
# Install Certbot
apt install certbot python3-certbot-nginx

# Get certificate
certbot --nginx -d your-domain.com

# Auto-renewal
crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Environment Variables

Create `.env` file in project root:
```env
NODE_ENV=production
PORT=5000
```

## Mobile App Installation

Once hosted with HTTPS:
1. Users visit your website on mobile
2. Browser will show "Add to Home Screen" option
3. App installs like a native app
4. Works offline with cached content

## Monitoring & Maintenance

### Check App Status:
```bash
pm2 status
pm2 logs ambulance-app
```

### Update App:
```bash
cd /var/www/ambulance-app
git pull  # if using Git
npm run build
pm2 restart ambulance-app
```

### Backup:
```bash
tar -czf ambulance-app-backup.tar.gz /var/www/ambulance-app
```

## Troubleshooting

### App Won't Start:
```bash
# Check logs
pm2 logs ambulance-app

# Check port availability
netstat -tlnp | grep :5000

# Restart
pm2 restart ambulance-app
```

### PWA Features Not Working:
- Ensure HTTPS is enabled
- Check service worker registration in browser console
- Verify manifest.json is accessible

### Performance Issues:
- Use PM2 cluster mode: `pm2 start npm --name "ambulance-app" -i max -- start`
- Add Redis for session storage if needed
- Use CDN for static assets

## Cost Estimates

- **DigitalOcean Droplet**: $5/month
- **Vercel**: Free tier available
- **Heroku**: Free tier available
- **AWS EC2**: $3-5/month for t2.micro
- **Shared Hosting**: Usually not compatible

## Domain Setup

1. Buy domain from Namecheap, GoDaddy, etc.
2. Point A record to your server IP
3. Wait for DNS propagation (up to 24 hours)
4. Setup SSL certificate

## Support

The app includes:
- Mobile-responsive design
- PWA features (offline support, installable)
- Driver interface for ambulance operators
- Public interface for citizens
- Real-time emergency alerts
- Activity tracking

All features work without requiring any external APIs or databases - it uses in-memory storage for the demo.