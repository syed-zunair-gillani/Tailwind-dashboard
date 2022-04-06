let openmenu = document.querySelector('.openmenu');

function OpenNavMenu(){
    openmenu.classList.remove("-left-72");
    openmenu.classList.add("left-0");
}

function CloseNav(){
    openmenu.classList.remove("left-0");
    openmenu.classList.add("-left-72");
}

