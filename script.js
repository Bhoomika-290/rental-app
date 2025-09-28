// Global Variables
let currentLanguage = 'en';
let currentUser = null;
let currentEquipment = null;
let equipmentData = [];
let filteredEquipment = [];

// Equipment Data with Real Image Paths
const equipmentDatabase = [
    {
        id: 1,
        name: "John Deere 5310 Tractor",
        nameHi: "जॉन डीयर 5310 ट्रैक्टर",
        nameMr: "जॉन डिअर 5310 ट्रॅक्टर",
        category: "tractor",
        price: 1500,
        location: "Pune, Maharashtra",
        locationHi: "पुणे, महाराष्ट्र",
        locationMr: "पुणे, महाराष्ट्र",
        description: "50 HP tractor perfect for farming operations",
        descriptionHi: "खेती के संचालन के लिए उत्तम 50 एचपी ट्रैक्टर",
        descriptionMr: "शेती कामांसाठी परिपूर्ण 50 एचपी ट्रॅक्टर",
        available: true,
        year: 2020,
        owner: "Rahul Sharma",
        ownerPhone: "+91 98765 11111",
        specifications: "50 HP, 4WD, Power Steering",
        images: [
            "https://www.deere.co.in/assets/images/region-1/products/tractors/e-series-tractors/john-deere-india-trem-4-5310-left-angle.png", // Green tractor main view
            "https://www.91tractors.com/_next/image?url=https:%2F%2Fimages.91trucks.com%2Ftractors%2Fmodels%2F31%2F480%2Fjohn-deere-5310-gearpro-983528694.jpg%3Fw%3D640%26v%3D1235&w=640&q=75", // Tractor side view
            "https://www.deere.co.in/assets/images/region-1/products/tractors/e-series-tractors/john-deere-india-trem%204-5310-front.png", // Tractor front view
            "https://www.deere.co.in/assets/images/region-1/products/tractors/trem-four-india-products/trem-4-5310-right-angle.png" 
        ]
    },
    {
        id: 2,
        name: "Mahindra Harvester",
        nameHi: "महिंद्रा हार्वेस्टर",
        nameMr: "महिंद्रा हार्वेस्टर",
        category: "harvester",
        price: 2000,
        location: "Nashik, Maharashtra",
        locationHi: "नासिक, महाराष्ट्र",
        locationMr: "नाशिक, महाराष्ट्र",
        description: "Efficient combine harvester for wheat and rice",
        descriptionHi: "गेहूं और चावल के लिए कुशल कंबाइन हार्वेस्टर",
        descriptionMr: "गहू आणि भातासाठी कार्यक्षम कंबाइन हार्वेस्टर",
        available: false,
        year: 2019,
        owner: "Suresh Patel",
        ownerPhone: "+91 98765 22222",
        specifications: "Self-propelled, 120 HP engine, 4m cutting width",
        images: [
            "https://www.mahindratractor.com/sites/default/files/2023-08/Harvester_799x618.webp",
            "https://assets.tractorjunction.com/tractor-junction/assets/images/images/implementTractor/harvestmaster-h12-4wd-1649325881.jpg",
            "https://2.imimg.com/data2/MK/JX/IMFCP-3650544/ks-513-td-tractor-driven-combine-harvester-with-mahindra-arjun-1000x1000.jpg"
        ]
    },
    {
        id: 3,
        name: "Cultivator Set",
        nameHi: "कल्टीवेटर सेट",
        nameMr: "कल्टिव्हेटर सेट",
        category: "cultivator",
        price: 400,
        location: "Aurangabad, Maharashtra",
        locationHi: "औरंगाबाद, महाराष्ट्र",
        locationMr: "औरंगाबाद, महाराष्ट्र",
        description: "Complete cultivator set for soil preparation",
        descriptionHi: "मिट्टी की तैयारी के लिए पूरा कल्टीवेटर सेट",
        descriptionMr: "मातीच्या तयारीसाठी संपूर्ण कल्टिव्हेटर सेट",
        available: true,
        year: 2021,
        owner: "Amit Singh",
        ownerPhone: "+91 98765 33333",
        specifications: "9-tine cultivator, adjustable depth control",
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2023/10/351985611/VF/RT/MC/4114636/agriculture-tractor-cultivator-1000x1000.png",
            "https://5.imimg.com/data5/SELLER/Default/2022/10/CP/PY/KD/532026/01-1000x1000.jpg",
            "https://5.imimg.com/data5/AN/NK/ZN/SELLER-288604/mini-cultivator-box-type-frame-500x500.png"
        ]
    },
    {
        id: 4,
        name: "Seeder Machine",
        nameHi: "सीडर मशीन",
        nameMr: "सीडर मशीन",
        category: "seeder",
        price: 300,
        location: "Kolhapur, Maharashtra",
        locationHi: "कोल्हापुर, महाराष्ट्र",
        locationMr: "कोल्हापूर, महाराष्ट्र",
        description: "Precision seeder for accurate seed placement",
        descriptionHi: "सटीक बीज रखने के लिए सटीक सीडर",
        descriptionMr: "अचूक बीज लावणीसाठी अचूक सीडर",
        available: true,
        year: 2022,
        owner: "Priya Deshmukh",
        ownerPhone: "+91 98765 44444",
        specifications: "6-row seeder, adjustable seed rate",
        images: [
            "https://5.imimg.com/data5/CF/TC/YW/SELLER-3219172/dsr-direct-seeded-rice-rice-seeder-1000x1000.jpg",
            "https://5.imimg.com/data5/IX/TX/UQ/SELLER-3219172/dsr-direct-seeded-rice-rice-seeder-500x500.jpg",
            "https://5.imimg.com/data5/YR/HW/YA/SELLER-3219172/dsr-direct-seeded-rice-rice-seeder-1000x1000.jpg"
        ]
    },
    {
        id: 5,
        name: "Plough Set",
        nameHi: "हल सेट",
        nameMr: "नांगर सेट",
        category: "plough",
        price: 250,
        location: "Solapur, Maharashtra",
        locationHi: "सोलापुर, महाराष्ट्र",
        locationMr: "सोलापूर, महाराष्ट्र",
        description: "Traditional plough set for field preparation",
        descriptionHi: "खेत की तैयारी के लिए पारंपरिक हल सेट",
        descriptionMr: "शेत तयारीसाठी पारंपारिक नांगर सेट",
        available: true,
        year: 2021,
        owner: "Ganesh Kale",
        ownerPhone: "+91 98765 55555",
        specifications: "3-bottom reversible plough, adjustable width",
        images: [
            "https://static.vecteezy.com/system/resources/previews/036/396/295/non_2x/semi-mounted-farm-plough-3d-rendering-on-white-background-photo.jpg",
            "https://static.vecteezy.com/system/resources/thumbnails/036/399/592/small_2x/semi-mounted-farm-plough-3d-rendering-on-white-background-photo.jpg",
            "https://www.shutterstock.com/image-illustration/semi-mounted-plough-farm-equipment-260nw-2219358647.jpg"
        ]
    },
    {
        id: 6,
        name: "Rotavator Machine",
        nameHi: "रोटावेटर मशीन",
        nameMr: "रोटावेटर मशीन",
        category: "cultivator",
        price: 800,
        location: "Satara, Maharashtra",
        locationHi: "सतारा, महाराष्ट्र",
        locationMr: "सातारा, महाराष्ट्र",
        description: "Heavy-duty rotavator for soil tilling",
        descriptionHi: "मिट्टी की जुताई के लिए हेवी-ड्यूटी रोटावेटर",
        descriptionMr: "मातीच्या कसणीसाठी हेवी-ड्यूटी रोटावेटर",
        available: true,
        year: 2020,
        owner: "Vikram Patil",
        ownerPhone: "+91 98765 66666",
        specifications: "6-foot working width, PTO driven",
        images: [
            "https://assets.tractorjunction.com/tractor-junction/assets/images/images/implementTractor/supreme-33-1697546608.webp",
            "https://international.sonalika.com/wp-content/uploads/2020/09/smart-series-img.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2022/1/QY/FJ/UH/127791644/tractor-operated-rotavator-1000x1000.jpg"
        ]
    },
    {
        id: 7,
        name: "Threshing Machine",
        nameHi: "थ्रेसिंग मशीन",
        nameMr: "मळणी यंत्र",
        category: "thresher",
        price: 600,
        location: "Latur, Maharashtra",
        locationHi: "लातूर, महाराष्ट्र",
        locationMr: "लातूर, महाराष्ट्र",
        description: "Multi-crop threshing machine for grain separation",
        descriptionHi: "अनाज अलग करने के लिए बहु-फसल थ्रेसिंग मशीन",
        descriptionMr: "धान्य विभाजनासाठी बहु-पीक मळणी यंत्र",
        available: true,
        year: 2021,
        owner: "Deepak Jadhav",
        ownerPhone: "+91 98765 77777",
        specifications: "Multi-crop thresher, 15 HP motor, 1200 kg/hr capacity",
        images: [
            "https://th.bing.com/th/id/R.986eabe1b261ac3b50c811dee730a3a8?rik=lLixdD3cSnNoKQ&riu=http%3a%2f%2fwww.stubert.info%2fthresh-p%2fthreshing-14-03.jpg&ehk=knjjlnxfZdmQPQaK%2bId%2bQmusqq6UUcgOxfjGf2mpKEQ%3d&risl=&pid=ImgRaw&r=0",
            "https://tse3.mm.bing.net/th/id/OIP.QffgF0iQjF0h4a-xwa21SwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://i.etsystatic.com/14004058/r/il/bbf6af/4312748845/il_340x270.4312748845_fhnt.jpg"
        ]
    },
    {
        id: 8,
        name: "Sprayer System",
        nameHi: "स्प्रेयर सिस्टम",
        nameMr: "फवारणी यंत्र",
        category: "sprayer",
        price: 350,
        location: "Nanded, Maharashtra",
        locationHi: "नांदेड़, महाराष्ट्र",
        locationMr: "नांदेड, महाराष्ट्र",
        description: "Power sprayer for pesticide and fertilizer application",
        descriptionHi: "कीटनाशक और उर्वरक प्रयोग के लिए पावर स्प्रेयर",
        descriptionMr: "कीटकनाशक आणि खत वापरण्यासाठी पॉवर स्प्रेयर",
        available: true,
        year: 2022,
        owner: "Sanjay Bhosale",
        ownerPhone: "+91 98765 88888",
        specifications: "500L tank capacity, 40L/min flow rate, boom width 12m",
        images: [
            "https://tse3.mm.bing.net/th/id/OIP.gTLEkT81DgGuOKmV0eT4lAHaE8?w=768&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://tse2.mm.bing.net/th/id/OIP.gjrr3ZXwbQNRa-odaJgTcgAAAA?w=450&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://tse1.mm.bing.net/th/id/OIP.zVSmWnqNkrvZfkL2X4DrOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        ]
    },
    {
        id: 9,
        name: "Disc Harrow",
        nameHi: "डिस्क हैरो",
        nameMr: "डिस्क हेरो",
        category: "cultivator",
        price: 450,
        location: "Jalgaon, Maharashtra",
        locationHi: "जलगांव, महाराष्ट्र",
        locationMr: "जळगाव, महाराष्ट्र",
        description: "Heavy-duty disc harrow for breaking up soil",
        descriptionHi: "मिट्टी को तोड़ने के लिए हेवी-ड्यूटी डिस्क हैरो",
        descriptionMr: "माती फोडण्यासाठी हेवी-ड्यूटी डिस्क हेरो",
        available: false,
        year: 2020,
        owner: "Rajesh Kulkarni",
        ownerPhone: "+91 98765 99999",
        specifications: "20-disc harrow, 7-foot working width, hydraulic lift",
        images: [
            "https://content.storefront7.co.za/stores/za.co.storefront7.rovic/products/heavy-duty-offset-disc-harrows/pictures/no.1-rome-vvu5.jpg?mode=Default&format=jpg&width=1026&height=1026",
            "https://tse1.mm.bing.net/th/id/OIP.k3GkKO_j-wyV_uiK_NshEAHaEz?pid=Api&P=0&h=220",
            "https://content.storefront7.co.za/stores/za.co.storefront7.rovic/products/heavy-duty-offset-disc-harrows/pictures/h.d.-offset-poly-disc-harrows-ry7r_od2u.jpg?width=1026&height=1026"
        ]
    },
    {
        id: 10,
        name: "Water Pump Set",
        nameHi: "वॉटर पंप सेट",
        nameMr: "पाणी पंप सेट",
        category: "irrigation",
        price: 200,
        location: "Ahmednagar, Maharashtra",
        locationHi: "अहमदनगर, महाराष्ट्र",
        locationMr: "अहमदनगर, महाराष्ट्र",
        description: "High-capacity water pump for irrigation",
        descriptionHi: "सिंचाई के लिए उच्च क्षमता वाला वॉटर पंप",
        descriptionMr: "सिंचनासाठी उच्च क्षमतेचा पाणी पंप",
        available: true,
        year: 2021,
        owner: "Meera Pawar",
        ownerPhone: "+91 98765 10101",
        specifications: "5 HP motor, 1000 GPH capacity, self-priming",
        images: [
            "https://thumbs.dreamstime.com/b/irrigation-rice-fields-using-pump-wells-technique-pumping-water-ground-to-flow-rice-fields-239245040.jpg",
            "https://img.myloview.com/murals/irrigation-of-rice-fields-using-pump-wells-with-the-technique-of-pumping-water-from-the-ground-to-flow-into-the-rice-fields-the-pumping-station-where-water-is-pumped-from-a-irrigation-canal-700-284915476.jpg",
            "https://novo3ds.in/wp-content/uploads/2022/11/AG281_Water_pump_3.jpg"
        ]
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    equipmentData = [...equipmentDatabase];
    filteredEquipment = [...equipmentData];
    initializeApp();
    optimizeImages();
});

function initializeApp() {
    updateEquipmentGrid();
    updateLanguage();
    setupEventListeners();
    setupDateInputs();
}

function setupEventListeners() {
    // Modal close events
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Date change events for booking calculation
    const fromDateInput = document.getElementById('bookingFromDate');
    const toDateInput = document.getElementById('bookingToDate');
    
    if (fromDateInput && toDateInput) {
        fromDateInput.addEventListener('change', calculateBookingTotal);
        toDateInput.addEventListener('change', calculateBookingTotal);
    }
}

function setupDateInputs() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    
    dateInputs.forEach(input => {
        input.min = today;
    });
}

// Language Management
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    updateLanguage();
    updateEquipmentGrid(); // Refresh equipment grid with new language
}

function updateLanguage() {
    // Update text content
    const elements = document.querySelectorAll('[data-' + currentLanguage + ']');
    elements.forEach(element => {
        const text = element.getAttribute('data-' + currentLanguage);
        if (text) {
            element.textContent = text;
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-' + currentLanguage + '-placeholder]');
    placeholderElements.forEach(element => {
        const placeholder = element.getAttribute('data-' + currentLanguage + '-placeholder');
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });

    // Update select options
    const selectOptions = document.querySelectorAll('option[data-' + currentLanguage + ']');
    selectOptions.forEach(option => {
        const text = option.getAttribute('data-' + currentLanguage);
        if (text) {
            option.textContent = text;
        }
    });
}

// Enhanced Equipment Management with Real Images
function updateEquipmentGrid() {
    const homeGrid = document.getElementById('equipmentGrid');
    const allGrid = document.getElementById('allEquipmentGrid');
    
    if (homeGrid) {
        homeGrid.innerHTML = createEquipmentCards(filteredEquipment.slice(0, 3));
    }
    if (allGrid) {
        allGrid.innerHTML = createEquipmentCards(filteredEquipment);
    }
    
    // Initialize lazy loading after content is added
    setTimeout(optimizeImages, 100);
}

function createEquipmentCards(equipment) {
    if (!equipment || equipment.length === 0) {
        return `<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
            <p>${getTranslation('No equipment found', 'कोई उपकरण नहीं मिला', 'कोणतीही उपकरणे सापडली नाहीत')}</p>
        </div>`;
    }

    return equipment.map(item => `
        <div class="equipment-card">
            <div class="equipment-slider" id="slider-${item.id}">
                ${item.images.map((imgSrc, index) => `
                    <div class="slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                        <img src="${imgSrc}" 
                             alt="${getItemName(item)} - View ${index + 1}" 
                             onerror="this.src='images/placeholders/equipment-placeholder.jpg'; this.classList.add('fallback-image')"
                             loading="lazy" />
                        <div class="slide-indicator">${index + 1}/${item.images.length}</div>
                    </div>
                `).join('')}
                ${item.images.length > 1 ? `
                    <button class="slider-nav slider-prev" onclick="changeSlide(${item.id}, -1)" aria-label="Previous image">‹</button>
                    <button class="slider-nav slider-next" onclick="changeSlide(${item.id}, 1)" aria-label="Next image">›</button>
                    <div class="slider-dots">
                        ${item.images.map((_, index) => `
                            <button class="dot ${index === 0 ? 'active' : ''}" 
                                    onclick="goToSlide(${item.id}, ${index})" 
                                    aria-label="Go to image ${index + 1}"></button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="equipment-info">
                <h3>${getItemName(item)}</h3>
                <div class="equipment-price">₹${item.price.toLocaleString()}/day</div>
                <div class="equipment-location">📍 ${getItemLocation(item)}</div>
                <div class="availability-status ${item.available ? 'available' : 'rented'}">
                    ${item.available ? 
                        getTranslation('Available', 'उपलब्ध', 'उपलब्ध') : 
                        getTranslation('Rented', 'किराए पर', 'भाड्याने')
                    }
                </div>
                <p>${getItemDescription(item)}</p>
                <div class="equipment-details">
                    <div class="detail-item">
                        <strong>${getTranslation('Year', 'वर्ष', 'वर्ष')}:</strong> ${item.year}
                    </div>
                    <div class="detail-item">
                        <strong>${getTranslation('Owner', 'मालिक', 'मालक')}:</strong> ${item.owner}
                    </div>
                    <div class="detail-item">
                        <strong>${getTranslation('Specifications', 'विशेषताएं', 'वैशिष्ट्ये')}:</strong> ${item.specifications}
                    </div>
                </div>
                <button class="btn btn-primary equipment-book-btn" 
                        onclick="bookEquipment(${item.id})" 
                        ${!item.available ? 'disabled' : ''}>
                    ${getTranslation('Book Now', 'बुक करें', 'बुक करा')}
                </button>
            </div>
        </div>
    `).join('');
}

function getItemName(item) {
    return currentLanguage === 'hi' ? item.nameHi : 
           currentLanguage === 'mr' ? item.nameMr : 
           item.name;
}

function getItemLocation(item) {
    return currentLanguage === 'hi' ? item.locationHi : 
           currentLanguage === 'mr' ? item.locationMr : 
           item.location;
}

function getItemDescription(item) {
    return currentLanguage === 'hi' ? item.descriptionHi : 
           currentLanguage === 'mr' ? item.descriptionMr : 
           item.description;
}

function getTranslation(en, hi, mr) {
    return currentLanguage === 'hi' ? hi : 
           currentLanguage === 'mr' ? mr : 
           en;
}

// Enhanced Image Slider with Dot Navigation
function changeSlide(equipmentId, direction) {
    const slider = document.getElementById(`slider-${equipmentId}`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    if (slides.length <= 1) return;

    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    
    slides[currentIndex].classList.remove('active');
    if (dots.length > 0) dots[currentIndex].classList.remove('active');
    
    currentIndex += direction;
    
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    
    slides[currentIndex].classList.add('active');
    if (dots.length > 0) dots[currentIndex].classList.add('active');
}

// Direct slide navigation via dots
function goToSlide(equipmentId, slideIndex) {
    const slider = document.getElementById(`slider-${equipmentId}`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
        if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    }
}

// Image optimization and lazy loading
function optimizeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
}

// Page Navigation
function showPage(page) {
    const pages = document.querySelectorAll('.page, .dashboard');
    pages.forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active');
    });
    
    const pageElement = document.getElementById(page + 'Page');
    if (pageElement) {
        pageElement.classList.remove('hidden');
    }
}

// Modal Management
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Authentication
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const userType = document.getElementById('loginUserType').value;
    
    if (!email || !password) {
        alert(getTranslation('Please fill all fields', 'कृपया सभी फील्ड भरें', 'कृपया सर्व फील्ड भरा'));
        return;
    }
    
    currentUser = {
        email: email,
        type: userType,
        name: email.split('@')[0]
    };
    
    closeModal('loginModal');
    updateAuthUI();
    showDashboard(userType);
    
    showNotification(getTranslation('Login successful!', 'लॉगिन सफल!', 'लॉगिन यशस्वी!'), 'success');
}

function register(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const location = document.getElementById('registerLocation').value;
    const password = document.getElementById('registerPassword').value;
    const userType = document.getElementById('registerUserType').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (!name || !email || !phone || !location || !password) {
        alert(getTranslation('Please fill all fields', 'कृपया सभी फील्ड भरें', 'कृपया सर्व फील्ड भरा'));
        return;
    }
    
    if (!agreeTerms) {
        alert(getTranslation('Please agree to terms and conditions', 'कृपया नियम और शर्तों से सहमत हों', 'कृपया अटी व शर्तींशी सहमत व्हा'));
        return;
    }
    
    currentUser = {
        name: name,
        email: email,
        phone: phone,
        location: location,
        type: userType
    };
    
    closeModal('registerModal');
    updateAuthUI();
    showDashboard(userType);
    
    showNotification(getTranslation('Registration successful!', 'पंजीकरण सफल!', 'नोंदणी यशस्वी!'), 'success');
}

function logout() {
    currentUser = null;
    updateAuthUI();
    showPage('home');
    showNotification(getTranslation('Logged out successfully', 'सफलतापूर्वक लॉग आउट', 'यशस्वीरित्या लॉग आउट'), 'info');
}

function updateAuthUI() {
    const authButtons = document.getElementById('authButtons');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');
    
    if (currentUser) {
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        userName.textContent = currentUser.name;
    } else {
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
    }
}

function showDashboard(type) {
    const pages = document.querySelectorAll('.page, .dashboard');
    pages.forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active');
    });
    
    const dashboardId = type === 'customer' ? 'customerDashboard' : 'ownerDashboard';
    const dashboard = document.getElementById(dashboardId);
    
    if (dashboard) {
        dashboard.classList.remove('hidden');
        dashboard.classList.add('active');
    }
}

// Booking System
function bookEquipment(equipmentId) {
    if (!currentUser) {
        showModal('loginModal');
        showNotification(getTranslation('Please login to book equipment', 'उपकरण बुक करने के लिए कृपया लॉगिन करें', 'उपकरण बुक करण्यासाठी कृपया लॉगिन करा'), 'warning');
        return;
    }
    
    currentEquipment = equipmentData.find(e => e.id === equipmentId);
    if (!currentEquipment) return;
    
    const bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.innerHTML = `
        <div style="padding: 1rem; background: #f8f9fa; border-radius: 8px; margin: 1rem 0;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="font-size: 2rem;">🚜</div>
                <div>
                    <h3 style="margin: 0; color: #2c5530;">${getItemName(currentEquipment)}</h3>
                    <p style="margin: 0; color: #666;"><strong>₹${currentEquipment.price.toLocaleString()}</strong>/day</p>
                </div>
            </div>
            <div style="grid-template-columns: 1fr 1fr; gap: 1rem; display: grid; font-size: 0.9rem;">
                <div><strong>${getTranslation('Location', 'स्थान', 'ठिकाण')}:</strong> ${getItemLocation(currentEquipment)}</div>
                <div><strong>${getTranslation('Owner', 'मालिक', 'मालक')}:</strong> ${currentEquipment.owner}</div>
                <div><strong>${getTranslation('Year', 'वर्ष', 'वर्ष')}:</strong> ${currentEquipment.year}</div>
                <div><strong>${getTranslation('Phone', 'फोन', 'फोन')}:</strong> ${currentEquipment.ownerPhone}</div>
            </div>
            <div style="margin-top: 1rem;">
                <strong>${getTranslation('Specifications', 'विशेषताएं', 'वैशिष्ट्ये')}:</strong> ${currentEquipment.specifications}
            </div>
        </div>
    `;
    
    showModal('bookingModal');
}

function calculateBookingTotal() {
    const fromDate = document.getElementById('bookingFromDate').value;
    const toDate = document.getElementById('bookingToDate').value;
    const calculationDiv = document.getElementById('bookingCalculation');
    
    if (!fromDate || !toDate || !currentEquipment) {
        calculationDiv.innerHTML = '';
        return;
    }
    
    const from = new Date(fromDate);
    const to = new Date(toDate);
    
    if (to <= from) {
        calculationDiv.innerHTML = `
            <div style="color: #dc3545; font-weight: 600;">
                ${getTranslation('End date must be after start date', 'समाप्ति दिनांक प्रारंभ दिनांक के बाद होना चाहिए', 'समाप्ती दिनांक सुरुवातीच्या दिनांकानंतर असावा')}
            </div>
        `;
        return;
    }
    
    const days = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
    const dailyRate = currentEquipment.price;
    const subtotal = days * dailyRate;
    const tax = subtotal * 0.18;
    const total = subtotal + tax;
    
    calculationDiv.innerHTML = `
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #28a745;">
            <h4 style="margin: 0 0 1rem 0; color: #2c5530;">${getTranslation('Booking Summary', 'बुकिंग सारांश', 'बुकिंग सारांश')}</h4>
            <div style="display: grid; gap: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>${getTranslation('Duration', 'अवधि', 'कालावधी')}:</span>
                    <strong>${days} ${getTranslation('days', 'दिन', 'दिवस')}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${getTranslation('Daily Rate', 'दैनिक दर', 'दैनंदिन दर')}:</span>
                    <span>₹${dailyRate.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${getTranslation('Subtotal', 'उप-योग', 'उप-एकूण')}:</span>
                    <span>₹${subtotal.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>GST (18%):</span>
                    <span>₹${Math.round(tax).toLocaleString()}</span>
                </div>
                <hr style="margin: 0.5rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: bold; color: #2c5530;">
                    <span>${getTranslation('Total Amount', 'कुल राशि', 'एकूण रक्कम')}:</span>
                    <span>₹${Math.round(total).toLocaleString()}</span>
                </div>
            </div>
        </div>
    `;
}

function confirmBooking(event) {
    event.preventDefault();
    
    const fromDate = document.getElementById('bookingFromDate').value;
    const toDate = document.getElementById('bookingToDate').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    
    if (!fromDate || !toDate) {
        alert(getTranslation('Please select booking dates', 'कृपया बुकिंग की तारीखें चुनें', 'कृपया बुकिंगच्या तारखा निवडा'));
        return;
    }
    
    if (!paymentMethod) {
        alert(getTranslation('Please select a payment method', 'कृपया भुगतान विधि चुनें', 'कृपया पेमेंट पद्धत निवडा'));
        return;
    }
    
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const days = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
    const total = Math.round((days * currentEquipment.price) * 1.18);
    
    const equipmentIndex = equipmentData.findIndex(e => e.id === currentEquipment.id);
    if (equipmentIndex !== -1) {
        equipmentData[equipmentIndex].available = false;
    }
    
    closeModal('bookingModal');
    updateEquipmentGrid();
    
    showNotification(
        getTranslation(
            `Booking confirmed! Total: ₹${total.toLocaleString()} for ${days} days`,
            `बुकिंग की पुष्टि! कुल: ₹${total.toLocaleString()} ${days} दिनों के लिए`,
            `बुकिंग निश्चित! एकूण: ₹${total.toLocaleString()} ${days} दिवसांसाठी`
        ),
        'success'
    );
    
    document.getElementById('bookingForm').reset();
}

// Search and Filter
function searchEquipment(event) {
    event.preventDefault();
    
    const type = document.getElementById('searchType').value;
    const location = document.getElementById('searchLocation').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('searchPrice').value) || Infinity;
    const fromDate = document.getElementById('searchFromDate').value;
    const toDate = document.getElementById('searchToDate').value;
    
    filteredEquipment = equipmentData.filter(item => {
        const matchesType = !type || item.category === type;
        const matchesLocation = !location || item.location.toLowerCase().includes(location);
        const matchesPrice = item.price <= maxPrice;
        const matchesAvailability = item.available;
        
        return matchesType && matchesLocation && matchesPrice && matchesAvailability;
    });
    
    updateEquipmentGrid();
    showPage('equipment');
    
    showNotification(
        getTranslation(
            `Found ${filteredEquipment.length} equipment`,
            `${filteredEquipment.length} उपकरण मिले`,
            `${filteredEquipment.length} उपकरणे सापडली`
        ),
        'info'
    );
}

function filterEquipment() {
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    
    filteredEquipment = equipmentData.filter(item => {
        return !category || item.category === category;
    });
    
    filteredEquipment.sort((a, b) => {
        switch (sortBy) {
            case 'price':
                return a.price - b.price;
            case 'availability':
                return b.available - a.available;
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    updateEquipmentGrid();
}

// Add Equipment (for owners)
function addEquipment(event) {
    event.preventDefault();
    
    if (!currentUser || currentUser.type !== 'owner') {
        alert(getTranslation('Only equipment owners can add equipment', 'केवल उपकरण मालिक ही उपकरण जोड़ सकते हैं', 'फक्त उपकरण मालकच उपकरण जोडू शकतात'));
        return;
    }
    
    closeModal('addEquipmentModal');
    showNotification(getTranslation('Equipment added successfully!', 'उपकरण सफलतापूर्वक जोड़ा गया!', 'उपकरण यशस्वीरित्या जोडले!'), 'success');
    
    document.getElementById('addEquipmentForm').reset();
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer; margin-left: 1rem;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Reset filters
function resetFilters() {
    filteredEquipment = [...equipmentData];
    updateEquipmentGrid();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) categoryFilter.value = '';
    if (sortFilter) sortFilter.value = 'name';
}