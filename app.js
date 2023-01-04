const cont = document.querySelector('section')
const pic = document.querySelector('#pic')
const right = document.querySelector('.right-side')
const left = document.querySelector('.left-side')
const moonBtn = document.querySelector('#moon-btn')
const marsBtn = document.querySelector('#mars-btn')
const europaBtn = document.querySelector('#europa-btn')
const titanBtn = document.querySelector('#titan-btn')
const moonName = document.querySelector('#moonName')
const paragraph = document.querySelector('#moonPar')
const  time= document.querySelector('#moonTime')
const day = document.querySelector('#moonday')
const btn = document.querySelector('a')

const handleClick = () => {
         marsBtn.onclick = function(){
             moonName.innerHTML = "mars"
             pic.src = "./images/image-mars.png"
             paragraph.innerHTML = " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ";
             time.innerHTML = "225 MIL.kms"
             day.innerHTML= "9 months"
    }
         moonBtn.onclick = function(){
             moonName.innerHTML = "moon"
             pic.src = "./images/image-moon.png"
             paragraph.innerHTML = " See our planet as you’ve never seen it before. A perfect relaxing trip  away to help regain perspective and come back refreshed. While you’re there, take in some history  by visiting the Luna 2 and Apollo 11 landing sites. ";
    }
         europaBtn.onclick = function(){
             moonName.innerHTML = "europa"
             pic.src = "./images/image-europa.png"
             paragraph.innerHTML = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a  winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey,  or simple relaxation in your snug wintery cabin. ";
             time.innerHTML = "628 MIL.kms"
             day.innerHTML= "3 years"

    }
         titanBtn.onclick = function(){
             moonName.innerHTML = "titan"
             pic.src = "./images/image-titan.png"
             paragraph.innerHTML = " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. ";
             time.innerHTML = "1.6 BILL.km"
             day.innerHTML= "7 years"

    }
    
  }
 cont.addEventListener("click",handleClick)




 //crew page
 var holder = document.querySelector ('.left_side')
 var span = document.querySelector('#span')
 var post = document.querySelector('#post')
 var firstName = document.querySelector('#name')
 var biograph = document.querySelector('#brief')
 var image = document.querySelector('#pic-one')
 var btnOne = document.querySelector('#circle-one')
 var btnTwo = document.querySelector('#circle-two')
 var btnThree = document.querySelector('#circle-three')
 var btnFour = document.querySelector('#circle-four')
 var button = document.querySelector ('a')

 const buttonClick = () =>{
    btnTwo.onclick = function (){
        post.innerHTML = "MISSION SPECIALIST"
        span.innerHTML = "02"
        biograph.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        firstName.innerHTML = "MARK SHUTTLEWORTH"
        image.src = "./assets/crew/image-mark-shuttleworth.png"
    }
    
    btnOne.onclick = function (){
        post.innerHTML = "COMMANDER"
        span.innerHTML = "01"
        biograph.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        firstName.innerHTML = "Douglas Hurley"
        image.src = "./assets/crew/image-douglas-hurley.png"
    }
    btnThree.onclick = function (){
        post.innerHTML = "PILOT"
        span.innerHTML = "03"
        biograph.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        firstName.innerHTML = "VICTOR GLOVER"
        image.src = "./assets/crew/image-victor-glover.png"
    }
    btnFour.onclick = function (){
        post.innerHTML = "FLIGHT ENGINEER"
        span.innerHTML = "04"
        biograph.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        firstName.innerHTML = "ANOUSHEH ANSARI"
        image.src = "./assets/crew/image-anousheh-ansari.png"
        firstName.style.width = "130%" 
        firstName.style.fontSize = "2.2rem" 
    }
 }
 holder.addEventListener("click" , buttonClick)


//  techPage
const list = document.querySelector ('.list_circle')
const CbtnOne = document.querySelector ('#circleOne')
const CbtnTwo = document.querySelector ('#circleTwo')
const CbtnThree = document.querySelector ('#circleThree')
const launch = document.querySelector ('#launch')
const paraterm = document.querySelector ('#paraterm')
const picTerm = document.querySelector ('#pic-term')


const circleClick = () => {
    CbtnOne.onclick = function (){
        launch.innerHTML = "Launch vehicle"
        paraterm.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        picTerm.src = "./assets/technology/image-launch-vehicle-portrait.jpg"
    }
    CbtnTwo.onclick = function (){
        launch.innerHTML = "SPACESPORT"
        paraterm.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        picTerm.src = "./assets/technology/image-spaceport-portrait.jpg"
    }
    CbtnThree.onclick = function (){
        launch.innerHTML = "SPACE CAPASULE"
        
        paraterm.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        picTerm.src = "./assets/technology/image-space-capsule-portrait.jpg"
    }
}
list.addEventListener("click" , circleClick)