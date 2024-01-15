let form = document.querySelector("#formulaire")
let btnAjout = document.getElementById('btnAjout')
let taille = 1
let nbChoix = 0
const listeSpect = ["Un jour", "Deux jours", "Trois jours", "Quatres jours"]
function getSpec() {
    spe = listeSpect
    let sel = document.querySelectorAll("select")
    sel.forEach((element) => {
        console.log(spe.includes(element.value))
        if(spe.includes(element.value)){
            spe = listeSpect.filter(ele => ele !== element.value )
        }
        console.log(spe.includes(element.value))
    });
    return spe
}

ajoutDiv()

btnAjout.addEventListener("click",function (){
    ajoutDiv()
})

function ajoutDiv(){
    spectacle = getSpec()
    let newDiv = document.createElement('div')
    let newP = document.createElement('p')
    let newButton = document.createElement('button')
    let newSel = document.createElement('select')
    // newSel.id = 
    let newLabelSel1 = document.createElement('label')
    newLabelSel1.htmlFor="selectOption"+ (Number(taille))
    newLabelSel1.textContent = "Choix de la date : "
    let newLabelSel2 = document.createElement('label')
    newLabelSel2.htmlFor="input"+ (Number(taille))
    newLabelSel2.textContent = "Nombre de place : "
    let newOption = document.createElement('option')
    newSel.append(newOption)
    newOption.className = "optionChoix"
    newOption.value = "Choisir une date"
    newOption.textContent = "Choisir une date"
    for(let i = 0; i < spectacle.length; i++){
        let newOption = document.createElement('option')
        newSel.append(newOption)
        newOption.className = "optionChoix"
        newOption.value = spectacle[i]
        newOption.textContent = spectacle[i]
    }
    let newInput = document.createElement('input')
    newInput.type = "number"
    newInput.value = 1
    newInput.min = 1
    newInput.max = 20
    // if(taille == 1){
    //     newInput.id = "input" + (Number(taille))
    //     newDiv.id = "div" + (Number(taille))
    // }else{
    //     newInput.id = "input" + (Number(taille)+1)
    //     newDiv.id = "div" + (Number(taille)+1)
    // }
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
    if(taille >2){
        newButton.className = "btnSuppr"
        newButton.type = "button"
        newButton.innerHTML = "Supprimer la réservation"
        newDiv.append(newButton)
        if (nbChoix == listeSpect.length){
            btnAjout.style.display = "none"
        }
    }
    form.insertBefore(newDiv,btnAjout)
}

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnSuppr')) {
        let divParente = event.target.parentNode;
        divParente.remove();
        if (nbChoix == spectacle.length){
            btnAjout.style.display = "block"
        }
        nbChoix -= 1
    }
});