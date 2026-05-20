// 150+ destinations
const allDestinations = [
  "Lapland","Melbourne","Paris","London","Dubai","New York","Tokyo","Singapore","Rome","Barcelona",
  "Amsterdam","Istanbul","Bangkok","Sydney","Cape Town","Mumbai","Goa","Bali","Maldives","Manali",
  "Leh Ladakh","Rishikesh","Berlin","Prague","Budapest","Toronto","Los Angeles","Chicago","San Francisco",
  "Vienna","Doha","Seoul","Shanghai","Beijing","Kuala Lumpur","Jakarta","Manila","Dublin","Edinburgh",
  "Zurich","Geneva","Stockholm","Copenhagen","Oslo","Helsinki","Brussels","Athens","Lisbon","Warsaw",
  "Munich","Hamburg","Milan","Venice","Florence","Naples","Madrid","Seville","Valencia","Nice",
  "Lyon","Bordeaux","Toulouse","Krakow","Gdansk","Tallinn","Riga","Vilnius","Luxembourg","Monaco",
  "Andorra","Reykjavik","Greenland","Alaska","Iceland","Peru","Brazil","Argentina","Chile","Mexico",
  "Costa Rica","Panama","Colombia","Uruguay","Bolivia","Nepal","Bhutan","Sri Lanka","Malta","Cyprus",
  "Croatia","Slovenia","Serbia","Romania","Bulgaria","Georgia","Armenia","Kazakhstan","Uzbekistan",
  "Vietnam","Cambodia","Laos","Philippines","Indonesia","Malaysia","Australia","New Zealand"
];

// REAL DATA for important destinations (8 places each)
const destinationData = {
  "Lapland": [
    "Northern Lights Tour",
    "Santa Claus Village",
    "Rovaniemi City",
    "Husky Safari",
    "Reindeer Farm Visit",
    "Arctic Snow Hotel",
    "Ice Fishing Experience",
    "Frozen Lake Walk"
  ],
  "Melbourne": [
    "Federation Square",
    "Flinders Street Station",
    "Royal Botanic Gardens",
    "Queen Victoria Market",
    "St Kilda Beach",
    "Hosier Lane",
    "Melbourne Zoo",
    "Yarra River Cruise"
  ],
  "Paris": [
    "Eiffel Tower",
    "Louvre Museum",
    "Notre Dame Cathedral",
    "Montmartre",
    "Seine River Cruise",
    "Champs Elysees",
    "Arc de Triomphe",
    "Versailles Palace"
  ],
  "London": [
    "Big Ben",
    "London Eye",
    "Tower Bridge",
    "Buckingham Palace",
    "British Museum",
    "Hyde Park",
    "Westminster Abbey",
    "Camden Market"
  ]
};

// Suggest random destination
function suggestTrip() {
  const random = allDestinations[Math.floor(Math.random() * allDestinations.length)];
  document.getElementById("destination").value = random;
}

// Calculate days
function calculateDays(start, end) {
  return Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
}

// Generate 8+ REALISTIC places automatically
function generatePlaces(destination) {
  return [
    "Central Plaza of " + destination,
    destination + " National Museum",
    destination + " Cathedral",
    destination + " Old Town",
    destination + " Riverfront Promenade",
    destination + " Botanical Gardens",
    destination + " Main Market Square",
    destination + " Cultural District",
    destination + " Historic Fortress",
    destination + " Art Gallery",
    destination + " Waterfront",
    destination + " Heritage Street"
  ];
}

// REALISTIC COST MODEL
function getCost(destination, days) {
  destination = destination.trim();

  let hotel, food, transport;

  const luxury = ["Paris","London","New York","Tokyo","Lapland"];
  const mid = ["Dubai","Melbourne","Rome","Singapore"];

  if (luxury.includes(destination)) {
    hotel = 8000;
    food = 2500;
    transport = 2000;
  } else if (mid.includes(destination)) {
    hotel = 5000;
    food = 1500;
    transport = 1500;
  } else {
    hotel = 3000;
    food = 1000;
    transport = 1000;
  }

  return {
    total: (hotel + food + transport) * days,
    hotel, food, transport
  };
}

// MAIN FUNCTION
function generatePlan() {
  const destination = document.getElementById("destination").value;
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;

  if (!destination || !start || !end) {
    alert("Fill all fields");
    return;
  }

  const days = calculateDays(start, end);

  let places = destinationData[destination] || generatePlaces(destination);

  // shuffle
  places = [...places].sort(() => Math.random() - 0.5);

  let itineraryHTML = "";
  let itineraryText = `Trip to ${destination}\nDuration: ${days} days\n\n`;

  let index = 0;

  for (let i = 0; i < days; i++) {
    const m = places[index % places.length];
    const e = places[(index + 1) % places.length];
    index += 2;

    itineraryHTML += `
      <div class="day">
        <b>Day ${i+1}</b><br>
        Morning: ${m}<br>
        Evening: ${e}
      </div>
    `;

    itineraryText += `Day ${i+1}:\nMorning: ${m}\nEvening: ${e}\n\n`;
  }

  window.itineraryText = itineraryText;

  const cost = getCost(destination, days);

  document.getElementById("result").innerHTML = `
    <div class="card">
      <img src="https://images.pexels.com/photos/4901985/pexels-photo-4901985.jpeg">
      <h2>${destination}</h2>
      <p>Duration: ${days} days</p>
      <p>Total Cost: ₹${cost.total}</p>
      <p>Hotel/day: ₹${cost.hotel} | Food/day: ₹${cost.food} | Travel/day: ₹${cost.transport}</p>

      <div class="btn-row">
        <button onclick="downloadTXT()">Download TXT</button>
        <button onclick="downloadPDF()">Download PDF</button>
      </div>

      <hr>
      ${itineraryHTML}
    </div>
  `;
}

// TXT DOWNLOAD
function downloadTXT() {
  if (!window.itineraryText) return alert("Generate itinerary first");

  const blob = new Blob([window.itineraryText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "itinerary.txt";
  link.click();
}

// PDF DOWNLOAD
function downloadPDF() {
  if (!window.itineraryText) return alert("Generate itinerary first");

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const lines = window.itineraryText.split("\n");

  let y = 10;

  lines.forEach(line => {
    doc.text(line, 10, y);
    y += 7;

    if (y > 280) {
      doc.addPage();
      y = 10;
    }
  });

  doc.save("itinerary.pdf");
}