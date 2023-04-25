// variabler med feilmeldinger
// e = error, F,A,Fo, Et, ETlf, eEp = forkortelser
let eF = 0; let eA = 0; let eFo = 0; let eEt = 0; let eTlf = 0; let eEp = 0;
// funksjon for string
// funksjon for bestillinger
function bestillBiletter(e) {
    e.preventDefault();
    // varaibler
    let film = document.getElementById("film");
    let antall = document.getElementById("antall");
    let fornavn = document.getElementById("fornavn");
    let etternavn = document.getElementById("etternavn");
    let telefonnr = document.getElementById("tlf_nr");
    let epost = document.getElementById("epost");
    // if-setninger
    if(film.value === '') {
        document.getElementById("feil_tittel").style.visibility = "visible";
        eF = 1;
    } else {
        document.getElementById("feil_tittel").style.visibility = "hidden";
        eF = 0;
    }
    if(antall.value === "" || antall.value < 1) {
        document.getElementById("feil_antall").style.visibility = "visible";
        eA = 1;
    } else {
        document.getElementById("feil_antall").style.visibility = "hidden";
        eA = 0;
    }
    if(fornavn.value === "") {
        document.getElementById("feil_fornavn").style.visibility = "visible";
        eFo = 1;
    } else {
        document.getElementById("feil_fornavn").style.visibility = "hidden";
        eFo = 0;
    }
    if(etternavn.value === "") {
        document.getElementById("feil_etternavn").style.visibility = "visible";
        eEt = 1;
    } else {
        document.getElementById("feil_etternavn").style.visibility = "hidden";
        eEt = 0;
    }
    if(telefonnr.value === "") {
        document.getElementById("feil_tlf").style.visibility = "visible";
        eTlf = 1;
    } else {
        document.getElementById("feil_tlf").style.visibility = "hidden";
        eTlf = 0;
    }
    if(epost.value === "") {
        document.getElementById("feil_epost").style.visibility = "visible";
        eEp = 1;
    } else {
        document.getElementById("feil_epost").style.visibility = "hidden";
        eEp = 0;
    }
    // hvis ingen feil er funnet kjør denne koden
    if(eF === 0 && eA === 0 && eFo === 0 && eEt === 0 && eTlf === 0 && eEp === 0) {
        const biletter = {
            film: film.value,
            antall: antall.value,
            fornavn: fornavn.value,
            etternavn: etternavn.value,
            tlf: telefonnr.value,
            epost: epost.value
        };
        $.post("/settInn", biletter, function () {
            visAlleBiletter();
        });
        $("#film").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#tlf_nr").val("");
        $("#epost").val("");
    }
}

function slettArray() {
    $.post("/slettArray", function(data) {
        visFormatData(data);
    });
}

function visAlleBiletter() {
    $.post("/visAlleBiletter", function(data) {
        visFormatData(data);
    });
}

function visFormatData(bilett) {
    let str = "<h1>Registrerte biletter:</h1><table class='table table-bordered'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th></tr>"
    for (const biletter of bilett) {
        str += "<tr><td>"+biletter.film+"</td><td> " +biletter.antall+ " </td><td>" +biletter.fornavn+ "</td><td> " + biletter.etternavn+ "</td>" +
            "<td>"+biletter.tlf+"</td><td>"+ biletter.epost +"</td>";
    }
    $("#tabell").html(str);
}