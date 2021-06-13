const toggle = () => {
    $("#switch").click(()=>{
        if ($("#icon").hasClass("fa-sun")){
            setDarkMode()
            localStorage.setItem("mode","dark");
        }
        else{
            setLightMode()
            localStorage.setItem("mode","light");
        }
    })
}


const setLightMode = () =>{
    $("#icon").toggleClass("fa-sun")
    $("#icon").css("color", "orange")
    $("html").css("background-color", "white")
    $("p, #skills span").css("color", "black")
}

const setDarkMode = () => {
    $("#icon").toggleClass("fa-moon")
    $("#icon").css("color", "yellow")
    $("html").css("background-color", "#181818")
    $("p, #skills span").css("color", "white")
}


toggle()