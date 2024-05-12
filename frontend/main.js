let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let events = [];
const eventForm = document.getElementById("eventForm")
const updateForm = document.getElementById("formUpdateEvent")
const deleteForm = document.getElementById("formDeleteEvent")

const eventShow = document.getElementById('eventShow')

const buttonAddEvent = document.getElementById('buttonAddEvent');
const buttonUpdateEvent = document.getElementById('buttonUpdateEvent');
const buttonDeleteEvent = document.getElementById('buttonDeleteEvent');
const formAddEvent = document.getElementById('formAddEvent');
const formUpdateEvent = document.getElementById('formUpdateEvent');
const formDeleteEvent = document.getElementById('formDeleteEvent');

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
console.log("Event added. Updating calendar...");
showCalendar(currentMonth, currentYear);

buttonAddEvent.addEventListener('click', function () {
    formAddEvent.style.display = 'block'
    formUpdateEvent.style.display = 'none'
    formDeleteEvent.style.display = 'none'
})
buttonUpdateEvent.addEventListener('click', function () {
    formAddEvent.style.display = 'none'
    formUpdateEvent.style.display = 'block'
    formDeleteEvent.style.display = 'none'
})
buttonDeleteEvent.addEventListener('click', function () {
    formAddEvent.style.display = 'none'
    formUpdateEvent.style.display = 'none'
    formDeleteEvent.style.display = 'block'
})

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

async function fetchEventData() {
    const response = await fetch('http://localhost:5001/events');
    if (!response.ok) {
        throw new Error('Failed to fetch event data');
    }
    return response.json();
}

async function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";
    monthAndYear.innerHTML = `
        <div style="display: flex; justify-content: center;">
            ${months[month] + " " + year}
        </div>
    `;
    selectYear.value = year;
    selectMonth.value = month;
    let date = 1;

    const eventData = await fetchEventData();
    const events = eventData.events;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                let event = events.find(e => {
                    const eventDate = new Date(e.date);
                    return eventDate.getDate() === date && eventDate.getMonth() === month && eventDate.getFullYear() === year;
                });
                cell.addEventListener('mouseover', function () {
                    this.classList.add('bg-success');
                    this.style.cursor = 'pointer';
                    if (event) {
                        let eventHTML = `<div style="margin-top: 20px;">`;
                        eventHTML += `<b>Tanggal: ${event.date}</b>`;
                        eventHTML += `<br />`;
                        eventHTML += `<b>Acara: </b>`;
                        eventHTML += `<ul>`;
                        eventHTML += `<li>${event.desc}</li>`;
                        eventHTML += `</ul></div>`;
                        eventShow.innerHTML = eventHTML;
                    }
                });
                cell.addEventListener('mouseout', function () {
                    this.classList.remove('bg-success');
                    eventShow.innerHTML =
                        `<div style="margin-top: 20px;">
                            <ul>
                            <li>Belum ada Acara</li>
                            </ul>     
                        </div>`
                });
                if (event) {
                    cell.classList.add("event");
                    cell.title = event.desc;
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}

eventForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("Form submitted!");
    let eventDate = document.getElementById("eventDate").value;
    let eventName = document.getElementById("eventName").value;
    console.log("Event date:", eventDate);
    console.log("Event name:", eventName);

    let eventData = {
        date: eventDate,
        desc: eventName
    };

    try {
        const response = await fetch('http://localhost:5001/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        alert('Event data sent successfully');
        window.location.reload();
        eventForm.reset()
    } catch (error) {
        alert('There was a problem with the fetch operation:', error.message);
    }
});

updateForm.addEventListener('submit', async function (events) {
    events.preventDefault();
    let _id = document.getElementById("_id").value;
    let eventDate = document.getElementById("eventDateUpdate").value;
    let eventName = document.getElementById("eventNameUpdate").value;
    console.log("Event Update date:", eventDate);
    console.log("Event Update name:", eventName);

    let eventData = {
        _id: _id,
        date: eventDate,
        desc: eventName
    };

    try {
        const response = await fetch(`http://localhost:5001/events/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        alert('Event data update successfully');
        window.location.reload();
        updateForm.reset()
    } catch (error) {
        console.log('There was a problem with the fetch operation:', error.message);
    }
})

deleteForm.addEventListener('submit', async function (events) {
    events.preventDefault();
    let _id = document.getElementById("_idDelete").value;

    let eventData = {
        _id: _id,
    };

    try {
        const response = await fetch(`http://localhost:5001/events/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        alert('Event data delete successfully');
        window.location.reload();
        updateForm.reset()
    } catch (error) {
        console.log('There was a problem with the fetch operation:', error.message);
    }
})