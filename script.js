function gitar(){
    var initialPath=`M 10 100 Q 800 100  990 100`;
var path=`M 10 100 Q 800 100  990 100`;

var str=document.querySelector("#string")

str.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y}  990 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})


str.addEventListener("mouseleave",function(dets){
    // path=`M 10 100 Q 500 ${dets.y}  990 100`
    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
}
gitar();
function breakTheText() {
    var h1 = document.querySelector("#hero h1")
    var text=h1.textContent
    var splitTxt = text.split("")
    var clutter = ""
    var half = splitTxt.length / 2

    splitTxt.forEach(function (elem, indx){
        if (indx < half) {
            clutter += `<span class="a">${elem}</span>`
        }
        else {
            clutter += `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter
}
function page1() {
    var menu = document.querySelector("nav i")
    var cross = document.querySelector("#full i")
    var tl = gsap.timeline()

    tl.to("#full", {
        right: 0,
        dutation: 0.2
    })

    tl.from("#full h4,hr", {
        x: 150,
        duration: 0.2,
        stagger: 0.2,
        opacity: 0
    })
    tl.from("#full i", {
        opacity: 0,
    })
    tl.pause()
    menu.addEventListener("click", function () {
        tl.play()
    })
    cross.addEventListener("click", function () {
        tl.reverse()
    })
}
function page2() {
    var cursor = document.querySelector("#cursor")
    var main = document.querySelector("#main")
    var imageDiv = document.querySelector("#image")
    main.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,

            // ease:"steps"
        })
    })

    imageDiv.addEventListener("mouseenter", function () {
        cursor.innerHTML = "View more"

        gsap.to(cursor, {
            scale: 4,
            mixBlendMode: "normal",
            backgroundColor: "#ffffff5c"
        })
    })
    imageDiv.addEventListener("mouseleave", function () {
        cursor.innerHTML = ""
        gsap.to(cursor, {
            scale: 1,
            mixBlendMode: "difference",
            backgroundColor: "white"
        })
    })
}

page1()
page2()
breakTheText();
gsap.from("#hero h1 .a",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0

})
gsap.from("#hero h1 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0

})

