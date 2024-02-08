let form = document.querySelector("#formulaire")
const btnAjout = document.getElementById('btnAjout')

let taille = 1
let nbChoix = 0
const listeSpect = ["02/02/2024","28/05/2024","12/08/2024","07/12/2024"]

ajoutDiv()

btnAjout.addEventListener("click",function (){
    document.querySelectorAll("select").forEach(val => {
        val.disabled = true;
    })
    ajoutDiv()
    btnAjout.style.display = "none"
})

function ajoutDiv(){

    let newDiv = document.createElement('div')
    let newP = document.createElement('p')
    let newButton = document.createElement('button')
    let newSel = document.createElement('select')
    let newLabelSel1 = document.createElement('label')
    newLabelSel1.htmlFor="selectOption"+ (Number(taille))
    newLabelSel1.textContent = "Choix de la date : "
    let newLabelSel2 = document.createElement('label')
    newLabelSel2.htmlFor="input"+ (Number(taille))
    newLabelSel2.textContent = "Nombre de place : "
    let newOption = document.createElement('option')
    newSel.setAttribute("onchange", "etatButAjout(this)")
    newSel.setAttribute("onclick", "choixOption(this)")
    newSel.append(newOption)
    newOption.className = "optionChoix"
    newOption.value = "Choisir une date"
    newOption.textContent = "Choisir une date"
    let newInput = document.createElement('input')
    newInput.type = "number"
    newInput.value = 1
    newInput.min = 1
    newInput.max = 20
    taille += 1
    newInput.className = "inputChoix"
    nbChoix += 1
    newDiv.className = "divChoix"
    newP.textContent = "Réservation"
    newDiv.append(newP)
    newDiv.append(newLabelSel1)
    newDiv.append(newSel)
    newDiv.append(newLabelSel2)
    newDiv.append(newInput)
    newButton.className = "btnSuppr"
    newButton.type = "button"
    newButton.innerHTML = "Supprimer la réservation"
    newDiv.append(newButton)
    if(taille == taille){
        newButton.style.display = "none"
        document.querySelectorAll(".btnSuppr").forEach(val => {
            val.style.display = "block"
        })
    }
    newDiv.append(newButton)
    form.insertBefore(newDiv,btnAjout)
}

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnSuppr')) {
        let divParente = event.target.parentNode;
        divParente.remove();
        nbChoix -= 1
    }
});

function getValSelect(){
    let tab = []
    document.querySelectorAll("select").forEach((val) =>
        tab.push(val.value)
    )
    return tab
}

function etatButAjout(sel){
    if (sel.value !== "Choisir une date") {
        if (nbChoix != listeSpect.length){
            document.querySelector("#btnAjout").style.display = "block";
        }
    }else {
        document.querySelector("#btnAjout").style.display = "none";
    }
}


function choixOption(choix) {
    const tab = getValSelect();
    const tabExist = [];
    choix.querySelectorAll("option").forEach(val => {
        if (val.value !== "Choisir une date") {
            tabExist.push(val.value);
        }
    });
    for (let i = 0; i < listeSpect.length; i++) {
        if (!tab.includes(listeSpect[i]) && !tabExist.includes(listeSpect[i])) {
            let newOption = document.createElement('option');
            newOption.className = "optionChoix";
            newOption.value = listeSpect[i];
            newOption.textContent = listeSpect[i];
            choix.appendChild(newOption);
        }
    }
}
