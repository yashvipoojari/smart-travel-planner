# ✈️ Smart Travel Planner

A beautiful, mood-based travel planning web app that generates personalized itineraries and lets you download them as TXT or PDF.

## 🌍 Live Demo

👉 [Click here to use the app](https://touristgram.netlify.app/)

---

## 📁 Repository Structure
smart-travel-planner/

├── index.html      # Main HTML file — UI layout, inputs, buttons

├── script.js       # Core logic — trip generation, PDF/TXT download

├── travel_data.xlsx    # Self-made database of 150+ cities & destinations

└── README.md       # You are here!

---
## 🗂️ About the Database (`travel_data.xlsx`)

This is a **self-built travel database** created from scratch, covering 
**150+ cities across India and the world.**

### 📊 What's inside:

| Column | Description |
|--------|-------------|
| City | Destination city name |
| Place 1–8 | Top 8 attractions per city |
| Cost per Day (INR) | Estimated daily budget in Indian Rupees |

### 🌏 Cities covered:

**India (40+ cities)**
> Delhi, Mumbai, Jaipur, Agra, Udaipur, Varanasi, Amritsar, Bengaluru, 
> Hyderabad, Kochi, Goa, Jodhpur, Rishikesh, Shimla, Darjeeling, Manali, 
> Leh Ladakh, Mysore, Pondicherry, Hampi, Madurai, Ooty, Munnar, Kashmir, 
> Shillong, Guwahati, Ahmedabad, Indore, Pune, Chandigarh, Tawang, Gangtok, 
> Jaisalmer, Pushkar, Khajuraho, Aurangabad, Alleppey, Kodaikanal, 
> Chikmagalur, Coorg

**Asia (30+ cities)**
> Bangkok, Tokyo, Singapore, Seoul, Hong Kong, Kuala Lumpur, Hanoi, 
> Shanghai, Taipei, Ho Chi Minh, Kyoto, Osaka, Bali, Phuket, Siem Reap, 
> Kathmandu, Luang Prabang, Baku, Almaty, Tashkent, Phnom Penh, Colombo, 
> Manila, Jakarta, Beijing, Chiang Mai, Da Nang, George Town, Phu Quoc, 
> Doha, Abu Dhabi, Langkawi, Surabaya, Vientiane, Ulaanbaatar, Dubai, 
> Muscat, Cairo, Luxor

**Europe (40+ cities)**
> Paris, London, Rome, Barcelona, Amsterdam, Prague, Vienna, Berlin, 
> Lisbon, Florence, Madrid, Budapest, Venice, Athens, Istanbul, Munich, 
> Zurich, Edinburgh, Dublin, Copenhagen, Stockholm, Oslo, Helsinki, 
> Brussels, Warsaw, Krakow, Santorini, Nice, Seville, Milan, Geneva, 
> Lyon, Hamburg, Salzburg, Antwerp, Strasbourg, Tallinn, Kyiv

**Americas (20+ cities)**
> New York, Los Angeles, Chicago, San Francisco, Miami, Toronto, Vancouver,
> Mexico City, Cancún, Rio de Janeiro, Buenos Aires, Cusco, Lima, Bogotá,
> Santiago, Las Vegas, Washington DC, Montreal, Quebec City, Cartagena,
> Medellín, Quito, Galápagos, Orlando, Boston, Seattle

**Africa (10+ cities)**
> Cape Town, Casablanca, Nairobi, Johannesburg, Durban, Marrakech

### 💰 Daily Cost Range (INR):

| Budget | Cities |
|--------|--------|
| 🟢 Budget (< ₹6,000) | Hampi, Pushkar, Varanasi, Kathmandu, Luang Prabang |
| 🟡 Mid-range (₹6,000–₹15,000) | Most Indian cities, SE Asia |
| 🟠 Premium (₹15,000–₹30,000) | Europe, Japan, Australia |
| 🔴 Luxury (> ₹30,000) | New York, Dubai, Zurich, Galápagos |

---

## ✨ Features

- 🎭 **Mood-based planning** — Choose Relax, Adventure, or City
- 📍 **Custom destination** — Enter any place you want to visit
- 📅 **Date picker** — Set your start and end dates
- 🗺️ **Auto itinerary generator** — Day-by-day travel plan
- 💡 **Destination suggester** — Not sure where to go? Let the app decide!
- 📄 **Download as TXT** — Save your plan as a text file
- 📕 **Download as PDF** — Save your plan as a formatted PDF
- 🌄 **Beautiful UI** — Glassmorphism design with travel background

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure and layout |
| CSS3 | Glassmorphism styling, animations |
| JavaScript | Trip logic, itinerary generation |
| jsPDF (CDN) | PDF download functionality |

---

## 🚀 How to Run Locally

### Option 1 — Just open the file
```bash
# No installation needed!
# Simply double click index.html in your file explorer
```

### Option 2 — Using VS Code Live Server
1. Open the project folder in **VS Code**
2. Right click `index.html`
3. Click **"Open with Live Server"**
4. App opens at `http://localhost:5500`

---

## 🗺️ How to Use the App

1. **Select your mood** from the dropdown
   - 🏖️ Relax — beaches, spas, calm destinations
   - 🧗 Adventure — hiking, trekking, outdoor activities
   - 🏙️ City — urban exploration, food, culture

2. **Enter your destination** (e.g. Paris, Goa, Tokyo)

3. **Pick your travel dates** using the date pickers

4. Click **"Suggest Destination"** if you need inspiration

5. Click **"Generate Itinerary"** to get your day-by-day plan

6. **Download** your plan as TXT or PDF

---
## 🔮 Future Improvements

- [ ] Google Maps integration
- [ ] Weather forecast for travel dates
- [ ] Hotel and flight suggestions
- [ ] Save trips to account
- [ ] Share itinerary via link

---

## 👩‍💻 Built By

**Yashvi Poojari**
[GitHub](https://github.com/yashvipoojari) 

