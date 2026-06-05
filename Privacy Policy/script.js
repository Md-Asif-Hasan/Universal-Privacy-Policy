// Set current date
document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);
    
    // Set current year for footer
    document.getElementById('year').textContent = currentDate.getFullYear();
    
    // Open first section by default
    const firstSection = document.querySelector('.section-header');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});

// Toggle section accordion
function toggleSection(header) {
    header.classList.toggle('active');
    
    // Close other sections (optional - remove if you want multiple sections open)
    const allHeaders = document.querySelectorAll('.section-header');
    allHeaders.forEach(h => {
        if (h !== header) {
            h.classList.remove('active');
        }
    });
}

// Smooth scroll for table of contents links
document.querySelectorAll('.table-of-contents a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Open the section if it's closed
            const header = targetSection.querySelector('.section-header');
            if (header && !header.classList.contains('active')) {
                header.classList.add('active');
            }
            
            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, targetId);
        }
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const hash = window.location.hash;
    if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            const header = targetSection.querySelector('.section-header');
            if (header) {
                header.classList.add('active');
            }
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Check for hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                const header = targetSection.querySelector('.section-header');
                if (header) {
                    header.classList.add('active');
                }
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }
});

// Add keyboard navigation for accessibility
document.querySelectorAll('.section-header').forEach(header => {
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    
    header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSection(this);
            this.setAttribute('aria-expanded', this.classList.contains('active'));
        }
    });
    
    // Update aria-expanded when toggled
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                header.setAttribute('aria-expanded', header.classList.contains('active'));
            }
        });
    });
    observer.observe(header, { attributes: true });
});

// Print functionality
function printPage() {
    window.print();
}

// Search functionality (optional enhancement)
function searchPolicy(query) {
    const sections = document.querySelectorAll('.policy-section');
    const lowerQuery = query.toLowerCase();
    
    sections.forEach(section => {
        const content = section.textContent.toLowerCase();
        const header = section.querySelector('.section-header');
        
        if (content.includes(lowerQuery)) {
            section.style.display = 'block';
            if (header && !header.classList.contains('active')) {
                header.classList.add('active');
            }
        } else {
            section.style.display = query ? 'none' : 'block';
        }
    });
}

// Add search input dynamically (optional)
document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.table-of-contents');
    if (toc) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.style.marginBottom = '1rem';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search privacy policy...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        `;
        
        searchInput.addEventListener('input', function() {
            searchPolicy(this.value);
            if (this.value) {
                this.style.borderColor = '#2563eb';
            } else {
                this.style.borderColor = '#e2e8f0';
            }
        });
        
        searchContainer.appendChild(searchInput);
        toc.insertBefore(searchContainer, toc.firstChild);
    }
});

// Copy section link functionality
document.querySelectorAll('.policy-section').forEach(section => {
    const header = section.querySelector('.section-header');
    if (header) {
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '🔗';
        copyBtn.style.cssText = `
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            margin-left: 0.5rem;
            opacity: 0.5;
            transition: opacity 0.3s ease;
        `;
        copyBtn.title = 'Copy section link';
        
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const sectionId = section.getAttribute('id');
            const url = window.location.origin + window.location.pathname + '#' + sectionId;
            
            navigator.clipboard.writeText(url).then(() => {
                copyBtn.innerHTML = '✓';
                setTimeout(() => {
                    copyBtn.innerHTML = '🔗';
                }, 2000);
            });
        });
        
        copyBtn.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
        });
        
        copyBtn.addEventListener('mouseleave', function() {
            this.style.opacity = '0.5';
        });
        
        header.appendChild(copyBtn);
    }
});

// Performance: Lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}
