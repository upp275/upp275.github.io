# 🔧 Change GitHub Account in VS Code

## Method 1: VS Code Settings (Easiest)

### Step 1: Open Command Palette
- Press `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)

### Step 2: Sign Out Current Account
- Type: `Git: Sign Out`
- Select it and confirm

### Step 3: Sign In with Correct Account
- Type: `Git: Sign In`
- Choose "Sign in with GitHub"
- Browser will open - sign in with `upp275` account
- Authorize VS Code

## Method 2: Clear Credentials Manually

### Step 1: Open VS Code Settings
- Press `Ctrl + ,` (Windows) or `Cmd + ,` (Mac)

### Step 2: Search for Git
- Search: "git.terminalAuthentication"
- Uncheck the box if checked

### Step 3: Clear Windows Credential Manager
- Press `Windows + R`
- Type: `control keymgr.dll`
- Find GitHub entries and delete them
- Restart VS Code

## Method 3: Command Line in VS Code Terminal

### Step 1: Open Terminal in VS Code
- Press `Ctrl + `` (backtick)

### Step 2: Update Git Config
```bash
git config --global user.name "upp275"
git config --global user.email "upp275@gmail.com"
```

### Step 3: Clear Credential Cache
```bash
git config --global --unset credential.helper
```

### Step 4: Test Authentication
```bash
git push -u origin main
```

## Method 4: Use GitHub Extension

### Step 1: Install GitHub Extension
- Go to Extensions (Ctrl + Shift + X)
- Search "GitHub Pull Requests and Issues"
- Install if not already installed

### Step 2: Sign Out and Sign In
- Click GitHub icon in Activity Bar
- Click "Sign out" if signed in
- Click "Sign in to GitHub"
- Use `upp275` account

## Verify Success

After changing account, try:
```bash
git push -u origin main
```

Your portfolio will be live at: https://upp275.github.io/portfolio

## Quick Fix
If still having issues, restart VS Code after changing credentials.