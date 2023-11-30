// Create an array
let events = []

// ["string", "string1", "strin2"];
// [1, 4, 2]
// [{
//     title: "title",
//     description: "description"
// }, {}, {}]

// Inside the array place 4 objects
// Each object is an event
// Each event contains a title and description

function createEventCard() {
    const eventCard = document.createElement('div');
    let title = document.createElement("h2");
    title.textContent = "Intro to Breadmaking 101";
    eventCard.appendChild(title);
    return eventCard;
}

function displayEvents() {
    console.log("DISPLAYING EVENTS");
    const eventsContainer = document.querySelector('.events-Container');
    let card = createEventCard();
    eventsContainer.append(card);
}

function printEventLocation(){
    const eventInput = document.getElementById('search-events__input');
    const locationInput = document.getElementById('search-location__input');

    if (!eventInput.value || !locationInput.value) {
        alert ("input information or else");
        return;
    }

    displayEvents();
}

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener('click', printEventLocation);