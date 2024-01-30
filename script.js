document.addEventListener('DOMContentLoaded', function () {
    function scrollToTarget(targetId){
        var targetElement = document.getElementById(targetId);
        if(targetElement){
            var headerHeight = document.querySelector('header').offsetHeight;
            var targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    function highlightActiveLink(){
        var headerHeight = document.querySelector('header').offsetHeight;
        var sections = document.querySelectorAll('.scroll-section');
        var isAtTop = window.scrollY < headerHeight;
        var homeLink = document.getElementById('hero-section-link');
        var aboutMeLink = document.getElementById('aboutme-link');
        if (isAtTop) {
            homeLink.classList.add('active');
            aboutMeLink.classList.remove('active');
            return;
        }

    sections.forEach(function(section){
        var sectionTop = section.offsetTop - headerHeight;
        var sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            var activeLinkId = section.getAttribute('id') + '-link';
            var activeLink = document.getElementById(activeLinkId);
            if (activeLink){
                navbarLinks.forEach(function (link) {
                    link.classList.remove('active');
                });
                activeLink.classList.add('active');
            }
        }
    });
}


    var navbarLinks = document.querySelectorAll('.links');
    navbarLinks.forEach(function (link){
        link.addEventListener('click',function(event){
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            scrollToTarget(targetId);
        });
    });

    window.addEventListener('scroll',highlightActiveLink);

    highlightActiveLink();

    var homeLink = document.getElementById('hero-section-link');
    if(homeLink){
        homeLink.classList.add('active');
    }
});