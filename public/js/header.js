window.addEventListener("load", function(){

    let desplegable = document.querySelector(".categoria");
    let uldesplegable = this.document.querySelector(".desplegable-front")

    desplegable.addEventListener("mouseover", function(){
        uldesplegable.style.zIndex = 1
        uldesplegable.style.opacity = 0.8
    })

    desplegable.addEventListener("mouseout", function(){
        uldesplegable.style.zIndex = -1
        uldesplegable.style.opacity = 0;
    })

    uldesplegable.addEventListener("mouseover", function(){
        uldesplegable.style.zIndex = 1
        uldesplegable.style.opacity = 0.8
    })

    uldesplegable.addEventListener("mouseout", function(){
        uldesplegable.style.zIndex = -1
        uldesplegable.style.opacity = 0
    })

    uldesplegable.addEventListener("mouseover", function(){
        desplegable.style.backgroundColor = "rgba(255, 136, 0, 0.8)"
    })

    uldesplegable.addEventListener("mouseout", function(){
        desplegable.style.backgroundColor = "rgb(3, 3, 44)"
    });

});

window.addEventListener("load", function(){

    let pUser = document.querySelector(".pUser")
    let user = document.querySelector(".header-user");
    let dashboard = this.document.querySelector(".dashboard");


    user.addEventListener("mouseover", function(){
        dashboard.style.zIndex = 1
        dashboard.style.opacity = 0.8
    })

    user.addEventListener("mouseout", function(){
        dashboard.style.zIndex = -1
        dashboard.style.opacity = 0;
    })

    dashboard.addEventListener("mouseover", function(){
        dashboard.style.zIndex = 1
        dashboard.style.opacity = 0.8
    })

    dashboard.addEventListener("mouseout", function(){
        dashboard.style.zIndex = -1
        dashboard.style.opacity = 0
    })

    dashboard.addEventListener("mouseover", function(){
        pUser.style.backgroundColor = "rgba(255, 136, 0, 0.8)"
    })

    dashboard.addEventListener("mouseout", function(){
        pUser.style.backgroundColor = "rgb(3, 3, 44)"
    })
})