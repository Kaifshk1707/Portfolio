function changeMessage() {
    document.getElementById("message").textContent = "You clicked the button!";
}
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const form = document.getElementById('contactForm');
const popup = document.getElementById('popupMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // form submit

    // Yahan form data ko backend pe bhejne ka code add kar sakte hain (optional)

    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
        form.reset();
    }, 3000);
});