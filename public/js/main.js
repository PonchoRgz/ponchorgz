// Theme toggle functionality with enhanced transitions
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const html = document.documentElement;
    
    // Add transition class to html element
    html.classList.add('theme-transition');
    
    // Check for saved theme preference, otherwise use system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Function to toggle theme
    function toggleTheme() {
        // Add transition class
        html.classList.add('theme-transition');
        
        // Toggle dark mode
        html.classList.toggle('dark');
        
        // Save preference
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        
        // Remove transition class after animation completes
        setTimeout(() => {
            html.classList.remove('theme-transition');
        }, 300);
    }

    // Toggle theme with transition
    themeToggle.addEventListener('click', toggleTheme);
    mobileThemeToggle.addEventListener('click', toggleTheme);

    // Mobile menu functionality with enhanced animations
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.getElementsByTagName('a');

    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (!isOpen) {
            // Opening menu
            mobileMenu.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            
            // Add fade-in animation
            requestAnimationFrame(() => {
                mobileMenu.classList.add('opacity-100');
                mobileMenu.classList.remove('opacity-0');
            });
        } else {
            // Closing menu with fade-out animation
            mobileMenu.classList.add('opacity-0');
            mobileMenu.classList.remove('opacity-100');
            
            // Wait for animation to complete before hiding
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }, 300);
        }
    }

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    mobileMenuClose.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking a link
    Array.from(mobileMenuLinks).forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Enhanced scroll animations with Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in, .timeline-item, .section-title');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger effect to child elements
                const children = entry.target.querySelectorAll('.animate-text-reveal');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                });
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll with enhanced behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Add highlight effect to target section
                target.classList.add('highlight');
                setTimeout(() => target.classList.remove('highlight'), 1000);
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced contact form handling with loading states
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const submitText = submitButton.querySelector('.submit-text');
        const originalText = submitText.textContent;
        const formInputs = contactForm.querySelectorAll('input, textarea');

        // Disable form during submission
        formInputs.forEach(input => input.disabled = true);
        submitButton.disabled = true;
        submitButton.classList.add('btn-loading');
        submitText.textContent = '';

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success state
            submitButton.classList.remove('btn-loading');
            submitButton.classList.add('bg-green-500');
            submitText.textContent = 'Message Sent!';
            
            // Reset form
            contactForm.reset();
            
            // Reset button state after delay
            setTimeout(() => {
                submitButton.classList.remove('bg-green-500');
                submitText.textContent = originalText;
                submitButton.disabled = false;
                formInputs.forEach(input => input.disabled = false);
            }, 2000);
        } catch (error) {
            // Show error state
            submitButton.classList.remove('btn-loading');
            submitButton.classList.add('bg-red-500');
            submitText.textContent = 'Error! Try Again';
            
            // Reset button state after delay
            setTimeout(() => {
                submitButton.classList.remove('bg-red-500');
                submitText.textContent = originalText;
                submitButton.disabled = false;
                formInputs.forEach(input => input.disabled = false);
            }, 2000);
        }
    });

    // Enhanced blog search with loading state
    const blogSearch = document.getElementById('blog-search');
    const blogPosts = document.querySelectorAll('.blog-post-card');
    let searchTimeout;

    function searchBlogPosts(searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        
        // Add loading state
        blogPosts.forEach(post => {
            post.classList.add('loading');
        });

        // Simulate search delay
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            blogPosts.forEach(post => {
                const title = post.querySelector('h3').textContent.toLowerCase();
                const content = post.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
                const tags = post.dataset.tags ? post.dataset.tags.toLowerCase() : '';
                
                const isMatch = title.includes(searchTermLower) || 
                               content.includes(searchTermLower) || 
                               tags.includes(searchTermLower);
                
                // Remove loading state
                post.classList.remove('loading');
                
                // Add/remove fade effect
                if (isMatch) {
                    post.classList.remove('opacity-0', 'translate-y-4');
                    post.classList.add('opacity-100', 'translate-y-0');
                } else {
                    post.classList.add('opacity-0', 'translate-y-4');
                    post.classList.remove('opacity-100', 'translate-y-0');
                }
                
                // Hide/show posts with a slight delay for animation
                setTimeout(() => {
                    post.style.display = isMatch ? 'block' : 'none';
                }, isMatch ? 0 : 300);
            });
        }, 300);
    }

    // Add search event listener with loading state
    blogSearch.addEventListener('input', (e) => {
        searchBlogPosts(e.target.value);
    });

    // Initialize all blog posts with transition classes
    blogPosts.forEach(post => {
        post.classList.add('transition-all', 'duration-300', 'opacity-100', 'translate-y-0');
    });

    // Add hover effect for project cards with enhanced animations
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.project-card-content').style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-card-content').style.transform = 'translateY(0)';
        });
    });
}); 