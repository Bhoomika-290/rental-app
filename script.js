// Global Variables
let currentLanguage = 'en';
let currentUser = null;
let currentEquipment = null;
let equipmentData = [];
let filteredEquipment = [];

// Equipment Data with Multiple Image Views
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='tractorGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23228B22'/><stop offset='100%' stop-color='%23006400'/></linearGradient></defs><rect fill='%2387CEEB' width='400' height='300'/><rect fill='url(%23tractorGrad)' x='50' y='100' width='300' height='120' rx='20'/><circle fill='%23333' cx='100' cy='250' r='35' stroke='%23666' stroke-width='3'/><circle fill='%23333' cx='300' cy='250' r='35' stroke='%23666' stroke-width='3'/><circle fill='%23555' cx='100' cy='250' r='20'/><circle fill='%23555' cx='300' cy='250' r='20'/><rect fill='%23FFD700' x='80' y='80' width='240' height='30' rx='10'/><rect fill='%23FF6347' x='180' y='110' width='40' height='60' rx='5'/><text x='200' y='140' text-anchor='middle' fill='white' font-size='12' font-weight='bold'>JOHN DEERE</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='tractorSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23228B22'/><stop offset='100%' stop-color='%23006400'/></linearGradient></defs><rect fill='%23F0E68C' width='400' height='300'/><path fill='url(%23tractorSide)' d='M50,120 L320,120 L320,200 L280,200 L280,180 L120,180 L120,200 L50,200 Z'/><circle fill='%23333' cx='100' cy='240' r='30' stroke='%23666' stroke-width='3'/><circle fill='%23333' cx='270' cy='240' r='30' stroke='%23666' stroke-width='3'/><circle fill='%23555' cx='100' cy='240' r='18'/><circle fill='%23555' cx='270' cy='240' r='18'/><rect fill='%23FFD700' x='60' y='100' width='200' height='25' rx='8'/><rect fill='%23FF6347' x='280' y='130' width='30' height='50' rx='5'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='tractorFront' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23228B22'/><stop offset='100%' stop-color='%23006400'/></linearGradient></defs><rect fill='%23E6E6FA' width='400' height='300'/><rect fill='url(%23tractorFront)' x='120' y='80' width='160' height='140' rx='15'/><circle fill='%23333' cx='150' cy='250' r='25' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='250' cy='250' r='25' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='150' cy='250' r='15'/><circle fill='%23555' cx='250' cy='250' r='15'/><rect fill='%23FFD700' x='130' y='60' width='140' height='25' rx='8'/><rect fill='%23FF6347' x='180' y='90' width='40' height='60' rx='5'/><rect fill='%234169E1' x='185' y='95' width='30' height='25' rx='3'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Front View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='harvesterGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23FF6347'/><stop offset='100%' stop-color='%23DC143C'/></linearGradient></defs><rect fill='%23FFE4E1' width='400' height='300'/><rect fill='url(%23harvesterGrad)' x='30' y='80' width='340' height='140' rx='15'/><circle fill='%23333' cx='80' cy='250' r='30' stroke='%23666' stroke-width='3'/><circle fill='%23333' cx='320' cy='250' r='30' stroke='%23666' stroke-width='3'/><circle fill='%23555' cx='80' cy='250' r='18'/><circle fill='%23555' cx='320' cy='250' r='18'/><rect fill='%23FFD700' x='40' y='60' width='320' height='25' rx='8'/><rect fill='%23FFA500' x='60' y='90' width='280' height='20' rx='5'/><rect fill='%234169E1' x='150' y='120' width='100' height='40' rx='5'/><path fill='%23228B22' d='M50,220 L100,210 L150,220 L200,210 L250,220 L300,210 L350,220 L350,240 L50,240 Z'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='harvesterSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23FF6347'/><stop offset='100%' stop-color='%23DC143C'/></linearGradient></defs><rect fill='%23F0F8FF' width='400' height='300'/><path fill='url(%23harvesterSide)' d='M40,100 L360,100 L360,180 L320,180 L320,160 L120,160 L120,180 L80,180 L80,200 L40,200 Z'/><circle fill='%23333' cx='100' cy='240' r='28' stroke='%23666' stroke-width='3'/><circle fill='%23333' cx='300' cy='240' r='28' stroke='%23666' stroke-width='3'/><circle fill='%23555' cx='100' cy='240' r='16'/><circle fill='%23555' cx='300' cy='240' r='16'/><rect fill='%23FFD700' x='50' y='80' width='300' height='25' rx='8'/><rect fill='%234169E1' x='150' y='110' width='100' height='35' rx='5'/><path fill='%23228B22' d='M60,200 L340,200 L340,220 L60,220 Z'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='cultivatorGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%238B4513'/><stop offset='100%' stop-color='%23654321'/></linearGradient></defs><rect fill='%23DEB887' width='400' height='300'/><rect fill='url(%23cultivatorGrad)' x='50' y='100' width='300' height='80' rx='10'/><g stroke='%23333' stroke-width='4' fill='%23333'><line x1='100' y1='180' x2='100' y2='250'/><line x1='130' y1='180' x2='130' y2='260'/><line x1='160' y1='180' x2='160' y2='250'/><line x1='190' y1='180' x2='190' y2='260'/><line x1='220' y1='180' x2='220' y2='250'/><line x1='250' y1='180' x2='250' y2='260'/><line x1='280' y1='180' x2='280' y2='250'/><line x1='310' y1='180' x2='310' y2='260'/><line x1='340' y1='180' x2='340' y2='250'/></g><g fill='%23654321'><polygon points='95,250 105,250 100,270'/><polygon points='125,260 135,260 130,280'/><polygon points='155,250 165,250 160,270'/><polygon points='185,260 195,260 190,280'/><polygon points='215,250 225,250 220,270'/><polygon points='245,260 255,260 250,280'/><polygon points='275,250 285,250 280,270'/><polygon points='305,260 315,260 310,280'/><polygon points='335,250 345,250 340,270'/></g><rect fill='%23FFD700' x='60' y='80' width='280' height='25' rx='8'/><text x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>CULTIVATOR</text><text x='200' y='290' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='cultivatorSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%238B4513'/><stop offset='100%' stop-color='%23654321'/></linearGradient></defs><rect fill='%23F5DEB3' width='400' height='300'/><rect fill='url(%23cultivatorSide)' x='80' y='120' width='240' height='60' rx='8'/><g stroke='%23333' stroke-width='3' fill='%23333'><path d='M100,180 L100,220 L95,240 L105,240 Z'/><path d='M140,180 L140,230 L135,250 L145,250 Z'/><path d='M180,180 L180,220 L175,240 L185,240 Z'/><path d='M220,180 L220,230 L215,250 L225,250 Z'/><path d='M260,180 L260,220 L255,240 L265,240 Z'/><path d='M300,180 L300,230 L295,250 L305,250 Z'/></g><rect fill='%23FFD700' x='90' y='100' width='220' height='25' rx='8'/><circle fill='%23666' cx='120' cy='110' r='8'/><circle fill='%23666' cx='280' cy='110' r='8'/><text x='200' y='290' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='seederGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2332CD32'/><stop offset='100%' stop-color='%23228B22'/></linearGradient></defs><rect fill='%2387CEEB' width='400' height='300'/><rect fill='url(%23seederGrad)' x='50' y='100' width='300' height='80' rx='8'/><circle fill='%23333' cx='100' cy='220' r='25' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='300' cy='220' r='25' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='100' cy='220' r='15'/><circle fill='%23555' cx='300' cy='220' r='15'/><rect fill='%23FFD700' x='60' y='80' width='280' height='25' rx='8'/><g fill='%23FFA500'><rect x='80' y='110' width='40' height='60' rx='5'/><rect x='130' y='110' width='40' height='60' rx='5'/><rect x='180' y='110' width='40' height='60' rx='5'/><rect x='230' y='110' width='40' height='60' rx='5'/><rect x='280' y='110' width='40' height='60' rx='5'/></g><g fill='%23fff' opacity='0.8'><circle cx='100' cy='140' r='8'/><circle cx='150' cy='140' r='8'/><circle cx='200' cy='140' r='8'/><circle cx='250' cy='140' r='8'/><circle cx='300' cy='140' r='8'/></g><text x='200' y='155' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>SEEDER</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='seederSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2332CD32'/><stop offset='100%' stop-color='%23228B22'/></linearGradient></defs><rect fill='%23F0FFF0' width='400' height='300'/><rect fill='url(%23seederSide)' x='80' y='120' width='240' height='60' rx='8'/><circle fill='%23333' cx='120' cy='220' r='22' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='280' cy='220' r='22' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='120' cy='220' r='13'/><circle fill='%23555' cx='280' cy='220' r='13'/><rect fill='%23FFD700' x='90' y='100' width='220' height='25' rx='8'/><g fill='%23FFA500'><rect x='100' y='130' width='30' height='40' rx='3'/><rect x='140' y='130' width='30' height='40' rx='3'/><rect x='180' y='130' width='30' height='40' rx='3'/><rect x='220' y='130' width='30' height='40' rx='3'/><rect x='260' y='130' width='30' height='40' rx='3'/></g><g stroke='%23333' stroke-width='2'><line x1='115' y1='170' x2='115' y2='200'/><line x1='155' y1='170' x2='155' y2='200'/><line x1='195' y1='170' x2='195' y2='200'/><line x1='235' y1='170' x2='235' y2='200'/><line x1='275' y1='170' x2='275' y2='200'/></g><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='ploughGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%238B4513'/><stop offset='100%' stop-color='%23654321'/></linearGradient></defs><rect fill='%23DEB887' width='400' height='300'/><rect fill='url(%23ploughGrad)' x='50' y='120' width='300' height='40' rx='5'/><g fill='%23333'><path d='M100,160 L100,210 L120,220 L130,200 L120,180 Z'/><path d='M150,160 L150,210 L170,220 L180,200 L170,180 Z'/><path d='M200,160 L200,210 L220,220 L230,200 L220,180 Z'/><path d='M250,160 L250,210 L270,220 L280,200 L270,180 Z'/><path d='M300,160 L300,210 L320,220 L330,200 L320,180 Z'/></g><rect fill='%23FFD700' x='60' y='100' width='280' height='25' rx='8'/><circle fill='%23666' cx='80' cy='135' r='8'/><circle fill='%23666' cx='320' cy='135' r='8'/><g fill='%23A0522D'><rect x='110' y='190' width='15' height='30' rx='3'/><rect x='160' y='190' width='15' height='30' rx='3'/><rect x='210' y='190' width='15' height='30' rx='3'/><rect x='260' y='190' width='15' height='30' rx='3'/><rect x='310' y='190' width='15' height='30' rx='3'/></g><text x='200' y='145' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>PLOUGH</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='ploughSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%238B4513'/><stop offset='100%' stop-color='%23654321'/></linearGradient></defs><rect fill='%23F5DEB3' width='400' height='300'/><rect fill='url(%23ploughSide)' x='80' y='130' width='240' height='35' rx='5'/><g fill='%23333'><path d='M120,165 L120,200 L135,210 L140,190 Z'/><path d='M180,165 L180,200 L195,210 L200,190 Z'/><path d='M240,165 L240,200 L255,210 L260,190 Z'/></g><rect fill='%23FFD700' x='90' y='110' width='220' height='25' rx='8'/><circle fill='%23666' cx='110' cy='122' r='6'/><circle fill='%23666' cx='290' cy='122' r='6'/><g fill='%23A0522D'><rect x='125' y='185' width='12' height='25' rx='2'/><rect x='185' y='185' width='12' height='25' rx='2'/><rect x='245' y='185' width='12' height='25' rx='2'/></g><line stroke='%23333' stroke-width='2' x1='100' y1='140' x2='300' y2='140'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='rotavatorGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23FF4500'/><stop offset='100%' stop-color='%23DC143C'/></linearGradient></defs><rect fill='%23FFE4B5' width='400' height='300'/><rect fill='url(%23rotavatorGrad)' x='40' y='110' width='320' height='70' rx='10'/><g fill='%23333'><circle cx='80' cy='200' r='12'/><circle cx='120' cy='200' r='12'/><circle cx='160' cy='200' r='12'/><circle cx='200' cy='200' r='12'/><circle cx='240' cy='200' r='12'/><circle cx='280' cy='200' r='12'/><circle cx='320' cy='200' r='12'/></g><g fill='%23666'><rect x='70' y='185' width='20' height='30' rx='10'/><rect x='110' y='185' width='20' height='30' rx='10'/><rect x='150' y='185' width='20' height='30' rx='10'/><rect x='190' y='185' width='20' height='30' rx='10'/><rect x='230' y='185' width='20' height='30' rx='10'/><rect x='270' y='185' width='20' height='30' rx='10'/><rect x='310' y='185' width='20' height='30' rx='10'/></g><circle fill='%23333' cx='70' cy='240' r='20' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='330' cy='240' r='20' stroke='%23666' stroke-width='2'/><rect fill='%23FFD700' x='50' y='90' width='300' height='25' rx='8'/><text x='200' y='150' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>ROTAVATOR</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='thresherGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23B8860B'/><stop offset='100%' stop-color='%23DAA520'/></linearGradient></defs><rect fill='%23FFFACD' width='400' height='300'/><rect fill='url(%23thresherGrad)' x='30' y='90' width='340' height='120' rx='12'/><circle fill='%23333' cx='80' cy='240' r='25' stroke='%23666' stroke-width='3'/><circle fill='%23333' cx='320' cy='240' r='25' stroke='%23666' stroke-width='3'/><circle fill='%23555' cx='80' cy='240' r='15'/><circle fill='%23555' cx='320' cy='240' r='15'/><rect fill='%23FFD700' x='40' y='70' width='320' height='25' rx='8'/><circle fill='%23CD853F' cx='200' cy='120' r='30' stroke='%238B4513' stroke-width='3'/><g fill='%238B4513' stroke='%238B4513' stroke-width='2'><line x1='185' y1='105' x2='215' y2='135'/><line x1='215' y1='105' x2='185' y2='135'/><line x1='200' y1='90' x2='200' y2='150'/><line x1='170' y1='120' x2='230' y2='120'/></g><rect fill='%23FF6347' x='250' y='110' width='80' height='40' rx='8'/><rect fill='%23228B22' x='70' y='110' width='80' height='40' rx='8'/><g fill='%238B4513' opacity='0.7'><rect x='60' y='170' width='20' height='30'/><rect x='100' y='170' width='20' height='30'/><rect x='140' y='170' width='20' height='30'/><rect x='180' y='170' width='20' height='30'/><rect x='220' y='170' width='20' height='30'/><rect x='260' y='170' width='20' height='30'/><rect x='300' y='170' width='20' height='30'/></g><text x='200' y='140' text-anchor='middle' fill='white' font-size='12' font-weight='bold'>THRESHER</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='thresherSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23B8860B'/><stop offset='100%' stop-color='%23DAA520'/></linearGradient></defs><rect fill='%23FFF8DC' width='400' height='300'/><rect fill='url(%23thresherSide)' x='50' y='110' width='300' height='80' rx='10'/><circle fill='%23333' cx='100' cy='230' r='22' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='300' cy='230' r='22' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='100' cy='230' r='13'/><circle fill='%23555' cx='300' cy='230' r='13'/><rect fill='%23FFD700' x='60' y='90' width='280' height='25' rx='8'/><rect fill='%23CD853F' x='180' y='120' width='40' height='60' rx='5'/><rect fill='%23FF6347' x='250' y='130' width='60' height='30' rx='5'/><rect fill='%23228B22' x='90' y='130' width='60' height='30' rx='5'/><g fill='%238B4513' opacity='0.6'><rect x='80' y='190' width='15' height='25'/><rect x='110' y='190' width='15' height='25'/><rect x='140' y='190' width='15' height='25'/><rect x='170' y='190' width='15' height='25'/><rect x='200' y='190' width='15' height='25'/><rect x='230' y='190' width='15' height='25'/><rect x='260' y='190' width='15' height='25'/><rect x='290' y='190' width='15' height='25'/></g><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='sprayerGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%234169E1'/><stop offset='100%' stop-color='%231E90FF'/></linearGradient></defs><rect fill='%23E6F3FF' width='400' height='300'/><rect fill='url(%23sprayerGrad)' x='50' y='120' width='300' height='80' rx='40'/><circle fill='%23333' cx='100' cy='240' r='20' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='300' cy='240' r='20' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='100' cy='240' r='12'/><circle fill='%23555' cx='300' cy='240' r='12'/><rect fill='%23FFD700' x='60' y='100' width='280' height='25' rx='8'/><rect fill='%23FFA500' x='180' y='130' width='40' height='50' rx='5'/><g stroke='%2332CD32' stroke-width='3' fill='none'><line x1='80' y1='80' x2='320' y2='80'/><line x1='90' y1='80' x2='90' y2='60'/><line x1='120' y1='80' x2='120' y2='60'/><line x1='150' y1='80' x2='150' y2='60'/><line x1='180' y1='80' x2='180' y2='60'/><line x1='210' y1='80' x2='210' y2='60'/><line x1='240' y1='80' x2='240' y2='60'/><line x1='270' y1='80' x2='270' y2='60'/><line x1='300' y1='80' x2='300' y2='60'/><line x1='310' y1='80' x2='310' y2='60'/></g><g fill='%2332CD32' opacity='0.6'><circle cx='90' cy='55' r='3'/><circle cx='120' cy='55' r='3'/><circle cx='150' cy='55' r='3'/><circle cx='180' cy='55' r='3'/><circle cx='210' cy='55' r='3'/><circle cx='240' cy='55' r='3'/><circle cx='270' cy='55' r='3'/><circle cx='300' cy='55' r='3'/><circle cx='310' cy='55' r='3'/></g><text x='200' y='165' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>SPRAYER</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='sprayerSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%234169E1'/><stop offset='100%' stop-color='%231E90FF'/></linearGradient></defs><rect fill='%23F0F8FF' width='400' height='300'/><ellipse fill='url(%23sprayerSide)' cx='200' cy='150' rx='150' ry='40'/><circle fill='%23333' cx='120' cy='230' r='18' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='280' cy='230' r='18' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='120' cy='230' r='11'/><circle fill='%23555' cx='280' cy='230' r='11'/><rect fill='%23FFD700' x='70' y='90' width='260' height='20' rx='10'/><rect fill='%23FFA500' x='180' y='120' width='40' height='40' rx='5'/><g stroke='%2332CD32' stroke-width='2' fill='none'><line x1='100' y1='70' x2='300' y2='70'/><g opacity='0.8'><line x1='120' y1='70' x2='120' y2='50'/><line x1='150' y1='70' x2='150' y2='45'/><line x1='180' y1='70' x2='180' y2='50'/><line x1='210' y1='70' x2='210' y2='45'/><line x1='240' y1='70' x2='240' y2='50'/><line x1='270' y1='70' x2='270' y2='45'/></g></g><g fill='%2332CD32' opacity='0.5'><circle cx='120' cy='45' r='2'/><circle cx='150' cy='40' r='2'/><circle cx='180' cy='45' r='2'/><circle cx='210' cy='40' r='2'/><circle cx='240' cy='45' r='2'/><circle cx='270' cy='40' r='2'/></g><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='harrowGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23696969'/><stop offset='100%' stop-color='%232F4F4F'/></linearGradient></defs><rect fill='%23D3D3D3' width='400' height='300'/><rect fill='url(%23harrowGrad)' x='40' y='100' width='320' height='60' rx='8'/><g fill='%23333' stroke='%23000' stroke-width='2'><circle cx='80' cy='190' r='25'/><circle cx='120' cy='190' r='25'/><circle cx='160' cy='190' r='25'/><circle cx='200' cy='190' r='25'/><circle cx='240' cy='190' r='25'/><circle cx='280' cy='190' r='25'/><circle cx='320' cy='190' r='25'/></g><g fill='%23808080'><circle cx='80' cy='190' r='15'/><circle cx='120' cy='190' r='15'/><circle cx='160' cy='190' r='15'/><circle cx='200' cy='190' r='15'/><circle cx='240' cy='190' r='15'/><circle cx='280' cy='190' r='15'/><circle cx='320' cy='190' r='15'/></g><g fill='%23000' opacity='0.3'><path d='M75,185 Q80,190 85,185 Q80,195 75,190 Z'/><path d='M115,185 Q120,190 125,185 Q120,195 115,190 Z'/><path d='M155,185 Q160,190 165,185 Q160,195 155,190 Z'/><path d='M195,185 Q200,190 205,185 Q200,195 195,190 Z'/><path d='M235,185 Q240,190 245,185 Q240,195 235,190 Z'/><path d='M275,185 Q280,190 285,185 Q280,195 275,190 Z'/><path d='M315,185 Q320,190 325,185 Q320,195 315,190 Z'/></g><circle fill='%23333' cx='80' cy='240' r='18' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='320' cy='240' r='18' stroke='%23666' stroke-width='2'/><rect fill='%23FFD700' x='50' y='80' width='300' height='25' rx='8'/><text x='200' y='135' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>DISC HARROW</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='harrowSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23696969'/><stop offset='100%' stop-color='%232F4F4F'/></linearGradient></defs><rect fill='%23F5F5F5' width='400' height='300'/><rect fill='url(%23harrowSide)' x='60' y='120' width='280' height='50' rx='8'/><g fill='%23333' stroke='%23000' stroke-width='2'><circle cx='100' cy='200' r='20'/><circle cx='140' cy='200' r='20'/><circle cx='180' cy='200' r='20'/><circle cx='220' cy='200' r='20'/><circle cx='260' cy='200' r='20'/><circle cx='300' cy='200' r='20'/></g><g fill='%23808080'><circle cx='100' cy='200' r='12'/><circle cx='140' cy='200' r='12'/><circle cx='180' cy='200' r='12'/><circle cx='220' cy='200' r='12'/><circle cx='260' cy='200' r='12'/><circle cx='300' cy='200' r='12'/></g><circle fill='%23333' cx='100' cy='240' r='15' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='300' cy='240' r='15' stroke='%23666' stroke-width='2'/><rect fill='%23FFD700' x='70' y='100' width='260' height='25' rx='8'/><rect fill='%23FFA500' x='180' y='130' width='40' height='30' rx='5'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
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
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='pumpGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%230080FF'/><stop offset='100%' stop-color='%230066CC'/></linearGradient></defs><rect fill='%23E6F2FF' width='400' height='300'/><rect fill='url(%23pumpGrad)' x='80' y='120' width='240' height='80' rx='15'/><circle fill='%23333' cx='120' cy='240' r='20' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='280' cy='240' r='20' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='120' cy='240' r='12'/><circle fill='%23555' cx='280' cy='240' r='12'/><rect fill='%23FFD700' x='90' y='100' width='220' height='25' rx='8'/><circle fill='%2300BFFF' cx='200' cy='160' r='30' stroke='%230080FF' stroke-width='3'/><g fill='%230066CC'><path d='M185,145 Q200,150 215,145 Q200,175 185,170 Q200,165 215,170 Q200,140 185,145'/></g><rect fill='%23FF6347' x='250' y='140' width='50' height='40' rx='8'/><rect fill='%2332CD32' x='100' y='140' width='50' height='40' rx='8'/><g stroke='%2300BFFF' stroke-width='4' fill='none' opacity='0.7'><path d='M50,80 Q70,70 90,80'/><path d='M310,80 Q330,70 350,80'/><path d='M50,90 Q70,80 90,90'/><path d='M310,90 Q330,80 350,90'/></g><text x='200' y='170' text-anchor='middle' fill='white' font-size='12' font-weight='bold'>PUMP</text><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Main View</text></svg>",
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='pumpSide' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%230080FF'/><stop offset='100%' stop-color='%230066CC'/></linearGradient></defs><rect fill='%23F0F8FF' width='400' height='300'/><rect fill='url(%23pumpSide)' x='100' y='130' width='200' height='60' rx='12'/><circle fill='%23333' cx='130' cy='230' r='18' stroke='%23666' stroke-width='2'/><circle fill='%23333' cx='270' cy='230' r='18' stroke='%23666' stroke-width='2'/><circle fill='%23555' cx='130' cy='230' r='11'/><circle fill='%23555' cx='270' cy='230' r='11'/><rect fill='%23FFD700' x='110' y='110' width='180' height='25' rx='8'/><circle fill='%2300BFFF' cx='200' cy='160' r='25' stroke='%230080FF' stroke-width='2'/><rect fill='%23FF6347' x='230' y='145' width='40' height='30' rx='5'/><rect fill='%2332CD32' x='130' y='145' width='40' height='30' rx='5'/><g stroke='%2300BFFF' stroke-width='3' fill='none' opacity='0.6'><path d='M80,90 Q90,80 100,90'/><path d='M300,90 Q310,80 320,90'/></g><path fill='%230066CC' d='M190,150 Q200,155 210,150 Q200,170 190,165 Q200,160 210,165 Q200,145 190,150'/><text x='200' y='280' text-anchor='middle' fill='%23333' font-size='14' font-weight='bold'>Side View</text></svg>"
        ]
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

// Equipment Management
function updateEquipmentGrid() {
    const homeGrid = document.getElementById('equipmentGrid');
    const allGrid = document.getElementById('allEquipmentGrid');
    
    if (homeGrid) {
        homeGrid.innerHTML = createEquipmentCards(filteredEquipment.slice(0, 3));
    }
    if (allGrid) {
        allGrid.innerHTML = createEquipmentCards(filteredEquipment);
    }
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
                ${item.images.map((img, index) => `
                    <img src="${img}" alt="${getItemName(item)}" class="${index === 0 ? 'active' : ''}" />
                `).join('')}
                ${item.images.length > 1 ? `
                    <button class="slider-nav slider-prev" onclick="changeSlide(${item.id}, -1)">‹</button>
                    <button class="slider-nav slider-next" onclick="changeSlide(${item.id}, 1)">›</button>
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
                <div style="margin-top: 1rem;">
                    <small><strong>${getTranslation('Year', 'वर्ष', 'वर्ष')}:</strong> ${item.year}</small><br>
                    <small><strong>${getTranslation('Owner', 'मालिक', 'मालक')}:</strong> ${item.owner}</small>
                </div>
                <button class="btn btn-primary" onclick="bookEquipment(${item.id})" ${!item.available ? 'disabled' : ''} style="margin-top: 1rem; width: 100%;">
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

// Image Slider
function changeSlide(equipmentId, direction) {
    const slider = document.getElementById(`slider-${equipmentId}`);
    if (!slider) return;

    const images = slider.querySelectorAll('img');
    if (images.length <= 1) return;

    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentIndex].classList.remove('active');
    currentIndex += direction;
    
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    
    images[currentIndex].classList.add('active');
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
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
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
    
    // Simulate login
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
    
    // Simulate registration
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
    const tax = subtotal * 0.18; // 18% GST
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
    
    // Reset form
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
        const matchesAvailability = item.available; // Only show available equipment in search
        
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
    
    // Sort equipment
    filteredEquipment.sort((a, b) => {
        switch (sortBy) {
            case 'price':
                return a.price - b.price;
            case 'availability':
                return b.available - a.available;
            default: // name
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
    
    // In a real app, this would send data to a server
    closeModal('addEquipmentModal');
    showNotification(getTranslation('Equipment added successfully!', 'उपकरण सफलतापूर्वक जोड़ा गया!', 'उपकरण यशस्वीरित्या जोडले!'), 'success');
    
    // Reset form
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
    
    // Auto remove after 5 seconds
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
    
    // Reset filter controls
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) categoryFilter.value = '';
    if (sortFilter) sortFilter.value = 'name';
}