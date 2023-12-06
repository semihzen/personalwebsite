function firstShow() {
    var elements = document.querySelectorAll(".myfirstText");
    elements.forEach(function(element) {
        element.style.opacity = 1;
    });
}


setTimeout(firstShow, 50); 
function showText() {
    var elements = document.querySelectorAll(".myText");
    elements.forEach(function(element) {
        element.style.opacity = 1;
    });
}


setTimeout(showText, 550); 
function showText2() {
    var elements = document.querySelectorAll(".fadeIn");
    elements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        // Element, sayfa içinde görünürse opaklığı artır
        if (elementPosition < screenHeight) {
            element.style.opacity = 1;
        }
    });
}


document.addEventListener("scroll", function() {
    showText2();
});




   
