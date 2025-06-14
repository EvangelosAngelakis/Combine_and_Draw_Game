const selectedOptions = {
    Animals: ["Lion", "Elephant", "Giraffe", "Dolphin", "Kangaroo", "Penguin", "Panda", "Eagle", "Shark", "Rabbit", "Wolf", "Crocodile", "Octopus", "Chimpanzee", "Flamingo", "Whale", "Cheetah", "Koala", "Turtle", "Peacock"],
    Beasts: ["Dragon", "Griffin", "Minotaur", "Cerberus", "Hydra", "Chimera", "Kraken", "Manticore", "Phoenix", "Basilisk", "Werewolf", "Vampire", "Sphinx", "Gorgon", "Cyclops", "Yeti", "Leviathan", "Ogre", "Troll", "Wendigo"],
    SuperHeroes: ["Superman", "Batman", "Wonder Woman", "Spider-Man", "Iron Man", "Capt. America", "Thor", "Hulk", "Black-Panther", "Flash", "Aquaman", "Green Lantern", "Dr Strange", "Scarlet Witch", "Wolverine", "Deadpool", "Shazam", "Cyborg", "Hawkeye", "Black Widow"],
    Treats: ["Cotton Candy", "Popcorn", "CupCakes", "Corn Dogs", "Candy Apples", "Churros", "Ice Cream", "Pretzels", "Snow Cones", "Mini Donuts", "Roasted Nuts", "Pizza", "Caramel Apples", "Corn on the cob", "Banoffee Pie", "Nachos", "Macarons", "Cannoli", "Slushies", "Choco Bananas"],
    Dinosaurs: ["T. Rex", "Triceratops", "Stegosaurus", "Velociraptor", "Brachiosaurus", "Spinosaurus", "Ankylosaurus", "Pteranodon", "Allosaurus", "Diplodocus", "Iguanodon", "Parasaurolophus", "Carnotaurus", "Gallimimus", "Compsognathus", "Mosasaurus", "Quetzalcoatlus", "Megalosaurus", "Corythosaurus"],
    Flowers: ["Rose", "Tulip", "Sunflower", "Daisy", "Lily", "Orchid", "Peony", "Lavender", "Cherry Blossom", "Marigold", "Hibiscus", "Jasmine", "Daffodil", "Lotus", "Poppy", "Violet", "Bluebell", "Iris", "Magnolia", "Bougainvillea"],
    Fruits: ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple", "Strawberry", "Watermelon", "Blueberry", "Peach", "Cherry", "Pomegranate", "Papaya", "Kiwi", "Lemon", "Lime", "Coconut", "Plum", "Fig", "Dragonfruit"],
    Vegetables: ["Carrot", "Broccoli", "Spinach", "Potato", "Tomato", "Cucumber", "Bell Pepper", "Onion", "Garlic", "Pumpkin", "Lettuce", "Courgette", "Cauliflower", "Peas", "Asparagus", "Beetroot", "Radish", "Aubergine", "Corn", "Mushroom"],
    Vehicles: ["Car", "Motorcycle", "Bicycle", "Truck", "Bus", "Train", "Airplane", "Helicopter", "Boat", "Ship", "Submarine", "Scooter", "Tractor", "Ambulance", "Fire Truck", "Police Car", "Taxi", "Camper Van", "Jet Ski", "Hot Air Balloon"],
    Weapons: ["Sword", "Bow", "Arrow", "Dagger", "Axe", "Spear", "Mace", "Crossbow", "Gun", "Cannon", "Grenade", "Katana", "Nunchucks", "Flamethrower", "Slingshot", "Boomerang", "Staff", "Shuriken", "Hammer", "Scythe"]
};

let currentIndex = 0;

document.getElementById('Generate1').addEventListener('click', function() {
    const category = document.getElementById('operation1').value;
    const Result1 = document.getElementById('Result1');
    let items;

    if (category === "All") {
        items = [].concat(...Object.values(selectedOptions));
        const randomIndex = Math.floor(Math.random() * items.length);
        Result1.innerText = items[randomIndex];
    } else {
        items = selectedOptions[category];
        if (Result1 && items && items.length > 0) {
            Result1.innerText = items[currentIndex];
            currentIndex = (currentIndex + 3) % items.length;
        } else {
            console.error('Element with id "Result1" or selected category not found.');
        }
    }
});

document.getElementById('Generate2').addEventListener('click', function() {
    const category = document.getElementById('operation2').value;
    const Result1 = document.getElementById('Result2');
    let items;

    if (category === "All") {
        items = [].concat(...Object.values(selectedOptions));
        const randomIndex = Math.floor(Math.random() * items.length);
        Result1.innerText = items[randomIndex];
    } else {
        items = selectedOptions[category];
        if (Result1 && items && items.length > 0) {
            Result1.innerText = items[currentIndex];
            currentIndex = (currentIndex + 3) % items.length;
        } else {
            console.error('Element with id "Result2" or selected category not found.');
        }
    }
});

function resetPage(){
    location.reload();
}