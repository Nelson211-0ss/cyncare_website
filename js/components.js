// Function to load HTML components
async function loadComponent(url, elementId) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${url}:`, error);
    }
}

// Function to load and inject the header component
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="bg-dark text-white fixed w-full top-0 z-50">
                <nav class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <!-- Logo -->
                        <a href="/" class="flex items-center space-x-2">
                            <img src="/images/logo.png" alt="CynCare Logo" class="h-10 w-auto">
                            <span class="text-2xl font-bold text-accent">CynCare</span>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="text-white hover:text-accent transition-colors">Home</a>
                            <a href="/about.html" class="text-white hover:text-accent transition-colors">About</a>
                            <a href="/services.html" class="text-white hover:text-accent transition-colors">Services</a>
                            <a href="/contact.html" class="text-white hover:text-accent transition-colors">Contact</a>
                            <a href="/login" class="btn btn-primary">Login</a>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none">
                            <i class="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                    
                    <!-- Mobile Navigation -->
                    <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                        <div class="flex flex-col space-y-4">
                            <a href="/" class="text-white hover:text-accent transition-colors">Home</a>
                            <a href="/about.html" class="text-white hover:text-accent transition-colors">About</a>
                            <a href="/services.html" class="text-white hover:text-accent transition-colors">Services</a>
                            <a href="/contact.html" class="text-white hover:text-accent transition-colors">Contact</a>
                            <a href="/login" class="btn btn-primary w-full text-center">Login</a>
                        </div>
                    </div>
                </nav>
            </header>
        `;

        // Mobile menu toggle functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                const isOpen = mobileMenu.classList.contains('hidden');
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.innerHTML = isOpen 
                    ? '<i class="fas fa-times text-2xl"></i>' 
                    : '<i class="fas fa-bars text-2xl"></i>';
            });
        }
    }
}

// Function to load and inject the footer component
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="bg-dark text-white pt-16 pb-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Company Info -->
                        <div class="space-y-4">
                            <div class="flex items-center space-x-2">
                                <img src="/images/logo.png" alt="CynCare Logo" class="h-10 w-auto">
                                <span class="text-2xl font-bold text-accent">CynCare</span>
                            </div>
                            <p class="text-gray-400">
                                Connecting healthcare facilities with qualified medical professionals through modern staffing solutions.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="text-white hover:text-accent transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="#" class="text-white hover:text-accent transition-colors">
                                    <i class="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" class="text-white hover:text-accent transition-colors">
                                    <i class="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" class="text-white hover:text-accent transition-colors">
                                    <i class="fab fa-instagram text-xl"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="/about.html" class="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
                                <li><a href="/services.html" class="text-gray-400 hover:text-accent transition-colors">Our Services</a></li>
                                <li><a href="/careers" class="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
                                <li><a href="/contact.html" class="text-gray-400 hover:text-accent transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Services -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Services</h3>
                            <ul class="space-y-2">
                                <li><a href="/services.html#temporary" class="text-gray-400 hover:text-accent transition-colors">Healthcare Staffing</a></li>
                                <li><a href="/services.html#travel" class="text-gray-400 hover:text-accent transition-colors">Travel Nursing</a></li>
                                <li><a href="/services.html#permanent" class="text-gray-400 hover:text-accent transition-colors">Permanent Placement</a></li>
                                <li><a href="/services.html#executive" class="text-gray-400 hover:text-accent transition-colors">Executive Search</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-map-marker-alt text-accent"></i>
                                    <span class="text-gray-400">123 Healthcare Ave, Suite 100<br>Medical City, MC 12345</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-phone text-accent"></i>
                                    <a href="tel:1234567890" class="text-gray-400 hover:text-accent transition-colors">(123) 456-7890</a>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-envelope text-accent"></i>
                                    <a href="mailto:contact@cyncare.com" class="text-gray-400 hover:text-accent transition-colors">contact@cyncare.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="mt-12 pt-8 border-t border-gray-700">
                        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p class="text-gray-400 text-sm">
                                © ${new Date().getFullYear()} CynCare. All rights reserved.
                            </p>
                            <div class="flex space-x-6">
                                <a href="/privacy" class="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</a>
                                <a href="/terms" class="text-gray-400 hover:text-accent transition-colors text-sm">Terms of Service</a>
                                <a href="/sitemap" class="text-gray-400 hover:text-accent transition-colors text-sm">Sitemap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
}); 