console.log(window.innerWidth)
const max = 980
const adaptive = 768
const minimum = 320
const header = document.querySelector("header")
const navHeader = document.querySelector(".navMenu")
const logo = document.querySelector(".logo")
const textStart = document.querySelector(".text-start")
const textStartBottom = document.querySelector(".text-start-bottom")
const menu = ()=>{

    header.classList.toggle("maxWidth")
    const menuBlock = document.querySelector(".menu")
    const nav = document.querySelector(".nav")
    navHeader.classList.toggle("backMenu")
    const navDiv = document.querySelector(".navDiv")
    if(menuBlock.classList.contains("hidemenu")){
        logo.style.display = "none";
        menuBlock.src = "./assets/menu-button-cancel.svg"
        nav.classList.remove("hide")
        menuBlock.classList.toggle("hidemenu")
        header.classList.toggle("menuOn")
        navDiv.style.transform = "translateY(-80px)"
        setTimeout(()=>{
            navDiv.style.transition = "all 0.4s ease"
            navDiv.style.transform = "translateY(0px)"
            setTimeout(()=>{
                navDiv.style.transition = ""
            },100)
        },1)
    }else{
        logo.style.display = "block";
        menuBlock.src = "./assets/menu-button.svg"
        nav.classList.add("hide")
        menuBlock.classList.toggle("hidemenu")
        header.classList.toggle("menuOn")
    }
}
const checkWindowWidth = ()=>{
    if(window.innerWidth > max){
        header.classList.remove("maxWidth")
        logo.style.display = "block";
        navHeader.classList.remove("backMenu")
        navHeader.innerHTML=`
    <nav class="white">
        <a href="#">#ОбнимаяСJoonies</a>
        <a href="#">сенсорное развитие</a>
        <a href="#">возраст вашего ребенка</a>
        <a href="#">Исследование</a>
        <a href="#">О бренде Joonies</a>
    </nav>
    `
    }else if(!document.querySelector(".menu")){
        navHeader.innerHTML=`
    <div class="menuBlock"><img onclick="menu()" class="menu hidemenu" src="./assets/menu-button.svg" alt="menu" ></div>
    <div class="navDiv">
        <ul class="nav hide">
            <li><a href="#">#ОбнимаяСJoonies</a></li>
            <li><a href="#">сенсорное развитие</a></li>
            <li><a href="#">возраст вашего ребенка</a></li>
            <li><a href="#">Исследование</a></li>
            <li><a href="#">О бренде Joonies</a></li>
        </ul>
    </div>
    `
    }
    if(window.innerWidth <= minimum){
        textStart.textContent = "Joonies помогает родителям лучше понимать и чувствовать своего ребенка на ранних этапах его развития"
        textStartBottom.textContent = "С первых дней жизни малыши находятся в объятиях мягких подгузников Joonies. Каждая смена подгузника сопровождается прикосновениями, которые положительно влияют на развитие всех сенсорных систем ребенка."
    }
}
window.addEventListener('resize',()=>{
    checkWindowWidth()
})
checkWindowWidth()
