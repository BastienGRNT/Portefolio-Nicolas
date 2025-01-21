document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Projet Pendu",
            image: "../imageDev/image1.jpg",
            link: "projet1.html",
            github: "https://github.com/BastienGRNT/pendu-c"
        },
        {
            title: "Projet Siteweb",
            image: "../imageDev/image2.png",
            link: "projet2.html",
            github: "https://github.com/BastienGRNT/MoviesFinder"
        },
        {
            title: "Projet Application",
            image: "../imageDev/image1.jpg",
            link: "projet3.html",
            github: "https://github.com/user/projet-application"
        },
        {
            title: "Projet API",
            image: "../imageDev/image1.jpg",
            link: "projet4.html",
            github: "https://github.com/user/projet-api"
        },
    ];

    const portfolioContainer = document.getElementById("portfolio-container");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-card");

        // Titre
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("project-title");
        titleDiv.textContent = project.title;

        // Image container avec un texte de remplacement
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("project-image");

        if (project.image) {
            const imgElement = document.createElement("img");
            imgElement.src = project.image;
            imgElement.alt = `Screenshot de ${project.title}`;
            imageDiv.appendChild(imgElement);
        } else {
            imageDiv.textContent = "Screen shot";  // Texte si l'image ne se charge pas
        }

        // Lien GitHub
        const githubLink = document.createElement("a");
        githubLink.classList.add("github-link");
        githubLink.href = project.github;
        githubLink.target = "_blank";  // Ouvrir le lien dans un nouvel onglet
        githubLink.textContent = "Voir sur GitHub";

        // Ajout des éléments à la carte du projet
        projectDiv.appendChild(titleDiv);
        projectDiv.appendChild(imageDiv);
        projectDiv.appendChild(githubLink);

        // Redirection lors du clic (sur l'image ou le titre)
        projectDiv.addEventListener("click", function() {
            window.location.href = project.link;
        });

        portfolioContainer.appendChild(projectDiv);
    });
});
