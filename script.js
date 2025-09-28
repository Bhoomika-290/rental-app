// Global Variables
let currentLanguage = 'en';
let currentUser = null;
let currentEquipment = null;
let equipmentData = [];
let filteredEquipment = [];
let sliderTimers = new Map(); // Store timers for each slider
let navigationHistory = []; // Store navigation history

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
        description: "Premium 50 HP John Deere tractor ideal for medium to large-scale farming operations. Features 4-wheel drive, power steering, hydraulic lift system, and comfortable operator cabin. Perfect for plowing, cultivating, seeding, and harvesting operations.Fuel efficient with excellent performance in all field conditions.",
        descriptionHi: "मध्यम से बड़े पैमाने की खेती के संचालन के लिए आदर्श प्रीमियम 50 एचपी जॉन डीयर ट्रैक्टर। इसमें 4-व्हील ड्राइव, पावर स्टीयरिंग, हाइड्रोलिक लिफ्ट सिस्टम और आरामदायक ऑपरेटर केबिन है। जुताई, कल्टीवेशन, बुआई और हार्वेस्टिंग ऑपरेशन के लिए बिल्कुल सही।सभी क्षेत्रीय स्थितियों में उत्कृष्ट प्रदर्शन के साथ ईंधन कुशल।",
        descriptionMr: "मध्यम ते मोठ्या प्रमाणावरील शेती कामांसाठी आदर्श प्रीमियम 50 एचपी जॉन डिअर ट्रॅक्टर. यामध्ये 4-व्हील ड्राइव्ह, पॉवर स्टीयरिंग, हायड्रॉलिक लिफ्ट सिस्टम आणि आरामदायक ऑपरेटर केबिन आहे. नांगरणी, कल्टिव्हेशन, पेरणी आणि कापणी कामांसाठी परिपूर्ण. सर्व शेतातील परिस्थितींमध्ये उत्कृष्ट कामगिरीसह इंधन कार्यक्षम.",
        available: true,
        year: 2020,
        owner: "Rahul Sharma",
        ownerPhone: "+91 98765 11111",
        specifications: "50 HP, 4WD, Power Steering",
        images: [
            "https://www.deere.co.in/assets/images/region-1/products/tractors/e-series-tractors/john-deere-india-trem-4-5310-left-angle.png",
            "https://www.91tractors.com/_next/image?url=https:%2F%2Fimages.91trucks.com%2Ftractors%2Fmodels%2F31%2F480%2Fjohn-deere-5310-gearpro-983528694.jpg%3Fw%3D640%26v%3D1235&w=640&q=75",
            "https://www.deere.co.in/assets/images/region-1/products/tractors/e-series-tractors/john-deere-india-trem%204-5310-front.png",
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
        description: "High-performance Mahindra harvester designed for efficient harvesting of wheat, rice, and other cereal crops.Self-propelled with powerful 120 HP engine and 4-meter cutting width for maximum productivity. Equipped with modern technology for minimal grain loss and superior grain quality. Ideal for custom harvesting services and large farm operations.",
        descriptionHi: "गेहूं, चावल और अन्य अनाज फसलों की कुशल कटाई के लिए डिज़ाइन किया गया उच्च प्रदर्शन महिंद्रा कंबाइन हार्वेस्टर।अधिकतम उत्पादकता के लिए शक्तिशाली 120 एचपी इंजन और 4-मीटर कटिंग चौड़ाई के साथ स्व-चालित। न्यूनतम अनाज हानि और बेहतर अनाज गुणवत्ता के लिए आधुनिक तकनीक से लैस। कस्टम हार्वेस्टिंग सेवाओं और बड़े फार्म संचालन के लिए आदर्श।",
        descriptionMr: "गहू, भात आणि इतर धान्य पिकांच्या कार्यक्षम कापणीसाठी डिझाइन केलेले उच्च-कामगिरी महिंद्रा कंबाइन हार्वेस्टर.जास्तीत जास्त उत्पादकतेसाठी शक्तिशाली 120 एचपी इंजिन आणि 4-मीटर कटिंग रुंदी असलेले स्वयं-चालित. कमीत कमी धान्य नुकसान आणि उत्कृष्ट धान्य गुणवत्तेसाठी आधुनिक तंत्रज्ञानाने सुसज्ज. सानुकूल कापणी सेवा आणि मोठ्या शेत कामांसाठी आदर्श.",
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
         description: "Professional-grade 9-tine cultivator set perfect for secondary tillage and soil preparation. Features heavy-duty construction with spring-loaded tines for consistent soil penetration and weed control. Adjustable working depth from 4-8 inches ensures optimal soil mixing and residue incorporation. Robust frame design withstands tough field conditions. Essential for seedbed preparation, inter-cultivation, and post-harvest stubble management. Compatible with 35-50 HP tractors.",
        descriptionHi: "द्वितीयक जुताई और मिट्टी की तैयारी के लिए उत्तम व्यावसायिक ग्रेड 9-टाइन कल्टीवेटर सेट। निरंतर मिट्टी की पैठ और खरपतवार नियंत्रण के लिए स्प्रिंग-लोडेड टाइन्स के साथ हेवी-ड्यूटी निर्माण। 4-8 इंच से समायोज्य कार्य गहराई इष्टतम मिट्टी मिश्रण और अवशेष निगमन सुनिश्चित करती है। मजबूत फ्रेम डिज़ाइन कठिन क्षेत्रीय स्थितियों का सामना करता है। सीडबेड तैयारी, अंतर-खेती, और कटाई के बाद पराली प्रबंधन के लिए आवश्यक। 35-50 एचपी ट्रैक्टर के साथ संगत।",
        descriptionMr: "द्वितीयक कसणी आणि माती तयारीसाठी उत्तम व्यावसायिक दर्जाचा 9-टाइन कल्टिव्हेटर सेट. सातत्यपूर्ण माती भेदन आणि तण नियंत्रणासाठी स्प्रिंग-लोडेड टाइन्ससह हेवी-ड्यूटी बांधकाम. 4-8 इंच पासून समायोजित कार्य खोली इष्टतम माती मिश्रण आणि अवशेष समावेश सुनिश्चित करते. मजबूत चौकट डिझाइन कठीण शेत परिस्थिती सहन करते. बियाणे बिछान तयारी, आंतर-शेती आणि कापणी नंतरच्या काडीचे व्यवस्थापनासाठी आवश्यक. 35-50 एचपी ट्रॅक्टरशी सुसंगत.",
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
        description: "Advanced precision seeder machine designed for accurate seed placement and optimal plant population. Features 6-row configuration with individual seed metering units for consistent seed spacing and depth control. Adjustable seed rate settings accommodate various crop types including wheat, soy, corn, and pulses. Ground-driven mechanism ensures precise seed delivery regardless of tractor speed.",
        descriptionHi: "सटीक बीज रखने और इष्टतम पौधे की जनसंख्या के लिए डिज़ाइन की गई उन्नत सटीक सीडर मशीन। निरंतर बीज स्पेसिंग और गहराई नियंत्रण के लिए व्यक्तिगत सीड मीटरिंग इकाइयों के साथ 6-रो कॉन्फ़िगरेशन। समायोज्य सीड रेट सेटिंग्स गेहूं, सोया, मक्का और दालों सहित विभिन्न फसल प्रकारों को समायोजित करती हैं। भूमि-संचालित तंत्र ट्रैक्टर की गति की परवाह किए बिना सटीक बीज वितरण सुनिश्चित करता है।",
        descriptionMr: "अचूक बीज लावणी आणि इष्टतम वनस्पती लोकसंख्यासाठी डिझाइन केलेले प्रगत अचूक सीडर यंत्र. सातत्यपूर्ण बीज अंतर आणि खोली नियंत्रणासाठी वैयक्तिक बीज मापन युनिट्ससह 6-रो कॉन्फिगरेशन. समायोजित बीज दर सेटिंग्स गहू, सोया, मका आणि डाळींसह विविध पीक प्रकारांना सामावून घेतात. जमीन-चालित यंत्रणा ट्रॅक्टर वेगाची पर्वा न करता अचूक बीज वितरण सुनिश्चित करते.",
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
        description: "Heavy-duty 3-bottom reversible plough set designed for primary tillage and field preparation. Features high-quality moldboards with excellent soil inversion capabilities for effective weed and residue burial. Adjustable working width from 12-15 inches per bottom allows customization for different soil conditions. Hydraulic reset system protects against hidden obstacles. Ideal for breaking hard pan, deep plowing operations, and creating proper seedbed foundation. Suitable for all soil types including clay and loamy soils.",
        descriptionHi: "प्राथमिक जुताई और खेत की तैयारी के लिए डिज़ाइन किया गया हेवी-ड्यूटी 3-बॉटम रिवर्सिबल हल सेट। प्रभावी खरपतवार और अवशेष दफन के लिए उत्कृष्ट मिट्टी पलटने की क्षमताओं के साथ उच्च गुणवत्ता वाले मोल्डबोर्ड। प्रति तल 12-15 इंच से समायोज्य कार्य चौड़ाई विभिन्न मिट्टी की स्थितियों के लिए अनुकूलन की अनुमति देती है। हाइड्रोलिक रीसेट सिस्टम छिपी हुई बाधाओं से सुरक्षा प्रदान करता है। हार्ड पैन तोड़ने, गहरी जुताई संचालन और उचित सीडबेड नींव बनाने के लिए आदर्श। मिट्टी और दोमट मिट्टी सहित सभी मिट्टी प्रकारों के लिए उपयुक्त।",
        descriptionMr: "प्राथमिक कसणी आणि शेत तयारीसाठी डिझाइन केलेला हेवी-ड्यूटी 3-बॉटम रिव्हर्सिबल नांगर सेट. प्रभावी तण आणि अवशेष दफनासाठी उत्कृष्ट माती उलटण्याची क्षमता असलेल्या उच्च गुणवत्तेचे मोल्डबोर्ड. प्रत्येक तळाला 12-15 इंच पासून समायोजित कार्य रुंदी वेगवेगळ्या माती परिस्थितींसाठी अनुकूलन करण्याची परवानगी देते. हायड्रॉलिक रीसेट सिस्टम लपलेल्या अडथळ्यांपासून संरक्षण देते. हार्ड पॅन तोडण्यासाठी, खोल नांगरणी कामे आणि योग्य बियाणे बिछानाचा पाया तयार करण्यासाठी आदर्श. चिकणमाती आणि चिकणमाती मातीसह सर्व माती प्रकारांसाठी योग्य.",
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
        description: "Professional-grade rotavator machine with 6-foot working width designed for intensive soil preparation and seedbed creation. Features heavy-duty rotor assembly with specially designed L-shaped blades for superior soil pulverization and mixing. PTO-driven mechanism ensures consistent power delivery and optimal performance. Adjustable depth control allows operation from 2-8 inches deep. Excellent for incorporating crop residues, preparing fine seedbed, and eliminating compaction layers. Built with reinforced gearbox and durable construction for extended field life.",
        descriptionHi: "गहन मिट्टी की तैयारी और सीडबेड निर्माण के लिए डिज़ाइन की गई 6-फुट कार्य चौड़ाई वाली व्यावसायिक ग्रेड रोटावेटर मशीन। बेहतर मिट्टी चूर्णीकरण और मिश्रण के लिए विशेष रूप से डिज़ाइन किए गए L-आकार के ब्लेड के साथ हेवी-ड्यूटी रोटर असेंबली। पीटीओ-संचालित तंत्र निरंतर बिजली वितरण और इष्टतम प्रदर्शन सुनिश्चित करता है। समायोज्य गहराई नियंत्रण 2-8 इंच गहरे तक संचालन की अनुमति देता है। फसल अवशेषों को शामिल करने, बेहतरीन सीडबेड तैयार करने, और संघनन परतों को समाप्त करने के लिए उत्कृष्ट। विस्तारित क्षेत्रीय जीवन के लिए प्रबलित गियरबॉक्स और टिकाऊ निर्माण के साथ निर्मित।",
        descriptionMr: "गहन माती तयारी आणि बियाणे बिछान निर्मितीसाठी डिझाइन केलेले 6-फूट कार्य रुंदी असलेले व्यावसायिक दर्जाचे रोटावेटर यंत्र. उत्कृष्ट माती चूर्णीकरण आणि मिश्रणासाठी विशेष डिझाइन केलेल्या L-आकाराच्या ब्लेडसह हेवी-ड्यूटी रोटर असेंबली. पीटीओ-चालित यंत्रणा सातत्यपूर्ण शक्ती वितरण आणि इष्टतम कामगिरी सुनिश्चित करते. समायोजित खोली नियंत्रण 2-8 इंच खोलपर्यंत ऑपरेशन करण्याची परवानगी देते. पीक अवशेष समाविष्ट करण्यासाठी, उत्तम बियाणे बिछाना तयार करण्यासाठी आणि संकुचित स्तर काढून टाकण्यासाठी उत्कृष्ट. विस्तारित शेत जीवनासाठी मजबूत गिअरबॉक्स आणि टिकाऊ बांधकामासह बनवलेले.",
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
        description: "High-capacity multi-crop threshing machine designed for efficient grain separation from wheat, rice, corn, soybean, and other cereals. Features powerful 15 HP motor with 1200 kg/hour processing capacity for maximum productivity. Advanced concave and cylinder system ensures minimal grain damage while achieving excellent separation efficiency. Equipped with multi-stage cleaning system including sieves and air blower for superior grain quality. Easy operation with adjustable feed rate and clearance settings. Ideal for custom threshing services and medium to large farming operations.",
        descriptionHi: "गेहूं, चावल, मक्का, सोयाबीन और अन्य अनाजों से कुशल अनाज अलगाव के लिए डिज़ाइन की गई उच्च क्षमता बहु-फसल थ्रेसिंग मशीन। अधिकतम उत्पादकता के लिए 1200 किग्रा/घंटा प्रसंस्करण क्षमता के साथ शक्तिशाली 15 एचपी मोटर। उन्नत कॉन्केव और सिलेंडर सिस्टम उत्कृष्ट पृथक्करण दक्षता प्राप्त करते हुए न्यूनतम अनाज क्षति सुनिश्चित करता है। बेहतर अनाज गुणवत्ता के लिए छलनी और एयर ब्लोअर सहित बहु-चरण सफाई प्रणाली से सुसज्जित। समायोज्य फ़ीड दर और क्लीयरेंस सेटिंग्स के साथ आसान संचालन। कस्टम थ्रेसिंग सेवाओं और मध्यम से बड़े खेती संचालन के लिए आदर्श।",
        descriptionMr: "गहू, भात, मका, सोयाबीन आणि इतर धान्यांपासून कार्यक्षम धान्य विभाजनासाठी डिझाइन केलेले उच्च-क्षमता बहु-पीक मळणी यंत्र. जास्तीत जास्त उत्पादकतेसाठी 1200 किग्रॅ/तास प्रक्रिया क्षमतेसह शक्तिशाली 15 एचपी मोटर. प्रगत कॉन्केव्ह आणि सिलिंडर सिस्टम उत्कृष्ट विभाजन कार्यक्षमता साध्य करताना कमीत कमी धान्य नुकसान सुनिश्चित करते. उत्कृष्ट धान्य गुणवत्तेसाठी चाळणी आणि एअ",
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
        description: "Professional agricultural sprayer system with 500-liter tank capacity designed for precise pesticide, herbicide, and fertilizer application. Features high-pressure pumping system delivering 40 liters per minute flow rate for efficient coverage. Equipped with 12-meter boom width for wide-area application, reducing field passes and saving time. Advanced nozzle configuration ensures uniform spray pattern and droplet size for optimal chemical effectiveness. Includes pressure gauge, flow control valve, and agitation system for consistent mixture. Perfect for crop protection and nutrient management programs.",
        descriptionHi: "सटीक कीटनाशक, शाकनाशी और उर्वरक प्रयोग के लिए डिज़ाइन किया गया 500-लीटर टैंक क्षमता वाला व्यावसायिक कृषि स्प्रेयर सिस्टम। कुशल कवरेज के लिए 40 लीटर प्रति मिनट प्रवाह दर प्रदान करने वाली उच्च दबाव पंपिंग प्रणाली। व्यापक क्षेत्र अनुप्रयोग के लिए 12-मीटर बूम चौड़ाई से सुसज्जित, क्षेत्र पास कम करता है और समय बचाता है। उन्नत नोज़ल कॉन्फ़िगरेशन इष्टतम रासायनिक प्रभावशीलता के लिए एक समान स्प्रे पैटर्न और बूंद आकार सुनिश्चित करता है। निरंतर मिश्रण के लिए दबाव गेज, प्रवाह नियंत्रण वाल्व और आंदोलन प्रणाली शामिल है। फसल संरक्षण और पोषक तत्व प्रबंधन कार्यक्रमों के लिए बिल्कुल सही।",
         descriptionMr: "अचूक कीटकनाशक, तणनाशक आणि खत वापरण्यासाठी डिझाइन केलेली 500-लिटर टाकी क्षमता असलेली व्यावसायिक कृषी फवारणी प्रणाली. कार्यक्षम कव्हरेजसाठी 40 लिटर प्रति मिनिट प्रवाह दर पुरवणारी उच्च दाब पंपिंग प्रणाली. व्यापक क्षेत्र अनुप्रयोगासाठी 12-मीटर बूम रुंदीने सुसज्ज, शेत पास कमी करते आणि वेळ वाचवते. प्रगत नॉझल कॉन्फिगरेशन इष्टतम रासायनिक प्रभावशीलतेसाठी एकसमान स्प्रे पॅटर्न आणि थेंब आकार सुनिश्चित करते. सातत्यपूर्ण मिश्रणासाठी दाब गेज, प्रवाह नियंत्रण व्हाल्व्ह आणि आंदोलन प्रणाली समाविष्ट आहे. पीक संरक्षण आणि पोषक तत्व व्यवस्थापन कार्यक्रमांसाठी परिपूर्ण.",
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
        description: "Professional heavy-duty 20-disc harrow with 7-foot working width designed for breaking up compacted soil and crop residue management. Features high-quality heat-treated disc blades with sharp cutting edges for superior soil penetration and mixing. Hydraulic lift system provides easy transport and precise depth control from 4-10 inches. Gang angle adjustment allows customization for different soil conditions and residue levels. Excellent for stubble breaking, seedbed preparation, and incorporating organic matter. Reinforced frame construction ensures long-lasting durability in tough field conditions.",
        descriptionHi: "कॉम्पैक्ट मिट्टी तोड़ने और फसल अवशेष प्रबंधन के लिए डिज़ाइन किया गया 7-फुट कार्य चौड़ाई वाला व्यावसायिक हेवी-ड्यूटी 20-डिस्क हैरो। बेहतर मिट्टी की पैठ और मिश्रण के लिए तीखारे कटिंग किनारों के साथ उच्च गुणवत्ता वाले गर्मी-उपचारित डिस्क ब्लेड। हाइड्रोलिक लिफ्ट सिस्टम आसान परिवहन और 4-10 इंच से सटीक गहराई नियंत्रण प्रदान करता है। गैंग एंगल समायोजन विभिन्न मिट्टी की स्थितियों और अवशेष स्तरों के लिए अनुकूलन की अनुमति देता है। पराली तोड़ने, सीडबेड तैयारी और जैविक पदार्थ शामिल करने के लिए उत्कृष्ट। प्रबलित फ्रेम निर्माण कठिन क्षेत्रीय परिस्थितियों में लंबे समय तक चलने वाली स्थायित्व सुनिश्चित करता है।",
        descriptionMr: "संकुचित माती फोडण्यासाठी आणि पीक अवशेष व्यवस्थापनासाठी डिझाइन केलेले 7-फूट कार्य रुंदी असलेले व्यावसायिक हेवी-ड्यूटी 20-डिस्क हेरो. उत्कृष्ट माती भेदन आणि मिश्रणासाठी धारदार कटिंग कडा असलेल्या उच्च गुणवत्तेच्या उष्णता-उपचारित डिस्क ब्लेड. हायड्रॉलिक लिफ्ट सिस्टम सोपी वाहतूक आणि 4-10 इंच पासून अचूक खोली नियंत्रण प्रदान करते. गँग अँगल समायोजन वेगवेगळ्या माती परिस्थिती आणि अवशेष स्तरांसाठी अनुकूलन करण्याची परवानगी देते. काडी फोडण्यासाठी, बियाणे बिछाना तयारी आणि सेंद्रिय पदार्थ समाविष्ट करण्यासाठी उत्कृष्ट. मजबूत चौकट बांधकाम कठीण शेत परिस्थितींमध्ये दीर्घकाळ टिकणारी स्थायित्व सुनिश्चित करते.",
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
        description: "Industrial-grade centrifugal water pump set with 5 HP motor designed for high-capacity irrigation and water transfer applications. Features self-priming capability with automatic suction lift up to 25 feet, eliminating the need for manual priming. Delivers impressive 1000 gallons per hour flow rate for efficient field irrigation. Corrosion-resistant impeller and volute casing ensure long service life in agricultural environments. Equipped with thermal overload protection and mechanical seals for reliable operation. Perfect for crop irrigation, livestock watering, drainage, and emergency water supply needs.",
         descriptionHi: "उच्च क्षमता सिंचाई और जल स्थानांतरण अनुप्रयोगों के लिए डिज़ाइन किया गया 5 एचपी मोटर के साथ औद्योगिक ग्रेड केन्द्रापसारक वॉटर पंप सेट। मैन्युअल प्राइमिंग की आवश्यकता को समाप्त करते हुए 25 फीट तक स्वचालित सक्शन लिफ्ट के साथ स्व-प्राइमिंग क्षमता। कुशल क्षेत्र सिंचाई के लिए प्रभावशाली 1000 गैलन प्रति घंटा प्रवाह दर प्रदान करता है। जंग प्रतिरोधी इम्पेलर और वॉल्यूट आवरण कृषि वातावरण में लंबी सेवा जीवन सुनिश्चित करते हैं। विश्वसनीय संचालन के लिए थर्मल ओवरलोड सुरक्षा और यांत्रिक सील से सुसज्जित। फसल सिंचाई, पशुधन पानी, जल निकासी और आपातकालीन जल आपूर्ति आवश्यकताओं के लिए बिल्कुल सही।",
        descriptionMr: "उच्च क्षमता सिंचन आणि पाणी हस्तांतरण अनुप्रयोगांसाठी डिझाइन केलेले 5 एचपी मोटरसह औद्योगिक दर्जाचे केंद्रापसारक पाणी पंप सेट. मॅन्युअल प्राइमिंगची आवश्यकता काढून टाकून 25 फूट पर्यंत स्वयंचलित सक्शन लिफ्टसह स्वयं-प्राइमिंग क्षमता. कार्यक्षम शेत सिंचनासाठी प्रभावशाली 1000 गॅलन प्रति तास प्रवाह दर पुरवते. गंज प्रतिरोधी इंपेलर आणि व्हॉल्यूट आवरण कृषी वातावरणात दीर्घ सेवा आयुष्य सुनिश्चित करते. विश्वसनीय ऑपरेशनसाठी थर्मल ओव्हरलोड संरक्षण आणि यांत्रिक सीलने सुसज्ज. पीक सिंचन, पशुधन पाणी पुरवठा, निचरा आणि आपत्कालीन पाणी पुरवठा गरजांसाठी परिपूर्ण.",
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
    initializeSliders();
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
    
    // Update back button text
    const backButton = document.getElementById('backButton');
    if (backButton) {
        const backText = backButton.getAttribute('data-' + currentLanguage);
        if (backText) {
            backButton.textContent = backText;
        }
    }
    
    // Update dashboard navigation text
    const dashboardNavItem = document.getElementById('dashboardNavItem');
    if (dashboardNavItem) {
        const dashboardLink = dashboardNavItem.querySelector('a');
        if (dashboardLink) {
            const dashboardText = dashboardLink.getAttribute('data-' + currentLanguage);
            if (dashboardText) {
                dashboardLink.textContent = dashboardText;
            }
        }
    }
    
    // Update mobile dashboard button text
    const dashboardMobileBtn = document.querySelector('.dashboard-mobile-btn');
    if (dashboardMobileBtn) {
        const mobileDashboardText = dashboardMobileBtn.getAttribute('data-' + currentLanguage);
        if (mobileDashboardText) {
            dashboardMobileBtn.textContent = mobileDashboardText;
        }
    }
}

// FIXED: Helper function for slider keys
function getSliderKey(equipmentId, pageType) {
    return `${pageType}-${equipmentId}`;
}

// FIXED: Enhanced Equipment Management with Real Images and Page Types
function updateEquipmentGrid() {
    const homeGrid = document.getElementById('equipmentGrid');
    const allGrid = document.getElementById('allEquipmentGrid');
    
    if (homeGrid) {
        homeGrid.innerHTML = createEquipmentCards(filteredEquipment.slice(0, 3), 'home');
    }
    if (allGrid) {
        allGrid.innerHTML = createEquipmentCards(filteredEquipment, 'equipment');
    }
    
    // Initialize lazy loading and sliders after content is added
    setTimeout(() => {
        optimizeImages();
        initializeSliders();
    }, 100);
}

// FIXED: Updated createEquipmentCards function with unique IDs
function createEquipmentCards(equipment, pageType = 'home') {
    if (!equipment || equipment.length === 0) {
        return `<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
            <p>${getTranslation('No equipment found', 'कोई उपकरण नहीं मिला', 'कोणतीही उपकरणे सापडली नाहीत')}</p>
        </div>`;
    }

    return equipment.map(item => {
        // Create unique slider ID based on page type
        const sliderId = `slider-${pageType}-${item.id}`;
        
        return `
        <div class="equipment-card">
            <div class="equipment-slider" id="${sliderId}">
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
                    <button class="slider-nav slider-prev" data-equipment-id="${item.id}" data-page-type="${pageType}" data-direction="-1" aria-label="Previous image">‹</button>
                    <button class="slider-nav slider-next" data-equipment-id="${item.id}" data-page-type="${pageType}" data-direction="1" aria-label="Next image">›</button>
                    <div class="slider-controls">
                        <button class="slider-play-pause" data-equipment-id="${item.id}" data-page-type="${pageType}" aria-label="Pause auto-slide">
                            <span class="pause-icon">⏸</span>
                            <span class="play-icon" style="display: none;">▶</span>
                        </button>
                    </div>
                    <div class="slider-dots">
                        ${item.images.map((_, index) => `
                            <button class="dot ${index === 0 ? 'active' : ''}" 
                                    data-equipment-id="${item.id}" 
                                    data-page-type="${pageType}"
                                    data-slide-index="${index}"
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
    `;
    }).join('');
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

// FIXED: Initialize sliders after DOM is loaded
function initializeSliders() {
    console.log('Initializing sliders...');
    
    // Remove existing event listeners to prevent duplicates
    document.removeEventListener('click', handleSliderClick);
    
    // Add event listeners to all slider navigation buttons
    document.addEventListener('click', handleSliderClick);
    
    // Initialize sliders for home page
    const homeSliders = document.querySelectorAll('#equipmentGrid .equipment-slider');
    console.log(`Found ${homeSliders.length} home sliders`);
    
    homeSliders.forEach(slider => {
        const equipmentId = slider.id.replace('slider-home-', '');
        console.log(`Initializing home slider for equipment ${equipmentId}`);
        if (equipmentId) {
            startAutoSlider(parseInt(equipmentId), 'home');
        }
    });
    
    // Initialize sliders for equipment page
    const equipmentSliders = document.querySelectorAll('#allEquipmentGrid .equipment-slider');
    console.log(`Found ${equipmentSliders.length} equipment page sliders`);
    
    equipmentSliders.forEach(slider => {
        const equipmentId = slider.id.replace('slider-equipment-', '');
        console.log(`Initializing equipment page slider for equipment ${equipmentId}`);
        if (equipmentId) {
            startAutoSlider(parseInt(equipmentId), 'equipment');
        }
    });
}

// FIXED: Start auto-slider for a specific equipment with page type
function startAutoSlider(equipmentId, pageType = 'home') {
    const sliderKey = getSliderKey(equipmentId, pageType);
    const sliderId = `slider-${pageType}-${equipmentId}`;
    
    // Clear existing timer if any
    if (sliderTimers.has(sliderKey)) {
        clearInterval(sliderTimers.get(sliderKey));
    }
    
    const slider = document.getElementById(sliderId);
    if (!slider) {
        console.log(`Slider not found: ${sliderId}`);
        return;
    }
    
    const slides = slider.querySelectorAll('.slide');
    if (slides.length <= 1) return; // Don't auto-slide if only one image
    
    console.log(`Starting auto-slider for ${sliderId}`);
    
    // Start auto-slider with 4-second interval
    const timer = setInterval(() => {
        changeSlide(equipmentId, 1, pageType); // Move to next slide
    }, 4000);
    
    sliderTimers.set(sliderKey, timer);
    
    // Pause auto-slider on hover
    slider.addEventListener('mouseenter', () => {
        if (sliderTimers.has(sliderKey)) {
            clearInterval(sliderTimers.get(sliderKey));
        }
    });
    
    // Resume auto-slider when mouse leaves
    slider.addEventListener('mouseleave', () => {
        startAutoSlider(equipmentId, pageType);
    });
}

// FIXED: Stop auto-slider for a specific equipment with page type
function stopAutoSlider(equipmentId, pageType = 'home') {
    const sliderKey = getSliderKey(equipmentId, pageType);
    if (sliderTimers.has(sliderKey)) {
        clearInterval(sliderTimers.get(sliderKey));
        sliderTimers.delete(sliderKey);
    }
}

// FIXED: Stop all auto-sliders
function stopAllAutoSliders() {
    sliderTimers.forEach((timer, key) => {
        clearInterval(timer);
    });
    sliderTimers.clear();
}

// FIXED: Updated handleSliderClick function
function handleSliderClick(event) {
    if (event.target.classList.contains('slider-prev') || event.target.classList.contains('slider-next')) {
        event.preventDefault();
        const equipmentId = parseInt(event.target.getAttribute('data-equipment-id'));
        const pageType = event.target.getAttribute('data-page-type') || 'home';
        const direction = parseInt(event.target.getAttribute('data-direction'));
        console.log(`Slider navigation clicked: equipment ${equipmentId}, page ${pageType}, direction ${direction}`);
        changeSlide(equipmentId, direction, pageType);
        // Restart auto-slider after manual interaction
        setTimeout(() => startAutoSlider(equipmentId, pageType), 1000);
    }
    
    if (event.target.classList.contains('dot')) {
        event.preventDefault();
        const equipmentId = parseInt(event.target.getAttribute('data-equipment-id'));
        const pageType = event.target.getAttribute('data-page-type') || 'home';
        const slideIndex = parseInt(event.target.getAttribute('data-slide-index'));
        console.log(`Slider dot clicked: equipment ${equipmentId}, page ${pageType}, slide ${slideIndex}`);
        goToSlide(equipmentId, slideIndex, pageType);
        // Restart auto-slider after manual interaction
        setTimeout(() => startAutoSlider(equipmentId, pageType), 1000);
    }
    
    if (event.target.classList.contains('slider-play-pause') || event.target.closest('.slider-play-pause')) {
        event.preventDefault();
        const button = event.target.closest('.slider-play-pause');
        const equipmentId = parseInt(button.getAttribute('data-equipment-id'));
        const pageType = button.getAttribute('data-page-type') || 'home';
        const sliderKey = getSliderKey(equipmentId, pageType);
        const pauseIcon = button.querySelector('.pause-icon');
        const playIcon = button.querySelector('.play-icon');
        
        if (sliderTimers.has(sliderKey)) {
            // Currently playing, pause it
            stopAutoSlider(equipmentId, pageType);
            pauseIcon.style.display = 'none';
            playIcon.style.display = 'inline';
            button.setAttribute('aria-label', 'Resume auto-slide');
        } else {
            // Currently paused, start it
            startAutoSlider(equipmentId, pageType);
            pauseIcon.style.display = 'inline';
            playIcon.style.display = 'none';
            button.setAttribute('aria-label', 'Pause auto-slide');
        }
    }
}

// FIXED: Enhanced Image Slider with Dot Navigation and Page Types
function changeSlide(equipmentId, direction, pageType = 'home') {
    const sliderId = `slider-${pageType}-${equipmentId}`;
    console.log(`changeSlide called: sliderId=${sliderId}, direction=${direction}`);
    
    const slider = document.getElementById(sliderId);
    if (!slider) {
        console.log(`Slider not found for ID: ${sliderId}`);
        return;
    }

    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    console.log(`Found ${slides.length} slides and ${dots.length} dots`);
    
    if (slides.length <= 1) {
        console.log('Not enough slides to navigate');
        return;
    }

    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    console.log(`Current slide index: ${currentIndex}`);
    
    slides[currentIndex].classList.remove('active');
    if (dots.length > 0) dots[currentIndex].classList.remove('active');
    
    currentIndex += direction;
    
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    
    console.log(`New slide index: ${currentIndex}`);
    slides[currentIndex].classList.add('active');
    if (dots.length > 0) dots[currentIndex].classList.add('active');
}

// FIXED: Direct slide navigation via dots with page types
function goToSlide(equipmentId, slideIndex, pageType = 'home') {
    const sliderId = `slider-${pageType}-${equipmentId}`;
    const slider = document.getElementById(sliderId);
    if (!slider) {
        console.log(`Slider not found for ID: ${sliderId}`);
        return;
    }

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

// FIXED: Page Navigation with timer cleanup
function showPage(page, addToHistory = true) {
    // Stop all auto-sliders when changing pages
    sliderTimers.forEach((timer, key) => {
        clearInterval(timer);
    });
    sliderTimers.clear();
    
    // Add current page to history if not already there and we want to add to history
    if (addToHistory && navigationHistory.length > 0) {
        const currentPage = getCurrentPage();
        if (currentPage && currentPage !== page) {
            navigationHistory.push(currentPage);
        }
    } else if (addToHistory) {
        // If this is the first navigation, add home as the starting point
        navigationHistory.push('home');
    }
    
    const pages = document.querySelectorAll('.page, .dashboard');
    pages.forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active');
    });
    
    const pageElement = document.getElementById(page + 'Page');
    if (pageElement) {
        pageElement.classList.remove('hidden');
        
        // Update back button visibility
        updateBackButton();
        
        // Reinitialize sliders if we're on equipment page
        if (page === 'equipment' || page === 'home') {
            setTimeout(() => {
                initializeSliders();
            }, 200); // Increased timeout for better reliability
        }
    }
}

// Get current active page
function getCurrentPage() {
    const pages = document.querySelectorAll('.page, .dashboard');
    for (let page of pages) {
        if (!page.classList.contains('hidden')) {
            return page.id.replace('Page', '').replace('Dashboard', '');
        }
    }
    return null;
}

// Go back to previous page
function goBack() {
    if (navigationHistory.length > 0) {
        const previousPage = navigationHistory.pop();
        showPage(previousPage, false); // Don't add to history when going back
    } else {
        // If no history, go to home
        showPage('home', false);
    }
}

// Update back button visibility
function updateBackButton() {
    const backButton = document.getElementById('backButton');
    const currentPage = getCurrentPage();
    
    // Show back button if we're not on home page and have history
    if (currentPage !== 'home' && navigationHistory.length > 0) {
        backButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
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
    updateAuthUI(); // This will show the dashboard navigation
    
    // Just show a success notification, no confirmation dialog
    showNotification(
        getTranslation(
            'Login successful! Dashboard is now available in the navigation.',
            'लॉगिन सफल! डैशबोर्ड अब नेवीगेशन में उपलब्ध है।',
            'लॉगिन यशस्वी! डॅशबोर्ड आता नेव्हिगेशनमध्ये उपलब्ध आहे।'
        ),
        'success'
    );
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
    updateAuthUI(); // This will show the dashboard navigation
    
    // Just show a success notification, no confirmation dialog
    showNotification(
        getTranslation(
            'Registration successful! Dashboard is now available in the navigation.',
            'पंजीकरण सफल! डैशबोर्ड अब नेवीगेशन में उपलब्ध है।',
            'नोंदणी यशस्वी! डॅशबोर्ड आता नेव्हिगेशनमध्ये उपलब्ध आहे।'
        ),
        'success'
    );
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
    const dashboardNavItem = document.getElementById('dashboardNavItem');
    const dashboardMobileBtn = document.querySelector('.dashboard-mobile-btn');
    
    if (currentUser) {
        // User is logged in
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        userName.textContent = currentUser.name;
        
        // Show dashboard navigation
        dashboardNavItem.classList.remove('hidden');
        dashboardNavItem.classList.add('show');
        
        // Show mobile dashboard button
        if (dashboardMobileBtn) {
            dashboardMobileBtn.classList.remove('hidden');
            dashboardMobileBtn.classList.add('show');
        }
        
        // Update dashboard link text based on user type
        const dashboardLink = dashboardNavItem.querySelector('a');
        if (dashboardLink) {
            const userTypeText = currentUser.type === 'customer' ? 
                getTranslation('My Dashboard', 'मेरा डैशबोर्ड', 'माझे डॅशबोर्ड') :
                getTranslation('Owner Dashboard', 'मालिक डैशबोर्ड', 'मालक डॅशबोर्ड');
            
            dashboardLink.setAttribute('data-en', currentUser.type === 'customer' ? 'My Dashboard' : 'Owner Dashboard');
            dashboardLink.setAttribute('data-hi', currentUser.type === 'customer' ? 'मेरा डैशबोर्ड' : 'मालिक डैशबोर्ड');
            dashboardLink.setAttribute('data-mr', currentUser.type === 'customer' ? 'माझे डॅशबोर्ड' : 'मालक डॅशबोर्ड');
            dashboardLink.textContent = userTypeText;
        }
    } else {
        // User is logged out
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        
        // Hide dashboard navigation
        dashboardNavItem.classList.add('hidden');
        dashboardNavItem.classList.remove('show');
        
        // Hide mobile dashboard button
        if (dashboardMobileBtn) {
            dashboardMobileBtn.classList.add('hidden');
            dashboardMobileBtn.classList.remove('show');
        }
    }
}    

// Go to dashboard based on user type
function goToDashboard() {
    if (currentUser) {
        showDashboard(currentUser.type);
    } else {
        showModal('loginModal');
        showNotification(getTranslation('Please login to access dashboard', 'डैशबोर्ड तक पहुंचने के लिए कृपया लॉगिन करें', 'डॅशबोर्डमध्ये प्रवेश करण्यासाठी कृपया लॉगिन करा'), 'warning');
    }
}

function showDashboard(type) {
    // Add current page to history before showing dashboard
    const currentPage = getCurrentPage();
    if (currentPage && currentPage !== 'home') {
        navigationHistory.push(currentPage);
    }
    
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
        
        // Update back button visibility
        updateBackButton();
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