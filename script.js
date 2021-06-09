$(".link").click(function(){
    let element = event.target;
    $(".link").removeClass("active")
    $(element).addClass("active")
    setTimeout(() => {
    $(".link").removeClass("active")
    }, 1500);
})