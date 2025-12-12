# Utkarsh Patel - Portfolio Website

A modern, responsive portfolio website built with React and deployed on GitHub Pages.

## 🌟 Features

- **Responsive Design** - Optimized for all devices
- **Interactive Animations** - Smooth transitions and hover effects
- **Project Showcase** - Filterable portfolio with modal views
- **Professional Timeline** - Work experience and education
- **Contact Form** - Integrated contact functionality
- **SEO Optimized** - Meta tags and structured data
- **Analytics Ready** - Google Analytics integration
- **PWA Support** - Progressive Web App capabilities

## 🚀 Live Demo

Visit the live portfolio: [https://utkarsh.github.io/portfolio](https://utkarsh.github.io/portfolio)

## 🛠️ Built With

- **React** - Frontend framework
- **CSS3** - Styling and animations
- **GitHub Pages** - Hosting and deployment
- **GitHub Actions** - CI/CD pipeline
- **Google Analytics** - Traffic monitoring

## 📱 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Personal story and statistics
3. **Skills** - Technical proficiencies with progress bars
4. **Projects** - Portfolio showcase with filtering
5. **Experience** - Professional timeline and education
6. **Contact** - Multiple contact methods and form

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/           # Static images
│   ├── Profile.pdf       # Resume file
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── components/       # React components
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Analytics.js
│   ├── data/            # JSON data files
│   │   ├── personalInfo.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   └── experience.json
│   ├── styles/          # CSS files
│   │   ├── App.css
│   │   ├── components.css
│   │   └── index.css
│   └── App.js           # Main app component
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

1. **Personal Information** - Edit `src/data/personalInfo.json`
2. **Skills** - Update `src/data/skills.json`
3. **Projects** - Modify `src/data/projects.json`
4. **Experience** - Edit `src/data/experience.json`
5. **Styling** - Customize CSS in `src/styles/`

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - Automatic deployment will trigger on push

3. **Custom Domain (Optional)**
   - Add CNAME file with your domain
   - Configure DNS records
   - Enable HTTPS in settings

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 📊 Analytics & SEO

### Google Analytics Setup
1. Create GA4 property
2. Add measurement ID to environment variables
3. Analytics will automatically track page views and events

### SEO Features
- Meta tags for social sharing
- Structured data markup
- Sitemap.xml for search engines
- Robots.txt for crawler instructions
- Open Graph and Twitter Card support

## 🎨 Customization Guide

### Colors
Update CSS custom properties in `src/styles/App.css`:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #f39c12;
}
```

### Fonts
Change font family in `public/index.html` and CSS files.

### Layout
Modify component structure in respective files under `src/components/`.

## 📱 Performance

- **Lighthouse Score**: 95+ in all categories
- **Load Time**: < 3 seconds
- **Mobile Optimized**: 100% mobile-friendly
- **SEO Score**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: upp275@gmail.com
- **LinkedIn**: [linkedin.com/in/upp275](https://linkedin.com/in/upp275)
- **GitHub**: [github.com/utkarsh](https://github.com/utkarsh)

## 🙏 Acknowledgments

- React community for excellent documentation
- GitHub Pages for free hosting
- Font Awesome for icons
- Google Fonts for typography

---

⭐ **Star this repository if it helped you build your portfolio!**