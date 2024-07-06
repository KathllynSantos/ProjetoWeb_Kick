document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu_icon');
    const navMenu = document.querySelector('nav ul');
    const dropdownButtons = document.querySelectorAll('.drop_btt');

    menuButton.addEventListener('click', function () {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });
});
