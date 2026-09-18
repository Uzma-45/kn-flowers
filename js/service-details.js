const services = {

    "bridal-jewellery": {
        title: "Bridal Floral Jewellery",
        image: "../images/flowers/collagebridal.png",
        description: "Beautiful floral jewellery designed especially for brides. Traditional and modern floral designs made to complement your bridal look.",
        items: [
            "Floral Necklace",
            "Floral Earrings",
            "Floral Bangles",
            "Floral Maang Tikka"
        ]
    },


    "car-decoration": {
        title: "Wedding Car Decoration",
        image: "../images/flowers/carcollage.png",
        description: "Elegant floral decorations for wedding cars and special occasions. Choose a design that matches your wedding theme.",
        items: [
            "Bonnet Decoration",
            "Front & Side Decoration",
            "Door Decoration",
            "Custom Floral Designs"
        ]
    },


    "bridal-headdress": {
        title: "Bridal Floral Headdress",
        image: "../images/flowers/head.png",
        description: "Elegant floral hair and headdress designs that complete the bridal look with traditional and beautiful floral arrangements.",
        items: [
            "Jasmine Headdress",
            "Rose Floral Designs",
            "Traditional Styles",
            "Custom Designs"
        ]
    },


    "groom-accessories": {
        title: "Groom Floral Accessories",
        image: "../images/flowers/groom.png",
        description: "Traditional and stylish floral accessories designed especially for the groom.",
        items: [
            "Groom Headdress",
            "Floral Sehra",
            "Turban Decoration",
            "Floral Brooch"
        ]
    },


    "wedding-decoration": {
        title: "Wedding Flower Decoration",
        image: "../images/flowers/stage.png",
        description: "Beautiful floral decorations designed to bring elegance and beauty to your wedding venue.",
        items: [
            "Stage Decoration",
            "Entrance Decoration",
            "Floral Backdrops",
            "Custom Decoration"
        ]
    },


    "custom-designs": {
        title: "Custom Floral Designs",
        image: "../images/flowers/custom.png",
        description: "Have something unique in mind? Tell us your requirements and we can create a custom floral design for your special occasion.",
        items: [
            "Custom Bouquets",
            "Event Flowers",
            "Special Occasions",
            "Custom Requirements"
        ]
    }

};


const urlParams = new URLSearchParams(window.location.search);

const serviceName = urlParams.get("service");

const service = services[serviceName];


if (service) {

    document.getElementById("service-title").textContent = service.title;

    document.getElementById("service-image").src = service.image;

    document.getElementById("service-image").alt = service.title;

    document.getElementById("service-description").textContent = service.description;


    const list = document.getElementById("service-list");

    list.innerHTML = "";


    service.items.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });

}