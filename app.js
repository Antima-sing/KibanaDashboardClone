document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Show the clicked section
            const sectionId = this.getAttribute("data-section");
            document.getElementById(sectionId).classList.add("active");
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add("active");
    }
});
