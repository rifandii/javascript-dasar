const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship.maxSpeed = 1700;
spaceship["class"] = "Light ffreighter";
delete spaceship.manufacturer;


console.log(spaceship);