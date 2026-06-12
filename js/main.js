/**
 * BookMyDoc - Main JavaScript File V2
 */

$(document).ready(function() {

    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Navbar Scroll Effect
    const navbar = $('#navbar-main');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            navbar.addClass('scrolled');
        } else {
            // Only remove if mobile menu is closed
            if(!$('#navbarNav').hasClass('show')){
                navbar.removeClass('scrolled');
            }
        }
        
        // Back to top button visibility
        if ($(this).scrollTop() > 400) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    
    // Trigger scroll immediately
    $(window).trigger('scroll');

    // Ensure navbar is white when mobile menu opens
    $('.navbar-toggler').click(function() {
        navbar.addClass('scrolled');
    });

    // Smooth Scrolling for anchor links
    $('a.nav-link, a.btn').on('click', function(event) {
        if (this.hash !== "") {
            var target = $(this.hash);
            if(target.length) {
                event.preventDefault();
                
                // Close mobile menu if open
                if($('.navbar-collapse').hasClass('show')) {
                    $('.navbar-toggler').click();
                }
                
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 600, 'swing');
            }
        }
    });

    // Back to Top functionality
    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });

    // Auto-scroll the horizontal screenshots slightly on load to hint at scrollability
    setTimeout(() => {
        const container = $('.screenshot-carousel-container');
        if(container.length) {
            container.animate({ scrollLeft: 120 }, 800, 'swing', function() {
                container.animate({ scrollLeft: 0 }, 800, 'swing');
            });
        }
    }, 1500);


});
