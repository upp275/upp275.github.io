# 🚀 DEPLOY YOUR PORTFOLIO - EXACT COMMANDS

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** check "Add a README file"
5. Click "Create repository"

## Step 2: Run These Commands in Your Terminal

Open Command Prompt/Terminal in your project folder and run:

```bash
# Check current status
git status

# Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Verify remote was added
git remote -v

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait for green checkmark (usually 2-3 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

## Step 5: Test Your Live Site

Visit your portfolio at:
```
https://YOUR_USERNAME.github.io/portfolio
```

## 🎯 What Happens Next

- ✅ Every time you push code, it auto-deploys
- ✅ Your portfolio is live and accessible worldwide
- ✅ Professional URL to share with employers
- ✅ SEO optimized and mobile-friendly

## 🔧 If You Get Errors

**"Repository not found" error:**
```bash
# Make sure you replaced YOUR_USERNAME with your actual GitHub username
git remote remove origin
git remote add origin https://github.com/YOUR_ACTUAL_USERNAME/portfolio.git
git push -u origin main
```

**"Permission denied" error:**
- Make sure you're logged into GitHub
- Use GitHub Desktop or authenticate via browser

**Build fails:**
```bash
# Test locally first
npm install
npm run build
```

## 🎉 SUCCESS!

Once deployed, your portfolio will be live and you can:
- Share the link on LinkedIn
- Include in job applications
- Add to email signatures
- Show to potential employers

Your professional portfolio is now live! 🌟