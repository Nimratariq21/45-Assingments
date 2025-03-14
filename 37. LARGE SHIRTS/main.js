"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
function makeShirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with a message "${message}" printed on it.`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Dive into Coding");
