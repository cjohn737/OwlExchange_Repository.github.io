// Buyer Saved Items Module
// Handles saved/favorite items functionality

const BuyerSavedItems = (function() {
    
    // Mock data for saved items
    let savedItems = [
        {
            id: '1',
            name: 'Physics Textbook (14th Edition)',
            price: 52.00,
            image: 'https://images.unsplash.com/photo-1755620500895-b693799658ee?w=400',
            seller: 'Alex Kim',
            condition: 'Good',
            listingType: 'sale',
            savedDate: '2 days ago'
        },
        {
            id: '2',
            name: 'Dual Monitor Stand',
            price: 35.00,
            image: 'https://images.unsplash.com/photo-1716471081169-cb8528a395d3?w=400',
            seller: 'Lisa Wang',
            condition: 'Like New',
            listingType: 'sale',
            savedDate: '3 days ago'
        },
        {
            id: '3',
            name: 'Mini Coffee Maker',
            price: 18.00,
            image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400',
            seller: 'Emma Rodriguez',
            condition: 'Good',
            listingType: 'sale',
            savedDate: '5 days ago'
        },
        {
            id: '4',
            name: 'Art Supplies Bundle',
            price: 0,
            image: 'https://images.unsplash.com/photo-1585155770095-17ba53a46a27?w=400',
            seller: 'Rachel Green',
            condition: 'Good',
            listingType: 'donate',
            savedDate: '1 week ago'
        },
        {
            id: '5',
            name: 'Vintage Denim Jacket',
            price: 35.00,
            image: 'https://images.unsplash.com/photo-1724763626380-ee4188fdcf6f?w=400',
            seller: 'Jordan Lee',
            condition: 'Good',
            listingType: 'sale',
            savedDate: '1 week ago'
        },
        {
            id: '6',
            name: 'Study Desk Lamp',
            price: 20.00,
            image: 'https://images.unsplash.com/photo-1694151569569-8288e3118519?w=400',
            seller: 'Mike Chen',
            condition: 'Like New',
            listingType: 'sale',
            savedDate: '2 weeks ago'
        }
    ];
    
    function init() {
        renderSavedItems();
        attachEventListeners();
    }
    
    function renderSavedItems() {
        const itemsGrid = document.querySelector('#saved .items-grid');
        if (!itemsGrid) return;
        
        itemsGrid.innerHTML = savedItems.map(item => {
            const badgeClass = item.listingType === 'donate' ? 'free' : 'sale';
            const badgeText = item.listingType === 'donate' ? 'Free' : 'For Sale';
            const priceDisplay = item.listingType === 'donate' 
                ? '<div class="item-price" style="color: #22c55e;">Free</div>'
                : `<div class="item-price">$${item.price.toFixed(2)}</div>`;
            const actionButton = item.listingType === 'donate'
                ? '<button class="add-cart-btn" data-item-id="' + item.id + '"><i data-lucide="gift"></i><span>Request Item</span></button>'
                : '<button class="add-cart-btn" data-item-id="' + item.id + '"><i data-lucide="shopping-cart"></i><span>Add to Cart</span></button>';
                
            return `
                <div class="item-card" data-item-id="${item.id}">
                    <div class="item-image-container">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <span class="item-badge ${badgeClass}">${badgeText}</span>
                        <button class="favorite-btn active" data-item-id="${item.id}">
                            <i data-lucide="heart"></i>
                        </button>
                    </div>
                    <div class="item-content">
                        <h3 class="item-title">${item.name}</h3>
                        <p class="item-seller">
                            <i data-lucide="user"></i>
                            <span>${item.seller}</span>
                        </p>
                        ${priceDisplay}
                        <div class="item-actions">
                            ${actionButton}
                            <button class="remove-btn" data-item-id="${item.id}">
                                <i data-lucide="heart-off"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Update header count
        const headerCount = document.querySelector('#saved .orders-header h2');
        if (headerCount) {
            headerCount.textContent = `Saved Items (${savedItems.length})`;
        }
        
        // Reinitialize Lucide icons
        lucide.createIcons();
    }
    
    function attachEventListeners() {
        // Event delegation for dynamic content
        const savedTab = document.getElementById('saved');
        if (!savedTab) return;
        
        savedTab.addEventListener('click', function(e) {
            // Handle remove button
            if (e.target.closest('.remove-btn')) {
                const itemId = e.target.closest('.remove-btn').getAttribute('data-item-id');
                removeItem(itemId);
            }
            
            // Handle add to cart button
            if (e.target.closest('.add-cart-btn')) {
                const itemId = e.target.closest('.add-cart-btn').getAttribute('data-item-id');
                addToCart(itemId);
            }
            
            // Handle favorite toggle
            if (e.target.closest('.favorite-btn')) {
                const itemId = e.target.closest('.favorite-btn').getAttribute('data-item-id');
                toggleFavorite(itemId);
            }
        });
    }
    
    function removeItem(itemId) {
        savedItems = savedItems.filter(item => item.id !== itemId);
        renderSavedItems();
        showNotification('Item removed from saved items');
    }
    
    function addToCart(itemId) {
        const item = savedItems.find(i => i.id === itemId);
        if (item) {
            console.log('Adding to cart:', item.name);
            showNotification(`${item.name} added to cart!`);
            // In real implementation, this would add to cart state/localStorage
        }
    }
    
    function toggleFavorite(itemId) {
        const item = savedItems.find(i => i.id === itemId);
        if (item) {
            removeItem(itemId);
        }
    }
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: var(--primary-foreground);
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            z-index: 1000;
            box-shadow: var(--shadow-lg);
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Public API
    return {
        init: init,
        removeItem: removeItem,
        addToCart: addToCart
    };
    
})();

// Add CSS animations
if (!document.getElementById('saved-items-animations')) {
    const style = document.createElement('style');
    style.id = 'saved-items-animations';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
