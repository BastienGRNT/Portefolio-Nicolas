document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Projet Pendu C",
            image: "../imageDev/image1.jpg",
            link: "ProjectPage/projet1.html",
            github: "https://github.com/BastienGRNT/pendu-c",
            languageLogo: "../iconeDev/c.png"
        },
        {
            title: "Projet Pendu JS",
            image: "../imageDev/image2.png",
            link: "ProjectPage/projet1.html",
            github: "https://github.com/BastienGRNT/pendu-js",
            languageLogo: "../iconeDev/js.svg"
        },
        {
            title: "Projet Siteweb",
            image: "../imageDev/image3.png",
            link: "ProjectPage/projet1.html",
            github: "https://github.com/BastienGRNT/MoviesFinder",
            languageLogo: "../iconeDev/postgre.svg"
        },
        {
            title: "Projet Logiciel",
            image: "../imageDev/image4.png",
            link: "ProjectPage/projet1.html",
            github: "https://github.com/BLID-id/hotelapp",
            languageLogo: "../iconeDev/csharp.svg"
        },
        {
            title: "Projet Application",
            image: "../imageDev/image5.png",
            link: "ProjectPage/projet1.html",
            github: "https://github.com/BastienGRNT/APP_LB",
            languageLogo: "../iconeDev/flutter.svg"
        },
    ];

    const portfolioContainer = document.getElementById("portfolio-container");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-card");

        // Titre avec logo
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("project-title");

        const titleText = document.createElement("span");
        titleText.textContent = project.title;

        const langLogo = document.createElement("img");
        langLogo.src = project.languageLogo;
        langLogo.alt = `${project.title} logo`;
        langLogo.classList.add("language-logo");

        titleDiv.appendChild(titleText);
        titleDiv.appendChild(langLogo);

        // Image container
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("project-image");

        const imgElement = document.createElement("img");
        imgElement.src = project.image;
        imgElement.alt = `Screenshot de ${project.title}`;
        imageDiv.appendChild(imgElement);

        // Lien GitHub
        const githubLink = document.createElement("a");
        githubLink.classList.add("github-link");
        githubLink.href = project.github;
        githubLink.target = "_blank";
        githubLink.textContent = "Voir sur GitHub";

        // Ajout des éléments à la carte du projet
        projectDiv.appendChild(titleDiv);
        projectDiv.appendChild(imageDiv);
        projectDiv.appendChild(githubLink);

        // Redirection lors du clic sur la carte entière
        projectDiv.addEventListener("click", function() {
            window.location.href = project.link;
        });

        portfolioContainer.appendChild(projectDiv);
    });
});
