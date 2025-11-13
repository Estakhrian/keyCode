let $ = document
let locationKey = $.querySelector("#location")
let title = $.querySelector("title")

let keyCodeELem = $.getElementById("keyCode")
let keyELem = $.getElementById("key")
let locationELem = $.getElementById("location")
let whichELem = $.getElementById("which")
let codeELem = $.getElementById("code")

document.body.addEventListener("keydown", (event) => {
    event.preventDefault()

    starter.style.display = "none"
    heading.style.display = 'flex'
    ascii.style.display = 'flex'
    infos.style.display = 'flex'

    let eventKeyCode = event.keyCode
    let eventKey = event.key
    let eventLocation = event.location
    let eventWhich = event.which
    let eventCode = event.code

    keyCodeELem.innerHTML = eventKeyCode
    keyELem.innerHTML = eventKey
    locationELem.innerHTML = eventLocation
    whichELem.innerHTML = eventWhich
    codeELem.innerHTML = eventCode

})