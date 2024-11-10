let messageBox = document.getElementById("message");
let mainImage = document.getElementById("main-image");

function increaseUsage() {
    messageBox.textContent = "You have increased water usage. The lake you use has shrunk due to overuse by you and other farmers around you.";
}

function decreaseUsage() {
    messageBox.textContent = "You have reduced water usage. You have not been able to access a sufficient water source for your crop. Also, unfortunately, the lake shrunk because all the farmers could not organize.";
}

function increasePollution() {
    messageBox.textContent = "You have increased water pollution. As a result of you and other farmers polluting the lake, the biodiversity in the lake has decreased.";
}

function decreasePollution() {
    messageBox.textContent = "You have reduced water pollution. Unfortunately, the step you took for biodiversity was not enough. The lake is still being polluted and the creatures are in danger.";
}

function finishSimulation() {
    alert("You have finished the activity! As you can see, in both cases you could not keep the water level of the lake or the water pollution stable. This is because you cannot organize with the surrounding farmers and you do not have enough information about other lakes. Our device is a solution to overcome this.")
}
