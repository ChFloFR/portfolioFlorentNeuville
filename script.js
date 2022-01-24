const navButton = document.querySelectorAll("header nav button");
// tous les boutons du menu nav de l'entête

navButton.forEach((button)=>{
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("activeMenu") || !e.target.classList.contains("onlyIt")){
            window.location.href= e.target.dataset.href;
        }
        navButton.forEach((btn)=>{
            btn.classList.remove("activeMenu");
        })
        e.target.classList.toggle("activeMenu");
    })
})
