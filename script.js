const backToTop = document.getElementById("back_to_top_button");

backToTop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});