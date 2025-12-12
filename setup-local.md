# Local Jekyll Setup for Windows

## Quick Setup:
1. Download Ruby+Devkit from: https://rubyinstaller.org/downloads/
2. Install with default options
3. Open Command Prompt and run:
   ```
   gem install jekyll bundler
   cd c:\Users\Utkarsh\Documents\INVESTMENTS\Github_Portfolio
   bundle install
   bundle exec jekyll serve --livereload
   ```

## After Setup:
- Your site will be at: http://localhost:4000
- Changes auto-refresh with --livereload
- Only push to GitHub when you're happy with changes

## Alternative - Use GitHub Codespaces:
1. Go to your GitHub repo
2. Click "Code" > "Codespaces" > "Create codespace"
3. Run: `bundle exec jekyll serve --host 0.0.0.0`
4. Preview changes instantly in browser