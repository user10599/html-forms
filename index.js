
function redirectToLink(location){
    window.location.href = location;
}

//alert("Working!")

var home_button = document.getElementsByClassName('home')[0];
var home_location = 'user10599.github.io/html-forms/'//http://127.0.0.1:3000/index.html';
console.log(home_button);

home_button.addEventListener('click',() => {
    //alert("Hello");
    redirectToLink(home_location);
})

function homeButtonClicked(){
    redirectToLink(home_location);
}

var new_patient_location = 'user10599.github.io/html-forms/Forms/nouveau-patient.html';
var visite_medicale_location = 'user10599.github.io/html-forms/Forms/visite-medicale.html';
var signes_vitaux_location = 'user10599.github.io/html-forms/Forms/signes-vitaux-habitudes.html';
var formulare_transfer_location = 'user10599.github.io/html-forms/Forms/transfert.html'; 
var ordonnance_pharmaceutique_location = 'user10599.github.io/html-forms/Forms/ordonnance-pharmaceutique.html';
var formulaire_de_deces_location = 'user10599.github.io/html-forms/Forms/formulaire-deces.html';
var formulaire_de_dechargement = 'user10599.github.io/html-forms/Forms/formulaire-decharge.html';

function newPatientClicked(){
redirectToLink(new_patient_location);
}

function visitMedicalClicked(){
    redirectToLink(visite_medicale_location);
    }

    function vitalSignsClicked(){
        redirectToLink(signes_vitaux_location);
    }
    function transferClicked(){
        redirectToLink(formulare_transfer_location);
    }
    function prescriptionClicked(){
        redirectToLink(ordonnance_pharmaceutique_location);
    }
    function deathFormClicked(){
        redirectToLink(formulaire_de_deces_location);
    }
    function dischargeFormClicked(){
        redirectToLink(formulaire_de_dechargement);
    }

