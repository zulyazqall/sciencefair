/* =====================================
   SCIENCE FAIR 2026
   INTERACTIVE JAVASCRIPT
===================================== */


/* =====================================
   PROJECT FILTER
===================================== */

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active state
        filters.forEach(button => {
            button.classList.remove("active");
        });

        // Add active state
        filter.classList.add("active");

        const category =
            filter.dataset.filter;


        // Filter projects
        projects.forEach(project => {

            if (
                category === "all" ||
                project.dataset.category === category
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =====================================
   PROJECT MODAL
===================================== */

const modal =
    document.getElementById("projectModal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalStudent =
    document.getElementById("modalStudent");

const modalCategory =
    document.getElementById("modalCategory");


/*
   Open project information
*/

projects.forEach(project => {

    project.addEventListener("click", () => {

        modalTitle.textContent =
            project.dataset.title;

        modalDescription.textContent =
            project.dataset.description;

        modalStudent.textContent =
            project.dataset.student;

        modalCategory.textContent =
            project.dataset.category;

        modal.classList.add("show");

    });

});


/*
   Close modal
*/

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


/*
   Close by clicking outside
*/

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/*
   Close with ESC
*/

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


/* =====================================
   MOBILE MENU
===================================== */

const mobileMenu =
    document.querySelector(".mobile-menu");

const navLinks =
    document.querySelector(".nav-links");


mobileMenu.addEventListener("click", () => {

    if (
        navLinks.classList.contains("mobile-open")
    ) {

        navLinks.classList.remove("mobile-open");

    } else {

        navLinks.classList.add("mobile-open");

    }

});


/*
   Close mobile navigation
   after selecting a link
*/

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove(
                "mobile-open"
            );

        });

    });