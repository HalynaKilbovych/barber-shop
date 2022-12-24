(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        body: document.querySelector('body'),
        menuList: document.querySelector('.mobile__nav-list'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menuList.addEventListener('click', removeMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('backdrop--is-hidden');
        refs.body.classList.toggle('no-scroll');
    }

    function removeMenu() {
        refs.menu.classList.add('backdrop--is-hidden');
        refs.body.classList.remove('no-scroll');
    }
})();
