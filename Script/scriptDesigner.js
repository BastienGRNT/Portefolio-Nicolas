document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-gallery");

    const imageNames = [
        "../image/design1.jpg",
        "../image/design2.jpg",
        "../image/design3.jpg",
        "../image/design4.jpg",
        "../image/design5.jpg",
    ];

    const imageFolder = "../image/";

    function displayImages() {
        imageNames.forEach(imageName => {
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("logo");

            const imgElement = document.createElement("img");
            imgElement.src = `${imageFolder}${imageName}`;
            imgElement.alt = imageName.split(".")[0];

            imgDiv.appendChild(imgElement);
            imageContainer.appendChild(imgDiv);
        });
    }

    displayImages();
});
