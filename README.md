# LGK Recruitment & Migration - Professional Visa & Recruitment Services Website

A modern, responsive website for a hybrid business offering both migration visa services and recruitment services in Australia.

## 🌟 Features

### Design & User Experience
- **Modern, Professional Design** - Clean and contemporary layout with gradient backgrounds
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations** - Fade-in effects, hover animations, and parallax scrolling
- **Interactive Elements** - Hover effects, form validation, and dynamic navigation

### Migration Services Section
- Business Visas (Subclass 188, 132)
- Skilled Migration (Subclass 189, 190, 491)
- Employer Sponsored Visas (Subclass 482, 186)
- Family Visas (Partner, Parent, Child)

### Recruitment Services Section
- Executive Search
- Technology Recruitment
- Finance & Accounting
- General Recruitment

### Technical Features
- **Mobile-First Design** - Responsive navigation with hamburger menu
- **Form Handling** - Contact form with validation and success notifications
- **Performance Optimized** - Fast loading with optimized CSS and JavaScript
- **SEO Friendly** - Semantic HTML structure
- **Accessibility** - ARIA labels and keyboard navigation support

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website should load immediately with all features working

### File Structure
```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### Changing Colors
The website uses a blue color scheme. To change colors, update these CSS variables in `styles.css`:

```css
/* Primary Blue */
#2563eb

/* Secondary Blue */
#3b82f6

/* Dark Blue */
#1d4ed8

/* Background Colors */
#f8fafc (light background)
#1e293b (dark background)
```

### Updating Content

#### Company Information
- **Business Name**: Already set to "LGK Recruitment & Migration"
- **Contact Details**: Update phone, email, and address in the contact section
- **Business Hours**: Modify in the contact section

#### Services
- **Migration Services**: Update visa types and descriptions in the migration section
- **Recruitment Services**: Modify job categories and descriptions in the recruitment section

#### Statistics
The statistics section now uses descriptive words instead of numbers for a cleaner look:
```html
<div class="stat">
    <h3>Expert</h3>  <!-- Uses descriptive words -->
    <p>Visa Applications</p>
</div>
```

### Adding New Sections
To add a new section, follow this structure:

```html
<section id="new-section" class="services-section">
    <div class="container">
        <div class="section-header">
            <h2>Section Title</h2>
            <p>Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Modifying Navigation
Add new menu items by updating the navigation in `index.html`:

```html
<li class="nav-item">
    <a href="#new-section" class="nav-link">New Section</a>
</li>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- Hamburger menu for navigation
- Optimized touch targets
- Simplified layouts for small screens
- Fast loading on mobile networks

## 🔧 Technical Details

### CSS Framework
- Custom CSS with modern features
- CSS Grid and Flexbox for layouts
- CSS animations and transitions
- Mobile-first responsive design

### JavaScript Features
- Mobile navigation toggle
- Smooth scrolling navigation
- Form validation and submission
- Intersection Observer for animations
- Dynamic counter animations
- Parallax scrolling effects

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form

The contact form includes:
- Name, email, phone fields
- Service selection dropdown
- Message textarea
- Form validation
- Success notifications
- Loading states

**Note**: The form currently simulates submission. To make it functional, you'll need to:
1. Set up a backend server
2. Configure email sending (PHP, Node.js, etc.)
3. Update the form submission handler in `script.js`

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images (when added)
- Fast loading times
- Mobile-friendly design

## 🚀 Deployment

### Local Development
Simply open `index.html` in a web browser to view the website locally.

### Web Hosting
Upload all files to your web hosting provider:
1. Upload `index.html`, `styles.css`, and `script.js`
2. Ensure all files are in the same directory
3. Access via your domain name

### Recommended Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **Traditional hosting**: cPanel, FTP, etc.

## 🔒 Security Considerations

- Form validation on both client and server side
- HTTPS recommended for production
- Input sanitization for form data
- Regular security updates

## 📈 Analytics Integration

To add Google Analytics:
1. Get your tracking ID from Google Analytics
2. Add the tracking code to the `<head>` section of `index.html`
3. Update the tracking ID in the code

## 🤝 Support

For customization help or technical support:
1. Check this README for common solutions
2. Review the code comments for implementation details
3. Test on different devices and browsers

## 📄 License

This website template is provided as-is for business use. Customize as needed for your specific requirements.

---

**Built with ❤️ for LGK Recruitment & Migration** 