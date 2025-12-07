document.addEventListener('DOMContentLoaded', function() 
{
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const mobileAside = document.getElementById('mobileAside');
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    function toggleMenu() 
    {
        const isActive = burgerMenu.classList.contains('active');
        if (!isActive) 
        {
            burgerMenu.classList.add('active');
            mobileNav.classList.add('active');
            mobileAside.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } 
        else 
        {
            closeMenu();
        }
    }
    function closeMenu() 
    {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileAside.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    burgerMenu.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);
    mobileNav.addEventListener('click', function(e) 
    {
        if (e.target.tagName === 'A') 
        {
            closeMenu();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() 
{
        imageMapResize();
});