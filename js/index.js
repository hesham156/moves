var data = [
    {
        name:'Game of Thrones',
        describtion:'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        creators:'David Benioff - D.B. Weiss',
        stars:'Emilia Clarke - Peter Dinklage - Kit Harington',
        rate:'9.2/10',
    },
    {
        name:'La casa de papel',
        describtion:'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
        creators:'Álex Pina',
        stars:'Úrsula Corberó - Álvaro Morte - Itziar Ituño',
        rate:'8.2/10'
    },
    {
        name:'Vikings',
        describtion:'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
        creators:'Michael Hirst',
        stars:'Katheryn Winnick - Gustaf Skarsgård - Alexander Ludwig',
        rate:'8.5/10'
    },
    {
        name:'Breaking Bad',
        describtion:'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
        creators:'Vince Gilligan',
        stars:'Bryan Cranston - Aaron Paul - Anna Gunn',
        rate:'9.4/10'
    },
    {
        name:'Squid Game',
        describtion:'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes . A survival game that has a whopping 45.6 billion-won prize at stake.',
        creators:'',
        stars:'Lee Jung-jae - Park Hae-soo - Masoud Sepahi',
        rate:'8.0/10',
    },
]


var lim =document.getElementsByTagName('li');
const show = ()=>{
    const side = document.getElementById('side');
    const icon = document.getElementById('icon');
     icon.style.transform !== "rotate(0deg)" ?icon.style.transform="rotate(0deg)":icon.style.transform="rotate(90deg)"
    side.style.height ===''?side.style.height="100vh":side.style.height='' 
}
const notf = (cls)=>{
    const notf = document.getElementById(cls)
   if(notf.style.height==="0px"){
       notf.style.height="112px"
       notf.style.border = "1px solid black"
       if(cls === "msg"){
        document.getElementById("notf").style.height="0px"
        document.getElementById("notf").style.border="0px"

       }else{
        document.getElementById("msg").style.height="0px"
        document.getElementById("msg").style.border="0px"

       }
       

    }else{
        notf.style.height="0px"
        notf.style.border = "0px"

    }

}
const chan = (fromn,ton,clas)=>{
    for(let i = fromn; i<ton;i++){
        var ur = document.location.hash.replace('#','')

        ur === lim[i].textContent?lim[i].classList.add(clas):lim[i].classList.remove(clas)

    }
}
onhashchange = ()=>{

    chan(0,8,'active')
    chan(11,17,'act')


}
   

const scp = (z)=>{
    var m = document.getElementById('overl');
    var left = m.scrollLeft ;
    switch (z){
        case '+':
            left =  left+200;
            
         break;
        case '-':
            left = left-200;
          break;
        default:
            left = m.scrollLeft;
    }
m.scroll({
    left : left,
  behavior: 'smooth'
})}

const chbg = (i)=>{
        const bgimg = document.getElementById('bgimg');
        const info = document.getElementById('info');
        info.innerHTML ='<div>'
         + '<h2>'+ data[i].name +'</h2>'+'<br>'
         + data[i].describtion + '<br>'  +
         data[i].creators + '<br>'  + data[i].stars + '<br>' + data[i].rate + '</div>'

        bgimg.style.backgroundImage="url('./img/"+i+".jpg')"
        var c =document.getElementById('sh').children;
        for(let x = 0;x<c.length;x++){
            c[x].classList.remove('actimg')
            
        }
        c[i].classList.add('actimg')

    }

onload = ()=>{
var c =document.getElementById('sh').children;
for(let i =0;i<c.length;i++){
    c[i].style.backgroundImage="url('./img/"+i+".jpg')"
    c[i].setAttribute('onclick',`chbg(${i})`)
}
chan(0,8,'active')
chan(11,17,'act')
chbg(0)
document.location.hash='Home'

}
