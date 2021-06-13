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



toggle()