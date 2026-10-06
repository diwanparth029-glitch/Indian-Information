// ================= HISTORY INFORMATION =================

function showInfo(period) {

    let message = "";

    if (period === "ancient") {

        message =
            "Ancient India includes the Indus Valley Civilization, Vedic traditions, " +
            "the Mahajanapadas, Maurya and Gupta periods. It made important " +
            "contributions to mathematics, science, literature and philosophy.";

    }

    else if (period === "medieval") {

        message =
            "Medieval India saw the development of regional kingdoms and major " +
            "empires including the Delhi Sultanate, Vijayanagara Empire and Mughal Empire. " +
            "This period produced important developments in architecture, literature and art.";

    }

    else if (period === "modern") {

        message =
            "Modern Indian history includes European colonial expansion, British rule, " +
            "the Indian independence movement, independence in 1947 and the establishment " +
            "of the Republic of India in 1950.";

    }

    alert(message);
}


// ================= SEARCH =================

function searchContent() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const result = document.getElementById("searchResult");

    if (input === "") {

        result.innerText = "Please enter something to search.";

        return;
    }


    const topics = {

        taj: "Taj Mahal — A famous monument of Mughal-era architecture in Agra.",

        "taj mahal":
            "Taj Mahal — A famous monument of Mughal-era architecture in Agra.",

        ashoka:
            "Ashoka — Mauryan emperor associated with the spread of Buddhism.",

        gandhi:
            "Mahatma Gandhi — A major leader of India's independence movement.",

        "indus valley":
            "The Indus Valley Civilization was an ancient urban civilization of the Indian subcontinent.",

        mughal:
            "The Mughal Empire was established in northern India in 1526.",

        independence:
            "India became independent from British colonial rule on 15 August 1947.",

        "qutub minar":
            "Qutub Minar is a historic tower in Delhi.",

        "hawa mahal":
            "Hawa Mahal is a historic palace in Jaipur, Rajasthan.",

        charminar:
            "Charminar is a historic monument located in Hyderabad."

    };


    if (topics[input]) {

        result.innerText = topics[input];

    } else {

        result.innerText =
            "No exact result found. Try: Taj Mahal, Ashoka, Gandhi, Indus Valley, Mughal, Independence, Qutub Minar.";

    }
}
