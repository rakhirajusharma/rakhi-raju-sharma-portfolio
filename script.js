/* ==================================================
   ACTUAL GITHUB PHOTO NAME FIX
================================================== */

const actualPhotoNames = {
    "1000006887.jpg": "IMG-20260818-WA0016.jpg",

    "1000006925.jpg": "IMG-20260818-WA0035.jpg",
    "1000006927.jpg": "IMG-20260818-WA0036.jpg",
    "1000006929.jpg": "IMG-20260818-WA0037.jpg",
    "1000006931.jpg": "IMG-20260818-WA0038.jpg",
    "1000006933.jpg": "IMG-20260818-WA0039.jpg",
    "1000006935.jpg": "IMG-20260818-WA0040.jpg",
    "1000006937.jpg": "IMG-20260818-WA0041.jpg",
    "1000006939.jpg": "IMG-20260818-WA0042.jpg",
    "1000006941.jpg": "IMG-20260818-WA0043.jpg",
    "1000006943.jpg": "IMG-20260818-WA0044.jpg",
    "1000006945.jpg": "IMG-20260818-WA0045.jpg",
    "1000006947.jpg": "IMG-20260818-WA0046.jpg",
    "1000006949.jpg": "IMG-20260818-WA0047.jpg",
    "1000006951.jpg": "IMG-20260818-WA0048.jpg",
    "1000006953.jpg": "IMG-20260818-WA0049.jpg",
    "1000006955.jpg": "IMG-20260818-WA0050.jpg",

    "1000006959.jpg": "IMG-20260818-WA0052.jpg",
    "1000006961.jpg": "IMG-20260818-WA0053.jpg",
    "1000006963.jpg": "IMG-20260818-WA0054.jpg",

    "1000006967.jpg": "IMG-20260818-WA0056.jpg",
    "1000006971.jpg": "IMG-20260818-WA0058.jpg",
    "1000006973.jpg": "IMG-20260818-WA0059.jpg",
    "1000006975.jpg": "IMG-20260818-WA0060.jpg",
    "1000006977.jpg": "IMG-20260818-WA0061.jpg",
    "1000006979.jpg": "IMG-20260818-WA0062.jpg",
    "1000006981.jpg": "IMG-20260818-WA0063.jpg",
    "1000006983.jpg": "IMG-20260818-WA0064.jpg",
    "1000006985.jpg": "IMG-20260818-WA0065.jpg",
    "1000006987.jpg": "IMG-20260818-WA0066.jpg",
    "1000006989.jpg": "IMG-20260818-WA0067.jpg",
    "1000006991.jpg": "IMG-20260818-WA0068.jpg",
    "1000006993.jpg": "IMG-20260818-WA0069.jpg",
    "1000006995.jpg": "IMG-20260818-WA0070.jpg",
    "1000006997.jpg": "IMG-20260818-WA0071.jpg",
    "1000006999.jpg": "IMG-20260818-WA0072.jpg",
    "1000007001.jpg": "IMG-20260818-WA0073.jpg",
    "1000007003.jpg": "IMG-20260818-WA0074.jpg",
    "1000007005.jpg": "IMG-20260818-WA0075.jpg",
    "1000007007.jpg": "IMG-20260818-WA0076.jpg",
    "1000007009.jpg": "IMG-20260818-WA0077.jpg",

    "1000007011.jpg": "IMG-20260818-WA0078.jpg",
    "1000007013.jpg": "IMG-20260818-WA0079.jpg",
    "1000007015.jpg": "IMG-20260818-WA0080.jpg",
    "1000007017.jpg": "IMG-20260818-WA0081.jpg",
    "1000007019.jpg": "IMG-20260818-WA0082.jpg",
    "1000007021.jpg": "IMG-20260818-WA0083.jpg",
    "1000007023.jpg": "IMG-20260818-WA0084.jpg",
    "1000007025.jpg": "IMG-20260818-WA0085.jpg",
    "1000007027.jpg": "IMG-20260818-WA0086.jpg",
    "1000007029.jpg": "IMG-20260818-WA0087.jpg",
    "1000007031.jpg": "IMG-20260818-WA0088.jpg",
    "1000007033.jpg": "IMG-20260818-WA0089.jpg",
    "1000007035.jpg": "IMG-20260818-WA0090.jpg",
    "1000007037.jpg": "IMG-20260818-WA0091.jpg",
    "1000007039.jpg": "IMG-20260818-WA0092.jpg",
    "1000007041.jpg": "IMG-20260818-WA0093.jpg",
    "1000007043.jpg": "IMG-20260818-WA0094.jpg",
    "1000007045.jpg": "IMG-20260818-WA0095.jpg",
    "1000007047.jpg": "IMG-20260818-WA0096.jpg"
};

function getActualPhotoPath(oldPath) {
    if (!oldPath) return oldPath;

    const oldFileName = oldPath.split("/").pop();
    const actualFileName = actualPhotoNames[oldFileName];

    return actualFileName
        ? `images/${actualFileName}`
        : oldPath;
}

function correctExistingPhotoNames(root = document) {
    root.querySelectorAll("img[src]").forEach((image) => {
        const correctedPath = getActualPhotoPath(
            image.getAttribute("src")
        );

        if (
            correctedPath &&
            correctedPath !== image.getAttribute("src")
        ) {
            image.setAttribute("src", correctedPath);
        }
    });

    root.querySelectorAll("[data-lightbox-image]")
        .forEach((element) => {
            const correctedPath = getActualPhotoPath(
                element.dataset.lightboxImage
            );

            if (correctedPath) {
                element.dataset.lightboxImage =
                    correctedPath;
            }
        });
}

correctExistingPhotoNames();

const photoNameObserver = new MutationObserver(
    (mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (!(node instanceof Element)) {
                    return;
                }

                if (node.matches("img[src]")) {
                    const correctedPath =
                        getActualPhotoPath(
                            node.getAttribute("src")
                        );

                    if (correctedPath) {
                        node.setAttribute(
                            "src",
                            correctedPath
                        );
                    }
                }

                correctExistingPhotoNames(node);
            });
        });
    }
);

photoNameObserver.observe(document.body, {
    childList: true,
    subtree: true
});
/* ==================================================
   RAKHI RAJU SHARMA PORTFOLIO
   Interactive Website Script
================================================== */

"use strict";

/* ==================================================
   GLOBAL WEBSITE STATE
================================================== */

let currentLanguage = "hi";
let activeLightboxItems = [];
let currentLightboxIndex = 0;
let currentZoomLevel = 1;

/* ==================================================
   NEWSPAPER CUTTINGS DATA — PART 1
   Original photo names are preserved.
================================================== */

const newsData = [
    {
        image: "images/1000006889.jpg",
        year: "2021",
        categoryHi: "संगठन एवं जनसंपर्क",
        categoryEn: "Organization & Public Outreach",
        captionHi: "जनप्रतिनिधियों एवं कार्यकर्ताओं के साथ सार्वजनिक स्वागत और संगठनात्मक सहभागिता।",
        captionEn: "Public welcome and organizational participation with representatives and community workers."
    },
    {
        image: "images/1000006891.jpg",
        year: "2021",
        categoryHi: "पट्टा वितरण",
        categoryEn: "Patta Distribution",
        captionHi: "प्रशासन शहरों के संग अभियान के अंतर्गत पात्र परिवारों तक पट्टे पहुँचाने की पहल।",
        captionEn: "An initiative to provide property documents to eligible families under the urban administration campaign."
    },
    {
        image: "images/1000006893.jpg",
        year: "2021",
        categoryHi: "संगठनात्मक जिम्मेदारी",
        categoryEn: "Organizational Responsibility",
        captionHi: "सार्वजनिक एवं संगठनात्मक गतिविधियों में सक्रिय भागीदारी और नई जिम्मेदारियों का निर्वहन।",
        captionEn: "Active participation in public and organizational activities while undertaking new responsibilities."
    },
    {
        image: "images/1000006895.jpg",
        year: "2025",
        categoryHi: "प्रशिक्षण एवं सहभागिता",
        categoryEn: "Training & Participation",
        captionHi: "कार्यकर्ता प्रशिक्षण, सामाजिक संवाद और जनसंपर्क से जुड़े कार्यक्रम में सहभागिता।",
        captionEn: "Participation in a programme focused on training, social communication and public outreach."
    },
    {
        image: "images/1000006897.jpg",
        year: "2024",
        categoryHi: "प्रतिभा सम्मान",
        categoryEn: "Talent Recognition",
        captionHi: "स्थानीय प्रतिभाओं को प्रोत्साहित करने और सामाजिक उपलब्धियों को सम्मान देने का प्रयास।",
        captionEn: "An effort to encourage local talent and recognize meaningful social achievements."
    },
    {
        image: "images/1000006899.jpg",
        year: "2024",
        categoryHi: "तिरंगा यात्रा",
        categoryEn: "Tiranga Rally",
        captionHi: "देशभक्ति और राष्ट्रीय एकता के संदेश के साथ आयोजित तिरंगा यात्रा में सहभागिता।",
        captionEn: "Participation in a Tiranga rally carrying the message of patriotism and national unity."
    },
    {
        image: "images/1000006901.jpg",
        year: "2024",
        categoryHi: "जनसंवाद",
        categoryEn: "Public Dialogue",
        captionHi: "कार्यकर्ताओं और नागरिकों के साथ संवाद कर जनहित के विषयों को आगे बढ़ाने का प्रयास।",
        captionEn: "An effort to advance public-interest issues through dialogue with citizens and community workers."
    },
    {
        image: "images/1000006903.jpg",
        year: "2024",
        categoryHi: "सार्वजनिक जिम्मेदारी",
        categoryEn: "Public Responsibility",
        captionHi: "संगठनात्मक दायित्व और जनसेवा से जुड़े कार्यों में सक्रिय भूमिका।",
        captionEn: "An active role in organizational responsibilities and public-service initiatives."
    },
    {
        image: "images/1000006905.jpg",
        year: "2024",
        categoryHi: "धार्मिक यात्रा",
        categoryEn: "Religious Journey",
        captionHi: "वार्ड के महिला-पुरुष श्रद्धालुओं के लिए सामूहिक धार्मिक यात्रा के आयोजन में सहयोग।",
        captionEn: "Support in organizing a collective religious journey for women and men from the ward."
    },
    {
        image: "images/1000006907.jpg",
        year: "2024",
        categoryHi: "पेयजल समस्या",
        categoryEn: "Drinking Water Issue",
        captionHi: "दूषित पेयजल की शिकायत पर अधिकारियों से जाँच और समस्या के समाधान की माँग की गई।",
        captionEn: "Authorities were approached for inspection and resolution following complaints about contaminated water."
    },
    {
        image: "images/1000006909.jpg",
        year: "2022",
        categoryHi: "सड़क निर्माण",
        categoryEn: "Road Construction",
        captionHi: "वार्ड 19 में लगभग एक करोड़ रुपये की लागत से निर्मित सड़क का लोकार्पण।",
        captionEn: "Inauguration of a road constructed in Ward 19 at an approximate cost of one crore rupees."
    },
    {
        image: "images/1000006911.jpg",
        year: "2022",
        categoryHi: "उंटड़ा रोड",
        categoryEn: "Untada Road",
        captionHi: "उंटड़ा रोड पर नवनिर्मित सड़क का शुभारंभ और गुणवत्तापूर्ण कार्य की निगरानी।",
        captionEn: "Opening of the newly constructed Untada Road along with monitoring of construction quality."
    },
    {
        image: "images/1000006913.jpg",
        year: "2022",
        categoryHi: "सामाजिक सहभागिता",
        categoryEn: "Social Participation",
        captionHi: "स्थानीय नागरिकों और कार्यकर्ताओं के साथ सामाजिक एवं संगठनात्मक कार्यक्रम में सहभागिता।",
        captionEn: "Participation in a social and organizational programme with residents and community workers."
    },
    {
        image: "images/1000006915.jpg",
        year: "2022",
        categoryHi: "सड़क एवं नाला निर्माण",
        categoryEn: "Road & Drain Construction",
        captionHi: "वार्ड 19 में सीसी सड़क और दोनों ओर नाला निर्माण कार्य जनता को समर्पित किया गया।",
        captionEn: "A CC road and drainage construction on both sides in Ward 19 were dedicated to the public."
    },
    {
        image: "images/1000006917.jpg",
        year: "2022",
        categoryHi: "संगठन",
        categoryEn: "Organization",
        captionHi: "सार्वजनिक गतिविधियों को प्रभावी बनाने के लिए संगठनात्मक कार्यकारिणी का विस्तार।",
        captionEn: "Expansion of the organizational team to strengthen public and community activities."
    },
    {
        image: "images/1000006919.jpg",
        year: "2022",
        categoryHi: "जनसंपर्क",
        categoryEn: "Public Outreach",
        captionHi: "नवीन पदाधिकारियों के स्वागत के माध्यम से स्थानीय नागरिकों से संवाद और जनसंपर्क।",
        captionEn: "Public outreach and interaction with residents during the welcome of newly appointed office bearers."
    },
    {
        image: "images/1000006921.jpg",
        year: "2022",
        categoryHi: "उंटड़ा रोड निर्माण",
        categoryEn: "Untada Road Construction",
        captionHi: "लंबे समय से क्षतिग्रस्त उंटड़ा रोड पर सीसी सड़क निर्माण कार्य शुरू करवाया गया।",
        captionEn: "CC road construction was initiated on Untada Road after years of deteriorated conditions."
    },
    {
        image: "images/1000006923.jpg",
        year: "2022",
        categoryHi: "कार्य निरीक्षण",
        categoryEn: "Work Inspection",
        captionHi: "निर्माणाधीन सड़क का स्थल निरीक्षण कर कार्य की गुणवत्ता सुनिश्चित करने के निर्देश दिए गए।",
        captionEn: "The road construction site was inspected and directions were given to ensure work quality."
    },
    {
        image: "images/1000006925.jpg",
        year: "2022",
        categoryHi: "पट्टा वितरण",
        categoryEn: "Patta Distribution",
        captionHi: "वार्ड 19 सहित विभिन्न क्षेत्रों के पात्र लाभार्थियों को आवासीय पट्टे वितरित किए गए।",
        captionEn: "Residential property documents were distributed to eligible beneficiaries from Ward 19 and nearby areas."
    },
    {
        image: "images/1000006927.jpg",
        year: "2022",
        categoryHi: "पट्टा वितरण",
        categoryEn: "Patta Distribution",
        captionHi: "वार्ड 19 के वंचित परिवारों को वर्षों बाद मालिकाना अधिकार से जुड़े पट्टे प्राप्त हुए।",
        captionEn: "Families in Ward 19 received long-awaited property documents connected with ownership rights."
    },
    {
        image: "images/1000006929.jpg",
        year: "2021",
        categoryHi: "विकास कार्यों का विवरण",
        categoryEn: "Development Work Overview",
        captionHi: "वार्ड 19 में सड़क, जनसुविधा और पट्टा वितरण सहित करवाए गए कार्यों का सार्वजनिक विवरण।",
        captionEn: "A public overview of road, civic-facility and property-document initiatives undertaken in Ward 19."
    },

/* PART 1 समाप्त — अगला code इसी के ठीक नीचे paste होगा */
      {
        image: "images/1000006931.jpg",
        year: "2022",
        categoryHi: "पट्टा वितरण",
        categoryEn: "Patta Distribution",
        captionHi: "नगर परिषद अभियान के अंतर्गत 40 लाभार्थियों को उनके आवासीय पट्टे सौंपे गए।",
        captionEn: "Residential property documents were handed over to 40 beneficiaries under the municipal campaign."
    },
    {
        image: "images/1000007011.jpg",
        year: "2022",
        categoryHi: "मालिकाना अधिकार",
        categoryEn: "Ownership Rights",
        captionHi: "लंबे इंतजार के बाद कृष्णापुरी क्षेत्र के परिवारों को मालिकाना अधिकार से जुड़े पट्टे प्राप्त हुए।",
        captionEn: "After a long wait, families of Krishnapuri received documents connected with ownership rights."
    },
    {
        image: "images/1000007013.jpg",
        year: "2022",
        categoryHi: "पट्टा अभियान",
        categoryEn: "Patta Campaign",
        captionHi: "पात्र परिवारों की दस्तावेजी समस्याओं का समाधान कर पट्टा वितरण की प्रक्रिया आगे बढ़ाई गई।",
        captionEn: "Documentation issues of eligible families were addressed to advance the property-document distribution process."
    },
    {
        image: "images/1000007015.jpg",
        year: "2021",
        categoryHi: "नाला निर्माण",
        categoryEn: "Drain Construction",
        captionHi: "कृष्णापुरी क्षेत्र में जल निकासी सुधारने के लिए नाला निर्माण कार्य शुरू करवाया गया।",
        captionEn: "Drain construction was initiated in Krishnapuri to improve local water drainage."
    },
    {
        image: "images/1000007019.jpg",
        year: "2021",
        categoryHi: "सामाजिक सहायता",
        categoryEn: "Social Assistance",
        captionHi: "जरूरतमंद परिवारों तक प्रधानमंत्री गरीब कल्याण अन्न योजना का लाभ पहुँचाने में सहयोग।",
        captionEn: "Support was provided in taking food-assistance benefits to families in need."
    },
    {
        image: "images/1000007017.jpg",
        year: "2021",
        categoryHi: "सड़क एवं नाला",
        categoryEn: "Road & Drain",
        captionHi: "उंटड़ा रोड पर सड़क और नाला निर्माण कार्य का शिलान्यास किया गया।",
        captionEn: "Foundation work for road and drainage construction on Untada Road was inaugurated."
    },
    {
        image: "images/1000007021.jpg",
        year: "2021",
        categoryHi: "नाला निर्माण",
        categoryEn: "Drain Construction",
        captionHi: "बरसों पुरानी जल निकासी समस्या के समाधान के लिए आरसीसी नाला निर्माण शुरू हुआ।",
        captionEn: "RCC drain construction began to resolve a long-standing water-drainage problem."
    },
    {
        image: "images/1000007025.jpg",
        year: "2021",
        categoryHi: "पेयजल समस्या",
        categoryEn: "Drinking Water Issue",
        captionHi: "पानी के मीटर चोरी और कम दबाव की समस्या पर विभाग को ज्ञापन देकर कार्रवाई की माँग की गई।",
        captionEn: "A memorandum was submitted seeking action over water-meter theft and low water pressure."
    },
    {
        image: "images/1000007023.jpg",
        year: "2021",
        categoryHi: "अन्न वितरण",
        categoryEn: "Food Distribution",
        captionHi: "जरूरतमंद नागरिकों को राशन और खाद्य सहायता उपलब्ध कराने में सहभागिता।",
        captionEn: "Participation in providing ration and food assistance to residents in need."
    },
    {
        image: "images/1000007027.jpg",
        year: "2021",
        categoryHi: "वाचनालय पुनः आरंभ",
        categoryEn: "Library Reopening",
        captionHi: "कृष्णापुरी वाचनालय की मरम्मत करवाकर स्थानीय विद्यार्थियों और नागरिकों के लिए पुनः शुरू किया गया।",
        captionEn: "Krishnapuri library was repaired and reopened for local students and residents."
    },
    {
        image: "images/1000007029.jpg",
        year: "2021",
        categoryHi: "वाचनालय सुविधा",
        categoryEn: "Library Facility",
        captionHi: "लंबे समय से बंद वाचनालय में फर्नीचर, मरम्मत और अध्ययन की आवश्यक सुविधाएँ उपलब्ध कराई गईं।",
        captionEn: "Furniture, repairs and essential study facilities were provided at the long-closed community library."
    },
    {
        image: "images/1000007031.jpg",
        year: "2021",
        categoryHi: "शिक्षा सुविधा",
        categoryEn: "Education Facility",
        captionHi: "लगभग चार लाख रुपये की लागत से वाचनालय का कायाकल्प कर जनता के लिए खोला गया।",
        captionEn: "The library was renovated at an approximate cost of four lakh rupees and reopened to the public."
    },
    {
        image: "images/1000007033.jpg",
        year: "2021",
        categoryHi: "कोरोना योद्धा सम्मान",
        categoryEn: "Covid Warrior Recognition",
        captionHi: "कठिन परिस्थितियों में सफाई व्यवस्था संभालने वाले कर्मचारियों का सम्मान किया गया।",
        captionEn: "Sanitation workers serving during difficult pandemic conditions were recognized and honoured."
    },
    {
        image: "images/1000007035.jpg",
        year: "2021",
        categoryHi: "पौधारोपण",
        categoryEn: "Plantation",
        captionHi: "विश्व पर्यावरण दिवस पर वार्ड 19 में पौधारोपण और पौधों की सुरक्षा का संकल्प।",
        captionEn: "A plantation drive and commitment to protect saplings were undertaken in Ward 19 on World Environment Day."
    },
    {
        image: "images/1000007039.jpg",
        year: "2021",
        categoryHi: "स्वास्थ्य बीमा",
        categoryEn: "Health Insurance",
        captionHi: "परिवारों को स्वास्थ्य बीमा योजना से जोड़ने के लिए शिविर और जागरूकता अभियान आयोजित किया गया।",
        captionEn: "A camp and awareness drive were organized to connect families with the health-insurance scheme."
    },
    {
        image: "images/1000007037.jpg",
        year: "2021",
        categoryHi: "वाचनालय की माँग",
        categoryEn: "Library Demand",
        captionHi: "वरिष्ठ नागरिकों और विद्यार्थियों के लिए कृष्णापुरी वाचनालय पुनः शुरू कराने की माँग उठाई गई।",
        captionEn: "A demand was raised to reopen Krishnapuri library for senior citizens and students."
    },
    {
        image: "images/1000007041.jpg",
        year: "2021",
        categoryHi: "कोरोना योद्धा",
        categoryEn: "Covid Warriors",
        captionHi: "नगर परिषद के सफाई कर्मचारियों को कोरोना योद्धा के रूप में सम्मानित किया गया।",
        captionEn: "Municipal sanitation employees were honoured for their service as Covid warriors."
    },
    {
        image: "images/1000007043.jpg",
        year: "2021",
        categoryHi: "स्वास्थ्य शिविर",
        categoryEn: "Health Camp",
        captionHi: "वार्ड 17 से 21 तक के परिवारों को चिरंजीवी स्वास्थ्य बीमा योजना से जोड़ने के लिए शिविर लगाया गया।",
        captionEn: "A camp was organized to connect families from Wards 17 to 21 with the Chiranjeevi health-insurance scheme."
    },
    {
        image: "images/1000007045.jpg",
        year: "2021",
        categoryHi: "उंटड़ा सड़क की माँग",
        categoryEn: "Untada Road Demand",
        captionHi: "क्षतिग्रस्त उंटड़ा रोड का निर्माण शीघ्र शुरू करवाने के लिए संबंधित अधिकारियों को ज्ञापन दिया गया।",
        captionEn: "A memorandum was submitted to seek the early construction of the damaged Untada Road."
    },
    {
        image: "images/1000007047.jpg",
        year: "2021",
        categoryHi: "सफाई एवं सड़क",
        categoryEn: "Cleanliness & Road",
        captionHi: "वर्षों से एकत्र कचरा हटवाकर क्षेत्र में सड़क और नाली निर्माण की प्रक्रिया आगे बढ़ाई गई।",
        captionEn: "Long-accumulated waste was removed and the road and drainage development process was advanced."
    }
];

/* ==================================================
   GROUND-LEVEL, PUBLIC OUTREACH AND EVENT PHOTOS
================================================== */

const communityData = [
    {
        image: "images/1000007009.jpg",
        category: "social",
        captionHi: "क्षेत्रवासियों के साथ सामूहिक सहभागिता और सामाजिक जुड़ाव।",
        captionEn: "Community participation and social engagement with local residents."
    },
    {
        image: "images/1000007007.jpg",
        category: "development",
        captionHi: "सार्वजनिक विकास कार्य के लोकार्पण अवसर पर जनप्रतिनिधियों के साथ सहभागिता।",
        captionEn: "Participation with public representatives during the inauguration of a development project."
    },
    {
        image: "images/1000007005.jpg",
        category: "meeting",
        captionHi: "मोहल्ला बैठक में नागरिकों की समस्याएँ सुनकर समाधान पर संवाद।",
        captionEn: "Listening to residents during a neighbourhood meeting and discussing possible solutions."
    },
    {
        image: "images/1000007003.jpg",
        category: "environment",
        captionHi: "मुख्यमंत्री वृक्षारोपण महाअभियान के अंतर्गत सामूहिक पौधारोपण।",
        captionEn: "Community plantation under the Chief Minister's tree-plantation campaign."
    },
    {
        image: "images/1000007001.jpg",
        category: "jansampark",
        captionHi: "रात्रिकालीन जनसभा में बड़ी संख्या में उपस्थित नागरिकों के साथ सीधा संवाद।",
        captionEn: "Direct interaction with a large gathering of residents during an evening public meeting."
    },
    {
        image: "images/1000006999.jpg",
        category: "social",
        captionHi: "स्वास्थ्य और सामाजिक जागरूकता के लिए सामूहिक योग कार्यक्रम।",
        captionEn: "A community yoga programme promoting health and social awareness."
    },
    {
        image: "images/1000006997.jpg",
        category: "meeting",
        captionHi: "स्थानीय समस्याओं और विकास की प्राथमिकताओं पर क्षेत्रवासियों के साथ बैठक।",
        captionEn: "A meeting with residents regarding local issues and development priorities."
    },
    {
        image: "images/1000006995.jpg",
        category: "social",
        captionHi: "जनप्रतिनिधियों और कार्यकर्ताओं के साथ सार्वजनिक कार्यक्रम में सहभागिता।",
        captionEn: "Participation in a public programme with representatives and community workers."
    },
    {
        image: "images/1000006993.jpg",
        category: "social",
        captionHi: "राष्ट्रीय एकता और देशभक्ति के संदेश के साथ तिरंगा अभियान।",
        captionEn: "A Tiranga campaign carrying the message of patriotism and national unity."
    },
    {
        image: "images/1000006991.jpg",
        category: "social",
        captionHi: "महिला समूह के साथ सामाजिक कार्यक्रम एवं सम्मान समारोह।",
        captionEn: "A social programme and recognition event with local women's groups."
    },
    {
        image: "images/1000006989.jpg",
        category: "jansampark",
        captionHi: "महिलाओं और स्थानीय नागरिकों के साथ आत्मीय जनसंपर्क।",
        captionEn: "Warm public outreach with women and local residents."
    },
    {
        image: "images/1000006987.jpg",
        category: "meeting",
        captionHi: "खुले जनसंवाद में क्षेत्र की आवश्यकताओं और समस्याओं पर चर्चा।",
        captionEn: "An open public dialogue on the needs and issues of the locality."
    },
    {
        image: "images/1000006985.jpg",
        category: "jansampark",
        captionHi: "क्षेत्र में जनसंपर्क अभियान के दौरान नागरिकों और कार्यकर्ताओं के साथ सहभागिता।",
        captionEn: "Engagement with citizens and volunteers during a public-outreach campaign."
    },
    {
        image: "images/1000006983.jpg",
        category: "social",
        captionHi: "वरिष्ठ जनप्रतिनिधियों और महिलाओं के साथ सार्वजनिक आयोजन में उपस्थिति।",
        captionEn: "Presence at a public event with senior representatives and women participants."
    },
    {
        image: "images/1000006981.jpg",
        category: "jansampark",
        captionHi: "जनप्रतिनिधियों के स्वागत अवसर पर स्थानीय नागरिकों के साथ संवाद।",
        captionEn: "Interaction with residents during the welcome of public representatives."
    },
    {
        image: "images/1000006975.jpg",
        category: "development",
        captionHi: "विकास कार्य के लोकार्पण और सार्वजनिक सुविधा के शुभारंभ की झलकियाँ।",
        captionEn: "Highlights from the inauguration of a development project and public facility."
    },
    {
        image: "images/1000006955.jpg",
        category: "social",
        captionHi: "महिला नेतृत्व और सामाजिक सहभागिता से जुड़े कार्यक्रम में उपस्थिति।",
        captionEn: "Participation in a programme connected with women's leadership and social engagement."
    },
    {
        image: "images/1000006953.jpg",
        category: "jansampark",
        captionHi: "स्थानीय परिवारों के साथ आत्मीय मुलाकात और जनसंपर्क।",
        captionEn: "A warm meeting and public interaction with local families."
    },
    {
        image: "images/1000006951.jpg",
        category: "social",
        captionHi: "सैनिकों के सम्मान में आयोजित कार्यक्रम में सामाजिक सहभागिता।",
        captionEn: "Community participation in a programme organized to honour soldiers."
    },
    {
        image: "images/1000006949.jpg",
        category: "environment",
        captionHi: "लगाए गए पौधों की सुरक्षा के लिए ट्री-गार्ड और नियमित देखभाल की व्यवस्था।",
        captionEn: "Tree guards and regular care were arranged to protect planted saplings."
    },
    {
        image: "images/1000006947.jpg",
        category: "environment",
        captionHi: "पौधारोपण के साथ पौधों को पानी देकर संरक्षण का संदेश।",
        captionEn: "Promoting environmental protection by planting and watering saplings."
    },
    {
        image: "images/1000006943.jpg",
        category: "social",
        captionHi: "जनप्रतिनिधियों और कार्यकर्ताओं के साथ संगठनात्मक कार्यशाला में सहभागिता।",
        captionEn: "Participation in an organizational workshop with representatives and volunteers."
    },
    {
        image: "images/1000006945.jpg",
        category: "social",
        captionHi: "प्रतिभाशाली छात्राओं और युवाओं के सम्मान समारोह में सहभागिता।",
        captionEn: "Participation in a recognition ceremony honouring talented students and youth."
    },
    {
        image: "images/1000006941.jpg",
        category: "development",
        captionHi: "सड़क एवं नाला निर्माण कार्य के लोकार्पण का प्रमाण और जनप्रतिनिधियों की सहभागिता।",
        captionEn: "Documented inauguration of road and drain construction with public representatives."
    },
    {
        image: "images/1000006939.jpg",
        category: "social",
        captionHi: "सामाजिक सहायता कार्यक्रम में महिलाओं, परिवारों और क्षेत्रवासियों की सहभागिता।",
        captionEn: "Participation of women, families and residents in a social-assistance programme."
    },
    {
        image: "images/1000006937.jpg",
        category: "social",
        captionHi: "जनकल्याण और सामाजिक सहभागिता से जुड़े सार्वजनिक कार्यक्रम में संवाद।",
        captionEn: "Public interaction during a programme focused on welfare and social participation."
    },
    {
        image: "images/1000006935.jpg",
        category: "jansampark",
        captionHi: "घर-घर जनसंपर्क के माध्यम से नागरिकों से सीधा संवाद।",
        captionEn: "Direct interaction with citizens through door-to-door public outreach."
    },
    {
        image: "images/1000006933.jpg",
        category: "development",
        captionHi: "पंचमुखी बालाजी मंदिर के विकास कार्य से संबंधित लोकार्पण शिलालेख।",
        captionEn: "Inauguration plaque documenting development work at Panchmukhi Balaji Temple."
    }
];

/* ==================================================
   PATTA DISTRIBUTION GALLERY
================================================== */

const pattaData = [
    {
        image: "images/1000006979.jpg",
        captionHi: "प्रशासन शहरों के संग अभियान में लाभार्थियों के साथ पट्टा वितरण।",
        captionEn: "Property-document distribution with beneficiaries during the urban administration campaign."
    },
    {
        image: "images/1000006977.jpg",
        captionHi: "लाभार्थी परिवार को मालिकाना अधिकार से जुड़ा दस्तावेज सौंपते हुए।",
        captionEn: "Handing an ownership-related document to a beneficiary family."
    },
    {
        image: "images/1000006973.jpg",
        captionHi: "पात्र महिलाओं और परिवारों को उनके आवासीय पट्टे प्रदान किए गए।",
        captionEn: "Residential property documents were provided to eligible women and families."
    },
    {
        image: "images/1000006971.jpg",
        captionHi: "लंबे इंतजार के बाद पात्र नागरिक को पट्टा सौंपने का महत्वपूर्ण अवसर।",
        captionEn: "An important moment of handing over a long-awaited property document."
    },
    {
        image: "images/1000006967.jpg",
        captionHi: "पट्टा प्राप्त करने वाले लाभार्थियों के साथ सामूहिक उपलब्धि का क्षण।",
        captionEn: "A collective moment with beneficiaries after receiving their property documents."
    },
    {
        image: "images/1000006965.jpg",
        captionHi: "स्थानीय स्तर पर आयोजित पट्टा वितरण एवं जनसमस्या समाधान शिविर।",
        captionEn: "A locally organized property-document distribution and public-grievance camp."
    },
    {
        image: "images/1000006963.jpg",
        captionHi: "पट्टा वितरण कार्यक्रम में महिला लाभार्थी का सम्मान और स्वागत।",
        captionEn: "Welcome and recognition of a woman beneficiary during the distribution programme."
    },
    {
        image: "images/1000006961.jpg",
        captionHi: "वार्डवासियों की उपस्थिति में आयोजित जनकल्याण एवं पट्टा शिविर।",
        captionEn: "A public-welfare and property-document camp held in the presence of residents."
    },
    {
        image: "images/1000006959.jpg",
        captionHi: "दस्तावेजी प्रक्रिया पूर्ण होने के बाद लाभार्थी को पट्टा प्रदान किया गया।",
        captionEn: "A property document was provided after completion of the required documentation process."
    }
];

/* PART 2 समाप्त — Part 3 इसी के नीचे paste होगा */
/* ==================================================
   BASIC ELEMENT REFERENCES
================================================== */

const newsGallery = document.getElementById("newsGallery");
const communityGallery = document.getElementById("communityGallery");
const pattaGallery = document.getElementById("pattaGallery");

const newsCount = document.getElementById("newsCount");
const communityCount = document.getElementById("communityCount");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");
const siteHeader = document.getElementById("siteHeader");
const scrollProgress = document.getElementById("scrollProgress");

/* ==================================================
   SAFE TEXT FUNCTION
================================================== */

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* ==================================================
   CURRENT LANGUAGE TEXT
================================================== */

function getCurrentText(item, hindiKey, englishKey) {
    return currentLanguage === "hi"
        ? item[hindiKey]
        : item[englishKey];
}

/* ==================================================
   RENDER NEWSPAPER GALLERY
================================================== */

function renderNewsGallery(filter = "all") {
    if (!newsGallery) return;

    const filteredNews = filter === "all"
        ? newsData
        : newsData.filter((item) => item.year === filter);

    newsGallery.innerHTML = filteredNews
        .map((item, index) => {
            const caption = getCurrentText(
                item,
                "captionHi",
                "captionEn"
            );

            const category = getCurrentText(
                item,
                "categoryHi",
                "categoryEn"
            );

            const originalIndex = newsData.indexOf(item);

            return `
                <article class="news-gallery-item news-card reveal">
                    <button
                        class="news-image-button"
                        type="button"
                        aria-label="${
                            currentLanguage === "hi"
                                ? "समाचार को बड़ा करके देखें"
                                : "View newspaper cutting"
                        }"
                        data-news-index="${originalIndex}"
                    >
                        <img
                            src="${escapeHTML(item.image)}"
                            alt="${escapeHTML(caption)}"
                            loading="lazy"
                            decoding="async"
                        >

                        <span class="news-year">
                            ${escapeHTML(item.year)}
                        </span>

                        <span class="gallery-view-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M11 4a7 7 0 1 0 4.9 12l4.55 4.55 1.4-1.4-4.55-4.55A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-1 2v2H8v2h2v2h2v-2h2v-2h-2V8h-2Z"
                                />
                            </svg>
                        </span>
                    </button>

                    <div class="news-card-content">
                        <span class="news-category">
                            ${escapeHTML(category)}
                        </span>

                        <p>${escapeHTML(caption)}</p>

                        <button
                            class="text-link news-open-link"
                            type="button"
                            data-news-index="${originalIndex}"
                        >
                            ${
                                currentLanguage === "hi"
                                    ? "पूरा समाचार देखें"
                                    : "View full cutting"
                            }
                            <span aria-hidden="true">↗</span>
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");

    if (newsCount) {
        newsCount.textContent = String(filteredNews.length);
    }

    newsGallery
        .querySelectorAll("[data-news-index]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                const selectedIndex = Number(
                    button.dataset.newsIndex
                );

                openLightbox(
                    newsData,
                    selectedIndex,
                    currentLanguage === "hi"
                        ? "समाचारों में दर्ज काम"
                        : "Work Documented in News"
                );
            });
        });

    observeRevealElements();
}

/* ==================================================
   RENDER COMMUNITY / GROUND-LEVEL GALLERY
================================================== */

function renderCommunityGallery(filter = "all") {
    if (!communityGallery) return;

    const filteredItems = filter === "all"
        ? communityData
        : communityData.filter(
            (item) => item.category === filter
        );

    communityGallery.innerHTML = filteredItems
        .map((item) => {
            const caption = getCurrentText(
                item,
                "captionHi",
                "captionEn"
            );

            const originalIndex = communityData.indexOf(item);

            return `
                <figure class="community-gallery-item reveal">
                    <button
                        class="community-image-button"
                        type="button"
                        data-community-index="${originalIndex}"
                        aria-label="${escapeHTML(caption)}"
                    >
                        <img
                            src="${escapeHTML(item.image)}"
                            alt="${escapeHTML(caption)}"
                            loading="lazy"
                            decoding="async"
                        >

                        <span class="community-image-overlay">
                            <span class="community-image-caption">
                                ${escapeHTML(caption)}
                            </span>

                            <span class="gallery-view-text">
                                ${
                                    currentLanguage === "hi"
                                        ? "फोटो देखें"
                                        : "View photo"
                                }
                                <span aria-hidden="true">↗</span>
                            </span>
                        </span>
                    </button>
                </figure>
            `;
        })
        .join("");

    if (communityCount) {
        communityCount.textContent = String(
            filteredItems.length
        );
    }

    communityGallery
        .querySelectorAll("[data-community-index]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                const selectedIndex = Number(
                    button.dataset.communityIndex
                );

                openLightbox(
                    communityData,
                    selectedIndex,
                    currentLanguage === "hi"
                        ? "जनता के बीच, जनता के साथ"
                        : "Among the People"
                );
            });
        });

    observeRevealElements();
}

/* ==================================================
   RENDER PATTA GALLERY
================================================== */

function renderPattaGallery() {
    if (!pattaGallery) return;

    pattaGallery.innerHTML = pattaData
        .map((item, index) => {
            const caption = getCurrentText(
                item,
                "captionHi",
                "captionEn"
            );

            return `
                <figure class="patta-gallery-item reveal">
                    <button
                        class="patta-image-button"
                        type="button"
                        data-patta-index="${index}"
                        aria-label="${escapeHTML(caption)}"
                    >
                        <img
                            src="${escapeHTML(item.image)}"
                            alt="${escapeHTML(caption)}"
                            loading="lazy"
                            decoding="async"
                        >

                        <span class="patta-image-overlay">
                            <span class="patta-image-caption">
                                ${escapeHTML(caption)}
                            </span>

                            <span class="gallery-view-text">
                                ${
                                    currentLanguage === "hi"
                                        ? "फोटो देखें"
                                        : "View photo"
                                }
                                <span aria-hidden="true">↗</span>
                            </span>
                        </span>
                    </button>
                </figure>
            `;
        })
        .join("");

    pattaGallery
        .querySelectorAll("[data-patta-index]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                const selectedIndex = Number(
                    button.dataset.pattaIndex
                );

                openLightbox(
                    pattaData,
                    selectedIndex,
                    currentLanguage === "hi"
                        ? "400+ पट्टा वितरण"
                        : "400+ Patta Distribution"
                );
            });
        });

    observeRevealElements();
}

/* ==================================================
   NEWS YEAR FILTER
================================================== */

const newsFilterButtons = document.querySelectorAll(
    "[data-news-filter]"
);

newsFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        newsFilterButtons.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        renderNewsGallery(button.dataset.newsFilter);
    });
});

/* ==================================================
   COMMUNITY CATEGORY FILTER
================================================== */

const galleryFilterButtons = document.querySelectorAll(
    "[data-gallery-filter]"
);

galleryFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        galleryFilterButtons.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        renderCommunityGallery(
            button.dataset.galleryFilter
        );
    });
});

/* ==================================================
   HINDI / ENGLISH LANGUAGE SWITCH
================================================== */

const languageButtons = document.querySelectorAll(
    ".language-button[data-language]"
);

function updateWebsiteLanguage(language) {
    currentLanguage = language === "en" ? "en" : "hi";

    document.documentElement.lang =
        currentLanguage === "hi" ? "hi" : "en";

    document.querySelectorAll("[data-hi][data-en]")
        .forEach((element) => {
            const translatedText =
                currentLanguage === "hi"
                    ? element.dataset.hi
                    : element.dataset.en;

            if (translatedText) {
                element.textContent = translatedText;
            }
        });

    document.querySelectorAll(
        "[data-placeholder-hi][data-placeholder-en]"
    ).forEach((element) => {
        element.placeholder =
            currentLanguage === "hi"
                ? element.dataset.placeholderHi
                : element.dataset.placeholderEn;
    });

    languageButtons.forEach((button) => {
        const isActive =
            button.dataset.language === currentLanguage;

        button.classList.toggle("active", isActive);
        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });

    const selectedNewsFilter = document.querySelector(
        "[data-news-filter].active"
    );

    const selectedCommunityFilter =
        document.querySelector(
            "[data-gallery-filter].active"
        );

    renderNewsGallery(
        selectedNewsFilter
            ? selectedNewsFilter.dataset.newsFilter
            : "all"
    );

    renderCommunityGallery(
        selectedCommunityFilter
            ? selectedCommunityFilter.dataset.galleryFilter
            : "all"
    );

    renderPattaGallery();

    localStorage.setItem(
        "rakhi-portfolio-language",
        currentLanguage
    );
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        updateWebsiteLanguage(
            button.dataset.language
        );
    });
});

/* ==================================================
   MOBILE NAVIGATION
================================================== */

function openMobileMenu() {
    if (!navLinks || !menuToggle) return;

    navLinks.classList.add("open");
    menuToggle.classList.add("active");
    mobileMenuBackdrop?.classList.add("visible");

    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
}

function closeMobileMenu() {
    if (!navLinks || !menuToggle) return;

    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    mobileMenuBackdrop?.classList.remove("visible");

    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
    const menuIsOpen =
        navLinks?.classList.contains("open");

    if (menuIsOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

mobileMenuBackdrop?.addEventListener(
    "click",
    closeMobileMenu
);

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
        closeMobileMenu();
    }
});

/* ==================================================
   HEADER AND SCROLL PROGRESS
================================================== */

function updateScrollEffects() {
    const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    if (scrollProgress) {
        scrollProgress.style.width = `${Math.min(
            progress,
            100
        )}%`;
    }

    if (siteHeader) {
        siteHeader.classList.toggle(
            "scrolled",
            scrollTop > 40
        );
    }
}

window.addEventListener(
    "scroll",
    updateScrollEffects,
    { passive: true }
);

/* ==================================================
   ACTIVE NAVIGATION LINK
================================================== */

const pageSections = document.querySelectorAll(
    "main section[id]"
);

const navigationLinks = document.querySelectorAll(
    '.nav-link[href^="#"]'
);

function updateActiveNavigation() {
    let activeSectionId = "";

    pageSections.forEach((section) => {
        const sectionTop =
            section.offsetTop - 160;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            activeSectionId = section.id;
        }
    });

    navigationLinks.forEach((link) => {
        const targetId =
            link.getAttribute("href")?.replace("#", "");

        link.classList.toggle(
            "active",
            targetId === activeSectionId
        );
    });
}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

/* ==================================================
   ANIMATED STATISTICS
================================================== */

const counterElements =
    document.querySelectorAll(".counter");

function animateCounter(counter) {
    if (counter.dataset.animated === "true") return;

    const target =
        Number(counter.dataset.target) || 0;

    const suffix =
        counter.dataset.suffix || "";

    const duration = 1700;
    const startingTime = performance.now();

    counter.dataset.animated = "true";

    function updateCounter(currentTime) {
        const elapsedTime =
            currentTime - startingTime;

        const progress = Math.min(
            elapsedTime / duration,
            1
        );

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(
            target * easedProgress
        );

        counter.textContent =
            currentValue.toLocaleString("en-IN") +
            suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent =
                target.toLocaleString("en-IN") +
                suffix;
        }
    }

    requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.35
    }
);

counterElements.forEach((counter) => {
    counterObserver.observe(counter);
});

/* ==================================================
   REVEAL ON SCROLL
================================================== */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);

function observeRevealElements() {
    document
        .querySelectorAll(".reveal:not(.visible)")
        .forEach((element) => {
            revealObserver.observe(element);
        });
}

/* PART 3 समाप्त — Part 4 इसी के नीचे paste होगा */
/* ==================================================
   LIGHTBOX ELEMENT REFERENCES
================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxBackdrop =
    document.getElementById("lightboxBackdrop");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const closeLightboxButton =
    document.getElementById("closeLightbox");

const previousImageButton =
    document.getElementById("previousImage");

const nextImageButton =
    document.getElementById("nextImage");

const zoomInButton =
    document.getElementById("zoomIn");

const zoomOutButton =
    document.getElementById("zoomOut");

const zoomResetButton =
    document.getElementById("zoomReset");

/* ==================================================
   GET LIGHTBOX ITEM DETAILS
================================================== */

function getLightboxItemDetails(item) {
    const caption =
        currentLanguage === "hi"
            ? (
                item.captionHi ||
                item.caption ||
                "जनसेवा एवं विकास कार्य"
            )
            : (
                item.captionEn ||
                item.caption ||
                "Public service and development work"
            );

    const category =
        currentLanguage === "hi"
            ? (
                item.categoryHi ||
                item.category ||
                "फोटो गैलरी"
            )
            : (
                item.categoryEn ||
                item.category ||
                "Photo Gallery"
            );

    return {
        image: item.image,
        caption,
        category
    };
}

/* ==================================================
   UPDATE LIGHTBOX CONTENT
================================================== */

function updateLightboxContent() {
    if (
        !lightboxImage ||
        activeLightboxItems.length === 0
    ) {
        return;
    }

    if (currentLightboxIndex < 0) {
        currentLightboxIndex =
            activeLightboxItems.length - 1;
    }

    if (
        currentLightboxIndex >=
        activeLightboxItems.length
    ) {
        currentLightboxIndex = 0;
    }

    const selectedItem =
        activeLightboxItems[currentLightboxIndex];

    const details =
        getLightboxItemDetails(selectedItem);

    lightboxImage.classList.add("loading");

    lightboxImage.onload = () => {
        lightboxImage.classList.remove("loading");
    };

    lightboxImage.onerror = () => {
        lightboxImage.classList.remove("loading");

        if (lightboxCaption) {
            lightboxCaption.textContent =
                currentLanguage === "hi"
                    ? "यह फोटो लोड नहीं हो सकी। कृपया images folder में इसकी file जाँचें।"
                    : "This image could not load. Please check its file inside the images folder.";
        }
    };

    lightboxImage.src = details.image;
    lightboxImage.alt = details.caption;

    if (lightboxCaption) {
        lightboxCaption.textContent =
            details.caption;
    }

    if (lightboxCategory) {
        lightboxCategory.textContent =
            details.category;
    }

    if (lightboxCounter) {
        lightboxCounter.textContent =
            `${currentLightboxIndex + 1} / ` +
            `${activeLightboxItems.length}`;
    }

    const showNavigation =
        activeLightboxItems.length > 1;

    if (previousImageButton) {
        previousImageButton.hidden =
            !showNavigation;
    }

    if (nextImageButton) {
        nextImageButton.hidden =
            !showNavigation;
    }

    resetImageZoom();
}

/* ==================================================
   OPEN AND CLOSE LIGHTBOX
================================================== */

function openLightbox(
    items,
    selectedIndex = 0,
    fallbackCategory = ""
) {
    if (!lightbox || !lightboxImage) return;

    activeLightboxItems = items.map((item) => ({
        ...item,
        categoryHi:
            item.categoryHi ||
            item.category ||
            fallbackCategory,
        categoryEn:
            item.categoryEn ||
            item.category ||
            fallbackCategory
    }));

    currentLightboxIndex = selectedIndex;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

    updateLightboxContent();

    window.setTimeout(() => {
        closeLightboxButton?.focus();
    }, 120);
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    activeLightboxItems = [];
    currentLightboxIndex = 0;

    resetImageZoom();
}

/* ==================================================
   PREVIOUS AND NEXT IMAGE
================================================== */

function showPreviousImage() {
    if (activeLightboxItems.length === 0) return;

    currentLightboxIndex -= 1;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex =
            activeLightboxItems.length - 1;
    }

    updateLightboxContent();
}

function showNextImage() {
    if (activeLightboxItems.length === 0) return;

    currentLightboxIndex += 1;

    if (
        currentLightboxIndex >=
        activeLightboxItems.length
    ) {
        currentLightboxIndex = 0;
    }

    updateLightboxContent();
}

previousImageButton?.addEventListener(
    "click",
    showPreviousImage
);

nextImageButton?.addEventListener(
    "click",
    showNextImage
);

closeLightboxButton?.addEventListener(
    "click",
    closeLightbox
);

lightboxBackdrop?.addEventListener(
    "click",
    closeLightbox
);

/* ==================================================
   IMAGE ZOOM
================================================== */

function applyImageZoom() {
    if (!lightboxImage) return;

    currentZoomLevel = Math.min(
        Math.max(currentZoomLevel, 0.75),
        3
    );

    lightboxImage.style.transform =
        `scale(${currentZoomLevel})`;

    lightboxImage.style.cursor =
        currentZoomLevel > 1
            ? "zoom-out"
            : "zoom-in";

    if (zoomResetButton) {
        zoomResetButton.textContent =
            `${Math.round(currentZoomLevel * 100)}%`;
    }
}

function zoomImageIn() {
    currentZoomLevel += 0.25;
    applyImageZoom();
}

function zoomImageOut() {
    currentZoomLevel -= 0.25;
    applyImageZoom();
}

function resetImageZoom() {
    currentZoomLevel = 1;
    applyImageZoom();
}

zoomInButton?.addEventListener(
    "click",
    zoomImageIn
);

zoomOutButton?.addEventListener(
    "click",
    zoomImageOut
);

zoomResetButton?.addEventListener(
    "click",
    resetImageZoom
);

lightboxImage?.addEventListener("click", () => {
    if (currentZoomLevel > 1) {
        resetImageZoom();
    } else {
        zoomImageIn();
    }
});

/* ==================================================
   MOUSE-WHEEL ZOOM
================================================== */

lightboxImage?.addEventListener(
    "wheel",
    (event) => {
        if (!lightbox?.classList.contains("open")) {
            return;
        }

        event.preventDefault();

        if (event.deltaY < 0) {
            zoomImageIn();
        } else {
            zoomImageOut();
        }
    },
    {
        passive: false
    }
);

/* ==================================================
   TOUCH SWIPE FOR MOBILE LIGHTBOX
================================================== */

let touchStartX = 0;
let touchEndX = 0;

lightboxImage?.addEventListener(
    "touchstart",
    (event) => {
        touchStartX =
            event.changedTouches[0].screenX;
    },
    {
        passive: true
    }
);

lightboxImage?.addEventListener(
    "touchend",
    (event) => {
        touchEndX =
            event.changedTouches[0].screenX;

        const swipeDistance =
            touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < 55) {
            return;
        }

        if (swipeDistance > 0) {
            showPreviousImage();
        } else {
            showNextImage();
        }
    },
    {
        passive: true
    }
);

/* ==================================================
   KEYBOARD LIGHTBOX CONTROLS
================================================== */

document.addEventListener("keydown", (event) => {
    const lightboxIsOpen =
        lightbox?.classList.contains("open");

    if (event.key === "Escape") {
        if (lightboxIsOpen) {
            closeLightbox();
        } else {
            closeMobileMenu();
        }
    }

    if (!lightboxIsOpen) return;

    if (event.key === "ArrowLeft") {
        showPreviousImage();
    }

    if (event.key === "ArrowRight") {
        showNextImage();
    }

    if (event.key === "+" || event.key === "=") {
        zoomImageIn();
    }

    if (event.key === "-") {
        zoomImageOut();
    }

    if (event.key === "0") {
        resetImageZoom();
    }
});

/* ==================================================
   STATIC DEVELOPMENT PHOTOS LIGHTBOX
================================================== */

const staticLightboxButtons =
    document.querySelectorAll(
        "[data-lightbox-image]"
    );

const staticLightboxData = Array.from(
    staticLightboxButtons
).map((button) => ({
    image: button.dataset.lightboxImage,
    captionHi:
        button.dataset.lightboxCaptionHi ||
        "जनसेवा एवं विकास कार्य",
    captionEn:
        button.dataset.lightboxCaptionEn ||
        "Public service and development work",
    categoryHi: "विकास कार्य",
    categoryEn: "Development Work"
}));

staticLightboxButtons.forEach(
    (button, index) => {
        button.addEventListener("click", () => {
            openLightbox(
                staticLightboxData,
                index,
                currentLanguage === "hi"
                    ? "विकास कार्य"
                    : "Development Work"
            );
        });
    }
);

/* ==================================================
   SMOOTH ANCHOR SCROLLING
================================================== */

document.querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {
        anchor.addEventListener(
            "click",
            (event) => {
                const targetId =
                    anchor.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const targetElement =
                    document.querySelector(targetId);

                if (!targetElement) return;

                event.preventDefault();

                const headerHeight =
                    siteHeader?.offsetHeight || 0;

                const targetPosition =
                    targetElement.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight -
                    18;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

                closeMobileMenu();
            }
        );
    });

/* ==================================================
   CURRENT YEAR
================================================== */

const currentYearElement =
    document.getElementById("currentYear");

if (currentYearElement) {
    currentYearElement.textContent =
        new Date().getFullYear();
}

/* ==================================================
   IMAGE ERROR HANDLING
================================================== */

document.addEventListener(
    "error",
    (event) => {
        const target = event.target;

        if (
            !(target instanceof HTMLImageElement) ||
            target.id === "lightboxImage"
        ) {
            return;
        }

        target.classList.add("image-error");
        target.alt =
            currentLanguage === "hi"
                ? `फोटो नहीं मिली: ${target.getAttribute("src")}`
                : `Image not found: ${target.getAttribute("src")}`;
    },
    true
);

/* ==================================================
   WEBSITE INITIALIZATION
================================================== */

function initializeWebsite() {
    const savedLanguage =
        localStorage.getItem(
            "rakhi-portfolio-language"
        );

    currentLanguage =
        savedLanguage === "en" ? "en" : "hi";

    updateWebsiteLanguage(currentLanguage);

    updateScrollEffects();
    updateActiveNavigation();
    observeRevealElements();

    document.body.classList.add("website-ready");
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );
} else {
    initializeWebsite();
}

/* ==================================================
   END — RAKHI RAJU SHARMA PORTFOLIO
   Presented by Vanshika Vaishnav
================================================== */
