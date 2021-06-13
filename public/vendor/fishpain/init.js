console.log("")
console.log("%cIf you see this, it's most likely that you know what you are doing.", 'font-size: 24px; font-weight: bold; font-family: IBM Plex Sans; color: black;');
console.log("%cBut there's nothing to see here, so go away.\n ヘ(゜Д、゜)ノ", 'font-size: 24px; font-family: IBM Plex Sans; font-weight: regular; color: black;');
console.log("")


const setLightMode = () =>{
    $("#icon").toggleClass("fa-sun")
    $("html").css("background-color", "white")
    $("span, p").css("color", "black")
}

const setDarkMode = () => {
    $("#icon").toggleClass("fa-moon")
    $("html").css("background-color", "#181818")
    $("span, p").css("color", "white")
}

const loadDefaultMode = () =>{
    if(localStorage.getItem('mode') == 'dark'){
        setDarkMode()
    }
    else{
        setLightMode()
    }
}

loadDefaultMode()