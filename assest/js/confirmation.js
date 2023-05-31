
function x(){
    document.getElementById("speach").innerHTML=""
    new TypeIt("#speach", {
        strings: ["You have successfully registered .", "We will contact you soon."],
        speed: 50,
        waitUntilVisible: true,
      }).go();
}
x()
setInterval(x,7000)