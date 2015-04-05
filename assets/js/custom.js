// Algelised funktsioonid punkt 1.4 jaoks.
// TODO: Populate from db

function kuvaRingkond() {
    if (document.getElementById("ringkond").value == "1") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Tallinna Haabersti, Põhja-Tallinna ja Kristiine linnaosa";
    }     
    else if (document.getElementById("ringkond").value == "2") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Tallinna Kesklinna, Lasnamäe ja Pirita linnaosa";
    }
    else if (document.getElementById("ringkond").value == "3") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Tallinna Mustamäe ja Nõmme linnaosa";
    }
    else if (document.getElementById("ringkond").value == "4") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Harju- ja Raplamaa";
    }
    else if (document.getElementById("ringkond").value == "5") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Hiiu-, Lääne- ja Saaremaa";
    }
    else if (document.getElementById("ringkond").value == "6") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Lääne-Virumaa";
    }
    else if (document.getElementById("ringkond").value == "7") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Ida-Virumaa";
    }
    else if (document.getElementById("ringkond").value == "8") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Järva- ja Viljandimaa";
    } 
    else if (document.getElementById("ringkond").value == "9") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Jõgeva- ja Tartumaa";
    } 
    else if (document.getElementById("ringkond").value == "10") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Tartu linn";
    } 
    else if (document.getElementById("ringkond").value == "11") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Võru-, Valga- ja Põlvamaa";
    } 
    else if (document.getElementById("ringkond").value == "12") {
        document.getElementById("valitudRingkond").innerHTML = "<b>Ringkond:</b> Pärnumaa";
    } 
}

function kuvaErakond() {
	if (document.getElementById("erakond").value == "1") {
        document.getElementById("valitudErakond").innerHTML = "<b>Erakond:</b> Erakond 1";
    }     
    else if (document.getElementById("erakond").value == "2") {
        document.getElementById("valitudErakond").innerHTML = "<b>Erakond:</b> Erakond 2";
    }
    else if (document.getElementById("erakond").value == "3") {
        document.getElementById("valitudErakond").innerHTML = "<b>Erakond:</b> Erakond 3";
    }
    else if (document.getElementById("erakond").value == "4") {
        document.getElementById("valitudErakond").innerHTML = "<b>Erakond:</b> Erakond 4";
    }
    else if (document.getElementById("erakond").value == "5") {
        document.getElementById("valitudErakond").innerHTML = "<b>Erakond:</b> Erakond 5";
    }
}

function kuvaKandidaat() {
	if (document.getElementById("kandidaat").value == "100") {
        document.getElementById("valitudKandidaat").innerHTML = "<b>Kandidaat:</b> 100, Pavel Raav";
    }     
    else if (document.getElementById("kandidaat").value == "101") {
        document.getElementById("valitudKandidaat").innerHTML = "<b>Kandidaat:</b> 101, Ranal Saron";
    }
    else if (document.getElementById("kandidaat").value == "102") {
        document.getElementById("valitudKandidaat").innerHTML = "<b>Kandidaat:</b> 102, Ingrid Sarap";
    }
}
