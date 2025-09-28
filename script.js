// Enhanced JavaScript with 10 Equipment Items and 3D Models
let currentLanguage = 'en';
let currentUser = null;
let currentEquipment = null;
let equipmentData = [];
let filteredEquipment = [];

// Enhanced Equipment Database with 10 Items
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
        description: "50 HP tractor perfect for farming operations with power steering",
        descriptionHi: "पावर स्टीयरिंग के साथ खेती के संचालन के लिए उत्तम 50 एचपी ट्रैक्टर",
        descriptionMr: "पॉवर स्टिअरिंगसह शेती कामांसाठी परिपूर्ण 50 एचपी ट्रॅक्टर",
        available: true,
        year: 2020,
        owner: "Rahul Sharma",
        ownerPhone: "+91 98765 11111",
        specifications: "50 HP, 4WD, Power Steering, Air Conditioning",
        model3d: "tractor"
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
        description: "Efficient combine harvester for wheat and rice with 4m cutting width",
        descriptionHi: "4 मीटर कटिंग चौड़ाई के साथ गेहूं और चावल के लिए कुशल कंबाइन हार्वेस्टर",
        descriptionMr: "4 मीटर कटिंग रुंदीसह गहू आणि भातासाठी कार्यक्षम कंबाइन हार्वेस्टर",
        available: false,
        year: 2019,
        owner: "Suresh Patel",
        ownerPhone: "+91 98765 22222",
        specifications: "Self-propelled, 120 HP engine, 4m cutting width, GPS enabled",
        model3d: "harvester"
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
        description: "Complete 9-tine cultivator set for soil preparation and weeding",
        descriptionHi: "मिट्टी की तैयारी और निराई के लिए पूरा 9-टाइन कल्टीवेटर सेट",
        descriptionMr: "मातीच्या तयारी आणि निदाणीसाठी संपूर्ण 9-टाइन कल्टिव्हेटर सेट",
        available: true,
        year: 2021,
        owner: "Amit Singh",
        ownerPhone: "+91 98765 33333",
        specifications: "9-tine cultivator, adjustable depth control, spring loaded",
        model3d: "cultivator"
    },
    {
        id: 4,
        name: "Precision Seeder Machine",
        nameHi: "प्रिसिजन सीडर मशीन",
        nameMr: "प्रिसिजन सीडर मशीन",
        category: "seeder",
        price: 300,
        location: "Kolhapur, Maharashtra",
        locationHi: "कोल्हापुर, महाराष्ट्र",
        locationMr: "कोल्हापूर, महाराष्ट्र",
        description: "6-row precision seeder for accurate seed placement with fertilizer attachment",
        descriptionHi: "उर्वरक अटैचमेंट के साथ सटीक बीज रखने के लिए 6-पंक्ति प्रिसिजन सीडर",
        descriptionMr: "खत संलग्नकासह अचूक बीज लावणीसाठी 6-पंक्ती प्रिसिजन सीडर",
        available: true,
        year: 2022,
        owner: "Priya Deshmukh",
        ownerPhone: "+91 98765 44444",
        specifications: "6-row seeder, adjustable seed rate, fertilizer attachment",
        model3d: "seeder"
    },
    {
        id: 5,
        name: "Reversible Plough Set",
        nameHi: "रिवर्सिबल हल सेट",
        nameMr: "रिव्हर्सिबल नांगर सेट",
        category: "plough",
        price: 250,
        location: "Solapur, Maharashtra",
        locationHi: "सोलापुर, महाराष्ट्र",
        locationMr: "सोलापूर, महाराष्ट्र",
        description: "3-bottom reversible plough set for efficient field preparation",
        descriptionHi: "कुशल खेत तैयारी के लिए 3-बॉटम रिवर्सिबल हल सेट",
        descriptionMr: "कार्यक्षम शेत तयारीसाठी 3-बॉटम रिव्हर्सिबल नांगर सेट",
        available: true,
        year: 2021,
        owner: "Ganesh Kale",
        ownerPhone: "+91 98765 55555",
        specifications: "3-bottom reversible plough, adjustable width, heavy duty",
        model3d: "plough"
    },
    {
        id: 6,
        name: "Heavy Duty Rotavator",
        nameHi: "हेवी ड्यूटी रोटावेटर",
        nameMr: "हेवी ड्यूटी रोटावेटर",
        category: "cultivator",
        price: 800,
        location: "Satara, Maharashtra",
        locationHi: "सतारा, महाराष्ट्र",
        locationMr: "सातारा, महाराष्ट्र",
        description: "6-foot heavy-duty rotavator for intensive soil tilling and mixing",
        descriptionHi: "गहन मिट्टी की जुताई और मिश्रण के लिए 6-फुट हेवी-ड्यूटी रोटावेटर",
        descriptionMr: "सखोल मातीच्या कसणी आणि मिश्रणासाठी 6-फूट हेवी-ड्यूटी रोटावेटर",
        available: true,
        year: 2020,
        owner: "Vikram Patil",
        ownerPhone: "+91 98765 66666",
        specifications: "6-foot working width, PTO driven, heavy duty blades",
        model3d: "rotavator"
    },
    {
        id: 7,
        name: "Agricultural Sprayer",
        nameHi: "कृषि स्प्रेयर",
        nameMr: "कृषी स्प्रेयर",
        category: "sprayer",
        price: 600,
        location: "Sangli, Maharashtra",
        locationHi: "सांगली, महाराष्ट्र",
        locationMr: "सांगली, महाराष्ट्र",
        description: "500-liter tank sprayer for pesticide and fertilizer application",
        descriptionHi: "कीटनाशक और उर्वरक प्रयोग के लिए 500-लीटर टैंक स्प्रेयर",
        descriptionMr: "कीटकनाशक आणि खत प्रयोगासाठी 500-लिटर टाकी स्प्रेयर",
        available: true,
        year: 2022,
        owner: "Sunita Jadhav",
        ownerPhone: "+91 98765 77777",
        specifications: "500L tank, boom sprayer, adjustable pressure, GPS guided",
        model3d: "sprayer"
    },
    {
        id: 8,
        name: "Wheat Thresher",
        nameHi: "गेहूं थ्रेशर",
        nameMr: "गहू थ्रेशर",
        category: "thresher",
        price: 900,
        location: "Ahmednagar, Maharashtra",
        locationHi: "अहमदनगर, महाराष्ट्र",
        locationMr: "अहमदनगर, महाराष्ट्र",
        description: "High-capacity wheat thresher for efficient grain separation",
        descriptionHi: "कुशल अनाज पृथक्करण के लिए उच्च क्षमता गेहूं थ्रेशर",
        descriptionMr: "कार्यक्षम धान्य पृथक्करणासाठी उच्च क्षमता गहू थ्रेशर",
        available: true,
        year: 2021,
        owner: "Ravi Desai",
        ownerPhone: "+91 98765 88888",
        specifications: "High capacity, multi-crop thresher, diesel engine, mobile",
        model3d: "thresher"
    },
    {
        id: 9,
        name: "Brush Cutter Mower",
        nameHi: "ब्रश कटर मावर",
        nameMr: "ब्रश कटर मोवर",
        category: "mower",
        price: 350,
        location: "Latur, Maharashtra",
        locationHi: "लातूर, महाराष्ट्र",
        locationMr: "लातूर, महाराष्ट्र",
        description: "Rotary brush cutter for grass cutting and field maintenance",
        descriptionHi: "घास काटने और खेत के रखरखाव के लिए रोटरी ब्रश कटर",
        descriptionMr: "गवत कापणी आणि शेत देखभालीसाठी रोटरी ब्रश कटर",
        available: true,
        year: 2023,
        owner: "Mangesh Bhosale",
        ownerPhone: "+91 98765 99999",
        specifications: "Rotary cutter, 5-foot cutting width, side discharge",
        model3d: "mower"
    },
    {
        id: 10,
        name: "Disc Harrow",
        nameHi: "डिस्क हैरो",
        nameMr: "डिस्क हॅरो",
        category: "harrow",
        price: 450,
        location: "Jalgaon, Maharashtra",
        locationHi: "जलगांव, महाराष्ट्र",
        locationMr: "जळगाव, महाराष्ट्र",
        description: "20-disc harrow for breaking soil clods and field preparation",
        descriptionHi: "मिट्टी के ढेले तोड़ने और खेत की तैयारी के लिए 20-डिस्क हैरो",
        descriptionMr: "मातीचे गुळे तोडण्यासाठी आणि शेत तयारीसाठी 20-डिस्क हॅरो",
        available: false,
        year: 2020,
        owner: "Ashok Patil",
        ownerPhone: "+91 98765 00000",
        specifications: "20-disc harrow, adjustable depth, heavy duty construction",
        model3d: "harrow"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    equipmentData = [...equipmentDatabase];
    filteredEquipment = [...equipmentData];
    initializeApp();
});

function initializeApp() {
    updateEquipmentGrid();
    updateLanguage();
    setupEventListeners();
    setupDateInputs();
    animate3DModels();
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

    // Equipment 3D model interactions
    document.addEventListener('mouseover', function(event) {
        if (event.target.closest('.equipment-3d-model')) {
            event.target.closest('.equipment-3d-model').style.transform = 'rotateY(25deg) rotateX(15deg) scale(1.05)';
        }
    });

    document.addEventListener('mouseout', function(event) {
        if (event.target.closest('.equipment-3d-model')) {
            event.target.closest('.equipment-3d-model').style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
        }
    });
}

function setupDateInputs() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    
    dateInputs.forEach(input => {
        input.min = today;
    });
}

function animate3DModels() {
    const models = document.querySelectorAll('.equipment-3d-model');
    models.forEach((model, index) => {
        setTimeout(() => {
            model.style.opacity = '1';
            model.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Language Management
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    updateLanguage();
    updateEquipmentGrid();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-' + currentLanguage + ']');
    elements.forEach(element => {
        const text = element.getAttribute('data-' + currentLanguage);
        if (text) {
            element.textContent = text;
        }
    });

    const placeholderElements = document.querySelectorAll('[data-' + currentLanguage + '-placeholder]');
    placeholderElements.forEach(element => {
        const placeholder = element.getAttribute('data-' + currentLanguage + '-placeholder');
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });

    const selectOptions = document.querySelectorAll('option[data-' + currentLanguage + ']');
    selectOptions.forEach(option => {
        const text = option.getAttribute('data-' + currentLanguage);
        if (text) {
            option.textContent = text;
        }
    });
}

// Equipment Management with 3D Models
function updateEquipmentGrid() {
    const homeGrid = document.getElementById('equipmentGrid');
    const allGrid = document.getElementById('allEquipmentGrid');
    
    if (homeGrid) {
        homeGrid.innerHTML = createEquipmentCards(filteredEquipment.slice(0, 3));
    }
    if (allGrid) {
        allGrid.innerHTML = createEquipmentCards(filteredEquipment);
    }
    
    // Re-initialize 3D model animations
    setTimeout(animate3DModels, 100);
}

function createEquipmentCards(equipment) {
    if (!equipment || equipment.length === 0) {
        return `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
            <h3>${getTranslation('No equipment found', 'कोई उपकरण नहीं मिला', 'कोणतीही उपकरणे सापडली नाहीत')}</h3>
            <p>${getTranslation('Try adjusting your search filters', 'अपने खोज फ़िल्टर को समायोजित करने का प्रयास करें', 'तुमचे शोध फिल्टर समायोजित करण्याचा प्रयत्न करा')}</p>
        </div>`;
    }

    return equipment.map(item => `
        <div class="equipment-card">
            <div class="equipment-3d-container">
                <div class="equipment-3d-model" style="opacity: 0; transform: translateY(20px); transition: all 0.5s ease;">
                    ${create3DModel(item)}
                </div>
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
                <p style="margin-bottom: 1rem;">${getItemDescription(item)}</p>
                <div style="margin-bottom: 1.5rem; font-size: 0.9rem; color: #666;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <div><strong>${getTranslation('Year', 'वर्ष', 'वर्ष')}:</strong> ${item.year}</div>
                        <div><strong>${getTranslation('Owner', 'मालिक', 'मालक')}:</strong> ${item.owner}</div>
                    </div>
                    <div style="margin-top: 0.5rem;">
                        <strong>${getTranslation('Specs', 'विशेषताएं', 'वैशिष्ट्ये')}:</strong> ${item.specifications}
                    </div>
                </div>
                <button class="btn btn-primary" onclick="bookEquipment(${item.id})" ${!item.available ? 'disabled' : ''} style="width: 100%;">
                    ${getTranslation('Book Now', 'बुक करें', 'बुक करा')}
                </button>
            </div>
        </div>
    `).join('');
}

// 3D Model Creation Functions
function create3DModel(item) {
    switch(item.model3d) {
        case 'tractor':
            return createTractor3D();
        case 'harvester':
            return createHarvester3D();
        case 'cultivator':
            return createCultivator3D();
        case 'seeder':
            return createSeeder3D();
        case 'plough':
            return createPlough3D();
        case 'rotavator':
            return createRotavator3D();
        case 'sprayer':
            return createSprayer3D();
        case 'thresher':
            return createThresher3D();
        case 'mower':
            return createMower3D();
        case 'harrow':
            return createHarrow3D();
        default:
            return createTractor3D();
    }
}

function createTractor3D() {
    return `
        <div class="tractor-3d">
            <div class="tractor-body"></div>
            <div class="tractor-cabin"></div>
            <div class="tractor-wheel front"></div>
            <div class="tractor-wheel rear"></div>
        </div>
    `;
}

function createHarvester3D() {
    return `
        <div class="harvester-3d">
            <div class="harvester-body"></div>
            <div class="harvester-header"></div>
            <div class="harvester-cabin"></div>
            <div class="harvester-wheel front"></div>
            <div class="harvester-wheel rear"></div>
        </div>
    `;
}

function createCultivator3D() {
    return `
        <div class="cultivator-3d">
            <div class="cultivator-frame"></div>
            <div class="cultivator-hitch"></div>
            <div class="cultivator-tines">
                <div class="cultivator-tine"></div>
                <div class="cultivator-tine"></div>
                <div class="cultivator-tine"></div>
                <div class="cultivator-tine"></div>
                <div class="cultivator-tine"></div>
                <div class="cultivator-tine"></div>
                <div class="cultivator-tine"></div>
            </div>
        </div>
    `;
}

function createSeeder3D() {
    return `
        <div class="seeder-3d">
            <div class="seeder-frame"></div>
            <div class="seeder-hoppers">
                <div class="seeder-hopper"></div>
                <div class="seeder-hopper"></div>
                <div class="seeder-hopper"></div>
                <div class="seeder-hopper"></div>
                <div class="seeder-hopper"></div>
            </div>
            <div class="seeder-discs">
                <div class="seeder-disc"></div>
                <div class="seeder-disc"></div>
                <div class="seeder-disc"></div>
                <div class="seeder-disc"></div>
            </div>
        </div>
    `;
}

function createPlough3D() {
    return `
        <div class="plough-3d">
            <div class="plough-frame">
                <div class="plough-share"></div>
                <div class="plough-share" style="left: 40px;"></div>
                <div class="plough-share" style="left: 80px;"></div>
                <div class="plough-moldboard"></div>
                <div class="plough-moldboard" style="left: 40px;"></div>
                <div class="plough-moldboard" style="left: 80px;"></div>
            </div>
            <div class="plough-hitch"></div>
        </div>
        <style>
        .plough-3d {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .plough-frame {
            width: 160px;
            height: 40px;
            background: linear-gradient(145deg, #8D6E63, #5D4037);
            border-radius: 8px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
        }
        .plough-share {
            width: 20px;
            height: 40px;
            background: linear-gradient(145deg, #424242, #212121);
            position: absolute;
            bottom: -30px;
            left: 20px;
            clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
            box-shadow: 0 5px 10px rgba(0,0,0,0.4);
        }
        .plough-moldboard {
            width: 25px;
            height: 30px;
            background: linear-gradient(145deg, #616161, #424242);
            border-radius: 0 0 15px 5px;
            position: absolute;
            bottom: -25px;
            left: 25px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        }
        .plough-hitch {
            width: 30px;
            height: 15px;
            background: linear-gradient(145deg, #FFD700, #FFA000);
            border-radius: 8px;
            position: absolute;
            top: 20%;
            left: 15px;
            box-shadow: inset 0 -4px 8px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.3);
        }
        </style>
    `;
}

function createRotavator3D() {
    return `
        <div class="rotavator-3d">
            <div class="rotavator-frame"></div>
            <div class="rotavator-gearbox"></div>
            <div class="rotavator-blades">
                <div class="rotavator-blade"></div>
                <div class="rotavator-blade"></div>
                <div class="rotavator-blade"></div>
                <div class="rotavator-blade"></div>
                <div class="rotavator-blade"></div>
                <div class="rotavator-blade"></div>
            </div>
            <div class="rotavator-shield"></div>
        </div>
        <style>
        .rotavator-3d {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .rotavator-frame {
            width: 180px;
            height: 50px;
            background: linear-gradient(145deg, #FF5722, #D84315);
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 -12px 24px rgba(0,0,0,0.2), 0 6px 12px rgba(0,0,0,0.3);
        }
        .rotavator-gearbox {
            width: 60px;
            height: 40px;
            background: linear-gradient(145deg, #424242, #212121);
            border-radius: 8px;
            position: absolute;
            top: -15px;
            right: 20px;
            box-shadow: inset 0 -10px 20px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.4);
        }
        .rotavator-blades {
            position: absolute;
            bottom: -30px;
            left: 20px;
            width: 140px;
            height: 30px;
        }
        .rotavator-blade {
            width: 20px;
            height: 25px;
            background: linear-gradient(145deg, #616161, #424242);
            border-radius: 3px;
            position: absolute;
            box-shadow: 0 3px 6px rgba(0,0,0,0.4);
            animation: rotateBlade 2s linear infinite;
        }
        .rotavator-blade:nth-child(1) { left: 0px; animation-delay: 0s; }
        .rotavator-blade:nth-child(2) { left: 25px; animation-delay: 0.3s; }
        .rotavator-blade:nth-child(3) { left: 50px; animation-delay: 0.6s; }
        .rotavator-blade:nth-child(4) { left: 75px; animation-delay: 0.9s; }
        .rotavator-blade:nth-child(5) { left: 100px; animation-delay: 1.2s; }
        .rotavator-blade:nth-child(6) { left: 125px; animation-delay: 1.5s; }
        .rotavator-shield {
            width: 160px;
            height: 20px;
            background: linear-gradient(145deg, #8D6E63, #5D4037);
            border-radius: 10px 10px 0 0;
            position: absolute;
            bottom: 5px;
            left: 60px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        }
        @keyframes rotateBlade {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        </style>
    `;
}

function createSprayer3D() {
    return `
        <div class="sprayer-3d">
            <div class="sprayer-tank"></div>
            <div class="sprayer-pump"></div>
            <div class="sprayer-boom">
                <div class="sprayer-nozzle"></div>
                <div class="sprayer-nozzle"></div>
                <div class="sprayer-nozzle"></div>
                <div class="sprayer-nozzle"></div>
                <div class="sprayer-nozzle"></div>
            </div>
            <div class="sprayer-wheels">
                <div class="sprayer-wheel"></div>
                <div class="sprayer-wheel"></div>
            </div>
        </div>
        <style>
        .sprayer-3d {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .sprayer-tank {
            width: 120px;
            height: 80px;
            background: linear-gradient(145deg, #2196F3, #1565C0);
            border-radius: 60px;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 -20px 40px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.3);
        }
        .sprayer-tank::before {
            content: '500L';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-weight: bold;
            font-size: 12px;
        }
        .sprayer-pump {
            width: 30px;
            height: 30px;
            background: linear-gradient(145deg, #FF9800, #F57C00);
            border-radius: 5px;
            position: absolute;
            top: 30%;
            right: 40px;
            box-shadow: inset 0 -8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.3);
        }
        .sprayer-boom {
            width: 200px;
            height: 15px;
            background: linear-gradient(145deg, #4CAF50, #2E7D32);
            border-radius: 8px;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        }
        .sprayer-nozzle {
            width: 8px;
            height: 15px;
            background: linear-gradient(145deg, #FFD700, #FFA000);
            border-radius: 0 0 4px 4px;
            position: absolute;
            bottom: -10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .sprayer-nozzle:nth-child(1) { left: 20px; }
        .sprayer-nozzle:nth-child(2) { left: 60px; }
        .sprayer-nozzle:nth-child(3) { left: 100px; }
        .sprayer-nozzle:nth-child(4) { left: 140px; }
        .sprayer-nozzle:nth-child(5) { left: 180px; }
        .sprayer-wheels {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
        }
        .sprayer-wheel {
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, #424242, #212121);
            border-radius: 50%;
            border: 4px solid #616161;
            position: absolute;
            box-shadow: inset 0 -10px 20px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.4);
        }
        .sprayer-wheel:first-child { left: 0; }
        .sprayer-wheel:last-child { right: 0; }
        </style>
    `;
}

function createThresher3D() {
    return `
        <div class="thresher-3d">
            <div class="thresher-body"></div>
            <div class="thresher-cylinder"></div>
            <div class="thresher-fan"></div>
            <div class="thresher-sieve"></div>
            <div class="thresher-outlet"></div>
            <div class="thresher-wheels">
                <div class="thresher-wheel"></div>
                <div class="thresher-wheel"></div>
            </div>
        </div>
        <style>
        .thresher-3d {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .thresher-body {
            width: 200px;
            height: 80px;
            background: linear-gradient(145deg, #FF5722, #D84315);
            border-radius: 15px;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 -15px 30px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.3);
        }
        .thresher-cylinder {
            width: 120px;
            height: 30px;
            background: linear-gradient(145deg, #424242, #212121);
            border-radius: 15px;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: inset 0 -8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.4);
            animation: thresherRotate 3s linear infinite;
        }
        .thresher-fan {
            width: 40px;
            height: 40px;
            background: linear-gradient(145deg, #616161, #424242);
            border-radius: 50%;
            position: absolute;
            top: 30%;
            right: 30px;
            box-shadow: inset 0 -10px 20px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.4);
            animation: thresherFan 1s linear infinite;
        }
        .thresher-fan::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            height: 2px;
            background: #757575;
            transform: translate(-50%, -50%);
        }
        .thresher-fan::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 60%;
            background: #757575;
            transform: translate(-50%, -50%);
        }
        .thresher-sieve {
            width: 160px;
            height: 20px;
            background: linear-gradient(145deg, #8D6E63, #5D4037);
            border-radius: 5px;
            position: absolute;
            bottom: 25%;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        }
        .thresher-outlet {
            width: 40px;
            height: 60px;
            background: linear-gradient(145deg, #FF9800, #F57C00);
            border-radius: 0 0 20px 20px;
            position: absolute;
            bottom: 15%;
            right: 40px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .thresher-wheels {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translateX(-50%);
            width: 140px;
        }
        .thresher-wheel {
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, #424242, #212121);
            border-radius: 50%;
            border: 5px solid #616161;
            position: absolute;
            box-shadow: inset 0 -12px 24px rgba(0,0,0,0.5), 0 5px 10px rgba(0,0,0,0.4);
        }
        .thresher-wheel:first-child { left: 0; }
        .thresher-wheel:last-child { right: 0; }
        @keyframes thresherRotate {
            0% { transform: translateX(-50%) rotate(0deg); }
            100% { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes thresherFan {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        </style>
    `;
}

function createMower3D() {
    return `
        <div class="mower-3d">
            <div class="mower-deck"></div>
            <div class="mower-blade"></div>
            <div class="mower-guard"></div>
            <div class="mower-hitch"></div>
            <div class="mower-wheels">
                <div class="mower-wheel"></div>
                <div class="mower-wheel"></div>
            </div>
        </div>
        <style>
        .mower-3d {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .mower-deck {
            width: 180px;
            height: 60px;
            background: linear-gradient(145deg, #4CAF50, #2E7D32);
            border-radius: 30px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 -15px 30px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.3);
        }
        .mower-blade {
            width: 120px;
            height: 8px;
            background: linear-gradient(145deg, #616161, #424242);
            border-radius: 4px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 2px 4px rgba(0,0,0,0.4);
            animation: mowerBlade 2s linear infinite;
        }
        .mower-blade::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 120px;
            background: linear-gradient(145deg, #616161, #424242);
            border-radius: 4px;
            transform: translate(-50%, -50%);
            box-shadow: 0 2px 4px rgba(0,0,0,0.4);
        }
        .mower-guard {
            width: 200px;
            height: 25px;
            background: linear-gradient(145deg, #FF9800, #F57C00);
            border-radius: 15px;
            position: absolute;
            bottom: 15%;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        }
        .mower-hitch {
            width: 40px;
            height: 20px;
            background: linear-gradient(145deg, #FFD700, #FFA000);
            border-radius: 10px;
            position: absolute;
            top: 20%;
            left: 20px;
            box-shadow: inset 0 -5px 10px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.3);
        }
        .mower-wheels {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
        }
        .mower-wheel {
            width: 35px;
            height: 35px;
            background: radial-gradient(circle, #424242, #212121);
            border-radius: 50%;
            border: 3px solid #616161;
            position: absolute;
            box-shadow: inset 0 -8px 16px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.4);
        }
        .mower-wheel:first-child { left: 0; }
        .mower-wheel:last-child { right: 0; }
        @keyframes mowerBlade {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        </style>
    `;
}

function createHarrow3D() {
    return `
        <div class="harrow-3d">
            <div class="harrow-frame"></div>
            <div class="harrow-discs">
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
                <div class="harrow-disc"></div>
            </div>
            <div class="harrow-hitch"></div>
        </div>
        <style>
        .harrow-3d {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .harrow-frame {
            width: 200px;
            height: 40px;
            background: linear-gradient(145deg, #8D6E63, #5D4037);
            border-radius: 8px;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
        }
        .harrow-discs {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .harrow-disc {
            width: 30px;
            height: 35px;
            background: radial-gradient(ellipse, #616161, #424242);
            border-radius: 50%;
            border: 2px solid #757575;
            position: relative;
            box-shadow: inset 0 -8px 16px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3);
            animation: harrowDisc 3s linear infinite;
        }
        .harrow-disc:nth-child(even) {
            animation-direction: reverse;
        }
        .harrow-disc::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            height: 2px;
            background: #757575;
            transform: translate(-50%, -50%);
        }
        .harrow-hitch {
            width: 50px;
            height: 20px;
            background: linear-gradient(145deg, #FFD700, #FFA000);
            border-radius: 10px;
            position: absolute;
            top: 25%;
            left: 20px;
            box-shadow: inset 0 -5px 10px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.3);
        }
        @keyframes harrowDisc {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        </style>
    `;
}

// Helper Functions
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

// Authentication Functions
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
        <div style="padding: 1.5rem; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; margin: 1rem 0; border: 1px solid rgba(76, 175, 80, 0.1);">
            <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;">
                <div style="font-size: 3rem;">🚜</div>
                <div>
                    <h3 style="margin: 0; color: #1a4d1a; font-weight: bold;">${getItemName(currentEquipment)}</h3>
                    <p style="margin: 0; color: #4CAF50; font-size: 1.2rem; font-weight: bold;">₹${currentEquipment.price.toLocaleString()}/day</p>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.95rem;">
                <div><strong>${getTranslation('Location', 'स्थान', 'ठिकाण')}:</strong> ${getItemLocation(currentEquipment)}</div>
                <div><strong>${getTranslation('Owner', 'मालिक', 'मालक')}:</strong> ${currentEquipment.owner}</div>
                <div><strong>${getTranslation('Year', 'वर्ष', 'वर्ष')}:</strong> ${currentEquipment.year}</div>
                <div><strong>${getTranslation('Phone', 'फोन', 'फोन')}:</strong> ${currentEquipment.ownerPhone}</div>
            </div>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(76, 175, 80, 0.2);">
                <strong>${getTranslation('Specifications', 'विशेषताएं', 'वैशिष्ट्ये')}:</strong> 
                <span style="color: #666;">${currentEquipment.specifications}</span>
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
            <div style="color: #F44336; font-weight: 600; padding: 1rem; background: rgba(244, 67, 54, 0.1); border-radius: 10px;">
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
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 1.5rem; border-radius: 15px; border-left: 5px solid #4CAF50;">
            <h4 style="margin: 0 0 1rem 0; color: #1a4d1a; font-weight: bold;">${getTranslation('Booking Summary', 'बुकिंग सारांश', 'बुकिंग सारांश')}</h4>
            <div style="display: grid; gap: 0.8rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 500;">${getTranslation('Duration', 'अवधि', 'कालावधी')}:</span>
                    <strong style="color: #4CAF50;">${days} ${getTranslation('days', 'दिन', 'दिवस')}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${getTranslation('Daily Rate', 'दैनिक दर', 'दैनंदिन दर')}:</span>
                    <span>₹${dailyRate.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${getTranslation('Subtotal', 'उप-योग', 'उप-एकूण')}:</span>
                    <span>₹${subtotal.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>GST (18%):</span>
                    <span>₹${Math.round(tax).toLocaleString()}</span>
                </div>
                <hr style="margin: 0.8rem 0; border: none; border-top: 2px solid rgba(76, 175, 80, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 1.2rem; font-weight: bold; color: #1a4d1a;">
                    <span>${getTranslation('Total Amount', 'कुल राशि', 'एकूण रक्कम')}:</span>
                    <span style="color: #4CAF50;">₹${Math.round(total).toLocaleString()}</span>
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
    
    // Update equipment availability
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

// Search and Filter Functions
function searchEquipment(event) {
    event.preventDefault();
    
    const type = document.getElementById('searchType').value;
    const location = document.getElementById('searchLocation').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('searchPrice').value) || Infinity;
    
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
        background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : type === 'error' ? '#F44336' : '#2196F3'};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        z-index: 3000;
        max-width: 350px;
        font-weight: 500;
        animation: slideInRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; margin-left: 1rem; opacity: 0.8; transition: opacity 0.2s;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// Enhanced CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(notificationStyles);