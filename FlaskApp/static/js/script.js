// Initialize Lucide icons
lucide.createIcons();

// Sample data
const categories = [
    {
        name: "Textbooks",
        image: "https://images.unsplash.com/photo-1755620500895-b693799658ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VkJTIwdGV4dGJvb2tzJTIwc3RhY2slMjBib29rc3xlbnwxfHx8fDE3NTc5NzY1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        productCount: 156
    },
    {
        name: "Dorm Essentials",
        image: "https://images.unsplash.com/photo-1694151569569-8288e3118519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3JtJTIwcm9vbSUyMGZ1cm5pdHVyZSUyMGRlc2t8ZW58MXx8fHwxNzU3OTc2NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        productCount: 89
    },
    {
        name: "Clothing",
        image: "https://images.unsplash.com/photo-1724763626380-ee4188fdcf6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzdHVkZW50JTIwY2xvdGhpbmclMjB0aHJpZnR8ZW58MXx8fHwxNzU3OTc2NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        productCount: 234
    },
    {
        name: "Electronics",
        image: "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBlbGVjdHJvbmljcyUyMGNvbGxlZ2UlMjBzdHVkZW50fGVufDF8fHx8MTc1Nzk3NjU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        productCount: 67
    }
];

const featuredProducts = [
    {
        id: "1",
        name: "Calculus Textbook (11th Edition)",
        price: 45,
        originalPrice: 280,
        image: "https://images.unsplash.com/photo-1755620500895-b693799658ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VkJTIwdGV4dGJvb2tzJTIwc3RhY2slMjBib29rc3xlbnwxfHx8fDE3NTc5NzY1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.5,
        reviewCount: 23,
        condition: "Good",
        listingType: 'sell',
        isSale: true
    },
    {
        id: "2",
        name: "Dorm Desk Chair - Blue",
        price: 30,
        image: "https://images.unsplash.com/photo-1694151569569-8288e3118519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3JtJTIwcm9vbSUyMGZ1cm5pdHVyZSUyMGRlc2t8ZW58MXx8fHwxNzU3OTc2NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.2,
        reviewCount: 15,
        condition: "Like New",
        listingType: 'sell'
    },
    {
        id: "3",
        name: "MacBook Air M1 - Trade for Gaming Laptop",
        price: 0,
        image: "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBlbGVjdHJvbmljcyUyMGNvbGxlZ2UlMjBzdHVkZW50fGVufDF8fHx8MTc1Nzk3NjU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        reviewCount: 8,
        condition: "Excellent",
        listingType: 'exchange'
    },
    {
        id: "4",
        name: "Winter Clothes Bundle",
        price: 0,
        image: "https://images.unsplash.com/photo-1724763626380-ee4188fdcf6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzdHVkZW50JTIwY2xvdGhpbmclMjB0aHJpZnR8ZW58MXx8fHwxNzU3OTc2NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9,
        reviewCount: 12,
        condition: "Good",
        listingType: 'donate'
    }
];

// Create category card HTML
function createCategoryCard(category) {
    return `
        <div class="category-card">
            <div class="category-image-container">
                <img src="${category.image}" alt="${category.name}" class="category-image">
                <div class="category-overlay"></div>
                <div class="category-content">
                    <h3>${category.name}</h3>
                    <p>${category.productCount} products</p>
                </div>
            </div>
        </div>
    `;
}

// Create product card HTML
function createProductCard(product) {
    const getListingBadge = () => {
        switch(product.listingType) {
            case 'exchange':
                return '<div class="badge badge-blue">Exchange</div>';
            case 'donate':
                return '<div class="badge badge-green">Free</div>';
            default:
                return product.isSale ? '<div class="badge badge-destructive">Sale</div>' : '';
        }
    };

    const getActionButton = () => {
        switch(product.listingType) {
            case 'exchange':
                return 'Propose Trade';
            case 'donate':
                return 'Request Item';
            default:
                return 'Contact Seller';
        }
    };

    const renderStars = (rating) => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            const filled = i <= Math.floor(rating) ? 'filled' : '';
            starsHtml += `<i data-lucide="star" class="star ${filled}"></i>`;
        }
        return starsHtml;
    };

    const priceDisplay = product.listingType === 'donate' 
        ? '<span class="price-free">Free</span>'
        : `<span class="price-current">$${product.price}</span>
           ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}`;

    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-badges">
                    ${getListingBadge()}
                </div>
                <div class="product-condition">
                    <div class="badge">${product.condition}</div>
                </div>
                <button class="btn btn-secondary btn-small product-favorite">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span class="rating-text">(${product.reviewCount} reviews)</span>
                </div>
                
                <div class="product-footer">
                    <div class="product-price">
                        ${priceDisplay}
                    </div>
                    <button class="btn btn-primary btn-small">
                        ${getActionButton()}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Populate categories
function populateCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categories.map(createCategoryCard).join('');
    }
}

// Populate products
function populateProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = featuredProducts.map(createProductCard).join('');
        // Re-initialize Lucide icons for dynamically added content
        lucide.createIcons();
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navigation = document.getElementById('navigation');

    if (mobileMenuBtn && navigation) {
        mobileMenuBtn.addEventListener('click', () => {
            navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    // Here you would implement actual search functionality
                    alert(`Searching for: ${searchTerm}`);
                }
            }
        });
    }
}

// Newsletter form functionality
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const joinButton = newsletterForm?.querySelector('.btn');

    if (joinButton) {
        joinButton.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterInput?.value.trim();
            if (email) {
                console.log('Newsletter signup:', email);
                alert(`Thanks for signing up with: ${email}`);
                newsletterInput.value = '';
            }
        });
    }
}

// Add click handlers for interactive elements
function initializeInteractivity() {
    // Hero buttons
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Hero button clicked:', btn.textContent.trim());
            // This is a placeholder, you need to define the actual link
            window.location.href = `/${btn.textContent.trim().toLowerCase()}`;
        });
    });

    // CTA buttons
    document.querySelectorAll('.cta-buttons .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('CTA button clicked:', btn.textContent.trim());
            // This is a placeholder, you need to define the actual link
            window.location.href = `/${btn.textContent.trim().toLowerCase()}`;
        });
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove e.preventDefault() if your HTML links have proper href attributes
            // For now, let's keep it to demonstrate a JS-based redirect
            e.preventDefault(); 
            const linkText = link.textContent.trim();
            console.log('Navigation clicked:', linkText);
            
            // Map the link text to the correct page URL
            let targetUrl;
            switch(linkText) {
                case 'Browse':
                    targetUrl = '/browse.html'; // Or your specific route
                    break;
                case 'Sell':
                    targetUrl = '/sell.html';
                    break;
                case 'Exchange':
                    targetUrl = '/exchange.html';
                    break;
                case 'Donate':
                    targetUrl = '/donate.html';
                    break;
                case 'Login':
                    targetUrl = '/login.html'; // Adjust as needed
                    break;
                default:
                    targetUrl = '/';
            }
            
            window.location.href = targetUrl;
        });
    });

    // Footer links
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Footer link clicked:', link.textContent);
            // Replace with actual navigation logic
            window.location.href = `/${link.textContent.trim().toLowerCase()}.html`;
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    // Redirect to a search results page
                    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
}

// Newsletter form functionality
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterInput?.value.trim();
            if (email) {
                console.log('Newsletter signup:', email);
                // Here, you would send the email to your server.
                // For now, let's show a success message on the console.
                alert(`Thank you for signing up with ${email}!`);
                newsletterInput.value = '';
            }
        });
    }
}