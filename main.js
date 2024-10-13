// Modal functionality
const modal = document.getElementById("joinModal");
const openModalButton = document.getElementById("openmodal");
const closeModalButton = document.getElementsByClassName("close")[0];

// Open the modal
if (openModalButton) {
    openModalButton.onclick = function () {
        modal.style.display = "block";
    };
}

// Close the modal when the user clicks on <span> (x)
if (closeModalButton) {
    closeModalButton.onclick = function () {
        modal.style.display = "none";
    };
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Handle form submission
document.getElementById("joinForm").onsubmit = function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    if (emailInput) {
        console.log("Email submitted:", emailInput);
        modal.style.display = "none"; // Close the modal after submission
        alert("Thank you for joining! We will keep you updated.");
    } else {
        alert("Please enter a valid email.");
    }
};

// Smooth scroll animation
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
    element.classList.add('animate__animated', 'animate__fadeInUp');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);

// Fade-in effect for title on page load
const title = document.getElementById("title");
const fadeButton = document.getElementById("fadeButton");

// Fade in the title on page load
window.onload = () => {
    title.classList.add("visible");
};

// Fade out the title when the button is clicked
if (fadeButton) {
    fadeButton.onclick = () => {
        title.classList.remove("visible");
    };
}
