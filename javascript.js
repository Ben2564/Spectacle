let b = document.body
let btnAjout = document.getElementById('btnAjout')
let taille = 1
let nbChoix = 1
let spectacle = ["Un jour", "Deux jours", "Trois jours", "Quatres jours"]

let newDiv = document.createElement('div')
let newP = document.createElement('p')
let newSel = document.createElement('select')
for(let i = 0; i < spectacle.length; i++){
    let newOption = document.createElement('option')
    newSel.append(newOption)
}
newDiv.id = "div" + (Number(taille))
newDiv.className = "divChoix"
newP.textContent = "Bonjour"
newDiv.append(newP)
newDiv.append(newSel)
b.insertBefore(newDiv,btnAjout)

btnAjout.addEventListener("click",function (){
    let newDiv = document.createElement('div')
    let newP = document.createElement('p')
    let newButton = document.createElement('button')
    let newSel = document.createElement('select')
    for(let i = 0; i < spectacle.length; i++){
        let newOption = document.createElement('option')
        newSel.append(newOption)
    }
    newDiv.id = "div" + (Number(taille)+1)
    newButton.id = "btnSuppr" + taille
    taille += 1
    nbChoix += 1
    newDiv.className = "divChoix"
    newButton.className = "btnSuppr"
    newButton.type = "button"
    newButton.innerHTML = "Supprimer la réservation"
    newP.textContent = "Bonjour"
    newDiv.append(newP)
    newDiv.append(newSel)
    newDiv.append(newButton)
    b.insertBefore(newDiv,btnAjout)
    if (nbChoix == spectacle.length){
        btnAjout.style.display = "none"
    }
})


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