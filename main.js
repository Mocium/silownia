document.addEventListener('DOMContentLoaded', function () {
    
    if (!localStorage.getItem('isRegistered')) {
        
        document.getElementById('registration-modal').style.display = 'block';
        
        document.body.style.overflow = 'hidden';
        
        document.getElementById('logout-btn').style.display = 'none';
    } else {
       
        document.body.style.overflow = 'auto';
        
        document.getElementById('logout-btn').style.display = 'block';
    }

    
    document.getElementById('registration-form').addEventListener('submit', function (e) {
        e.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        

       
        localStorage.setItem('isRegistered', true);
        localStorage.setItem('username', username);

        
        document.getElementById('registration-modal').style.display = 'none';
        
        document.body.style.overflow = 'auto';
        
        document.getElementById('logout-btn').style.display = 'block';
    });
});


function logout() {
    
    localStorage.removeItem('isRegistered');
    localStorage.removeItem('username');

    document.getElementById('registration-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementById('logout-btn').style.display = 'none';
}

function showMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
}
function showMap() {
    var mapContainer = document.getElementById("map-container");
    if (mapContainer.style.display === "none" || mapContainer.style.display === "") {
        mapContainer.style.display = "block";
        setTimeout(() => {
            mapContainer.style.opacity = "1";
        }, 10);
    } else {
        mapContainer.style.opacity = "0";
        setTimeout(() => {
            mapContainer.style.display = "none";
        }, 500);
    }
}

function pokazSzczegoly(id) {
    var szczegoly = document.getElementById("szczegoly");

    document.querySelector(".trenerzy").style.display = "none";

    var trenerzy = {
        "trener1": {
            "name": "💪 Trener Jan Kowalski",
            "desc": "Specjalizuje się w budowie masy mięśniowej i redukcji tkanki tłuszczowej. Posiada 10 lat doświadczenia.",
            "hours": "Pon-Pt: 08:00 - 16:00, Sob: 10:00 - 14:00",
            "contact": "jan.kowalski@silownia.pl, tel. 123 456 789",
            "offers": [
                "✅ Indywidualny plan treningowy",
                "✅ Sesje online",
                "✅ Konsultacja dietetyczna"
            ],
            "photo": "jan_kowalski.jpg"
        },
        "trener2": {
            "name": "🔥 Trenerka Anna Nowak",
            "desc": "Trenerka personalna i dietetyczka. Specjalizuje się w treningach kobiet, poprawie mobilności i redukcji wagi.",
            "hours": "Pon-Nd: 10:00 - 20:00",
            "contact": "anna.nowak@silownia.pl, tel. 987 654 321",
            "offers": [
                "✅ Treningi funkcjonalne",
                "✅ Opieka dietetyczna",
                "✅ Treningi grupowe"
            ],
            "photo": "anna_nowak.jpg"
        }
    };

    if (trenerzy[id]) {
        szczegoly.innerHTML = `
            <div class="szczegoly-container">
                <div class="szczegoly-text">
                    <h2>${trenerzy[id].name}</h2>
                    <p><strong>O to ja! 👇</strong></p>
                    <p><strong>O trenerze:</strong> ${trenerzy[id].desc}</p>
                    <p><strong>Godziny przyjęć:</strong> ${trenerzy[id].hours}</p>
                    <p><strong>Kontakt:</strong> ${trenerzy[id].contact}</p>
                    <p><strong>Oferty treningowe:</strong></p>
                    <ul>${trenerzy[id].offers.map(oferta => `<li>${oferta}</li>`).join('')}</ul>
                    <button onclick="powrotDoTrenerow()">🔙 Wróć</button>
                </div>
                <div class="szczegoly-img">
                    <img src="${trenerzy[id].photo}" alt="Zdjęcie ${trenerzy[id].name}">
                </div>
            </div>
        `;
        szczegoly.style.display = "block";
    }
}

function powrotDoTrenerow() {
    document.querySelector(".trenerzy").style.display = "flex";
    document.getElementById("szczegoly").style.display = "none";
}

function addToCart(productName) {
    alert(`${productName} do odbioru na recepji klubu platnosc karta lub gotówka!`);
    // Możesz rozbudować ten kod, aby przechowywać dane w lokalnym magazynie (localStorage) lub w inny sposób.
}
