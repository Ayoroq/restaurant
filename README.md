# As É Dey Hot! Restaurant Website

A dynamic restaurant website showcasing global cuisine with a focus on bold flavors and authentic dishes. Built with vanilla JavaScript and Webpack.

## About

**As É Dey Hot!** is a multi-cultural restaurant website featuring:
- Global fusion cuisine from Lagos to Bangkok
- Interactive menu with dynamic content loading
- Responsive design with mobile-first approach
- Single-page application with tab-based navigation

## Features

- **Dynamic Content Loading**: JavaScript modules for different pages (Home, Menu, About, Contact)
- **Interactive Menu**: Organized food categories with images and pricing
- **Modern Build Process**: Webpack bundling with development server
- **Asset Management**: Optimized image loading and CSS processing

## Technologies Used

- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS3 with Flexbox and Grid
- **Build Tool**: Webpack 5
- **Development**: Webpack Dev Server with hot reloading
- **Assets**: Images, fonts, and icons

## Project Structure

```
restaurant/
├── src/
│   ├── assets/          # Images and icons
│   ├── homepage.js      # Home page content
│   ├── menu.js          # Menu page content
│   ├── about.js         # About page content
│   ├── contact.js       # Contact page content
│   ├── index.js         # Main entry point
│   ├── styles.css       # Main stylesheet
│   ├── reset.css        # CSS reset
│   └── template.html    # HTML template
├── dist/                # Built files (generated)
├── webpack.config.js    # Webpack configuration
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd restaurant
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npx webpack serve
```

4. Open your browser to `http://localhost:8080`

### Build for Production
```bash
npx webpack --mode=production
```

## Menu Categories

- **Main Dishes**: Global fusion entrees
- **Proteins/Meats**: Grilled and seasoned options
- **Rice & Grains**: Staple accompaniments
- **Snacks/Small Chops**: Appetizers and sides
- **Drinks**: Beverages and refreshments

## Design Features

- **Responsive Typography**: Dynamic text scaling
- **Image Optimization**: Compressed assets for fast loading
- **Color Scheme**: Warm, inviting palette
- **Navigation**: Intuitive tab-based interface

## Image Credits

All food images are sourced from [Unsplash](https://unsplash.com) - a platform for freely usable images.

## Contributing

This is a learning project from The Odin Project curriculum. Feel free to fork and experiment!

##  License

ISC License

---

*"We don't just serve food. We serve flavor." *