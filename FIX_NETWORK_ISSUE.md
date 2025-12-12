# 🌐 Fix GitHub Connection Issue

## Problem
"Failed to connect to github.com port 443" - Network/Firewall blocking GitHub

## Quick Solutions

### Solution 1: Check Internet Connection
```bash
# Test GitHub connectivity
ping github.com
```

### Solution 2: Use Different Port
```bash
# Change remote URL to use port 22 (SSH)
git remote set-url origin git@github.com:upp275/portfolio.git
git push -u origin main
```

### Solution 3: Configure Git for Proxy/Firewall
```bash
# If behind corporate firewall
git config --global http.proxy http://proxy-server:port
git config --global https.proxy https://proxy-server:port
```

### Solution 4: Use GitHub CLI (Recommended)
```bash
# Install GitHub CLI
winget install GitHub.cli

# Authenticate
gh auth login

# Push using GitHub CLI
gh repo create upp275/portfolio --public --source=. --remote=origin --push
```

### Solution 5: Use GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with upp275 account
3. Add existing repository (your portfolio folder)
4. Publish to GitHub

### Solution 6: Disable VPN/Antivirus
- Temporarily disable VPN
- Disable antivirus/firewall
- Try git push again

## Test Connection
```bash
# Test if GitHub is reachable
curl -I https://github.com
```

## Quick Fix (Easiest)
**Use GitHub Desktop** - it handles network issues automatically and provides a GUI interface.