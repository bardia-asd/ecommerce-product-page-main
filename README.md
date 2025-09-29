# E-commerce Product Page

A modern, responsive e-commerce product page built with React and Vite. This project is a solution to the [Frontend Mentor E-commerce Product Page Challenge](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## 🖼️ Preview

![Desktop Preview](src/assets/images/desktop-preview.jpg)

## 🚀 Live Demo

[View Live Demo](https://ecommerce-product-page-main-drab-phi.vercel.app/)

## ✨ Features

-   **Interactive Product Gallery** - Click on thumbnails to switch between product images
-   **Gallery LightBox** - Open a lightbox gallery by clicking on the large product image
-   **Mobile Navigation** - Touch-friendly navigation controls for mobile devices
-   **Quantity Selector** - Add/remove items with increment/decrement controls
-   **Shopping Cart** - Add items to cart with visual feedback
-   **Responsive Design** - Optimized for desktop, tablet, and mobile devices
-   **Modern UI** - Clean, professional design with smooth animations

## 🛠️ Technologies Used

-   **React** - Frontend framework
-   **Vite** - Build tool and development server
-   **Tailwind CSS** - Utility-first CSS framework
-   **JavaScript (ES6+)** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-ecommerce-product-page-main
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Responsive Design

The application is fully responsive and optimized for:

-   **Desktop** (1440px and above)
-   **Tablet** (768px - 1439px)
-   **Mobile** (375px - 767px)

## 🎯 Challenge Requirements

This project fulfills all the requirements from the Frontend Mentor challenge:

-   ✅ Switch large product image by clicking on thumbnail images
-   ✅ Responsive layout for different screen sizes
-   ✅ Hover states for all interactive elements

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── Icon.jsx
│   ├── Header/
│   │   ├── Avatar.jsx
│   │   ├── Cart.jsx
│   │   ├── Header.jsx
│   │   ├── Logo.jsx
│   │   └── MobileMenu/
│   └── Product/
│       ├── ProductGallery/
│       │   ├── ImageNavigation.jsx
│       │   ├── MainImage.jsx
│       │   ├── NavigationButton.jsx
│       │   ├── ProductGallery.jsx
│       │   └── Thumbnail.jsx
│       ├── ProductInfo/
│       │   └── ProductInfo.jsx
│       └── ProductPage.jsx
├── assets/
│   └── images/
└── data.jsx
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

-   **Challenge**: [Frontend Mentor - E-commerce Product Page](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6)
-   **Live Demo**: [Vercel Deployment](https://ecommerce-product-page-main-drab-phi.vercel.app/)
