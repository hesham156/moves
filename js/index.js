var data = [
    {
        name:'Game of Thrones',
        img :'./img/0.jpg',
        describtion:'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        creators:'David Benioff - D.B. Weiss',
        stars:'Emilia Clarke - Peter Dinklage - Kit Harington',
        rate:'9.2',
        video:'tWuPu3GL2jY'
    },
    {
        name:'La casa de papel',
        img :'./img/1.jpg',
        describtion:'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
        creators:'Álex Pina',
        stars:'Úrsula Corberó - Álvaro Morte - Itziar Ituño',
        rate:'8.2',
        video:'AaLoOzI26YA',
    },
    {
        name:'Vikings',
        img :'./img/2.jpg',
        describtion:'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
        creators:'Michael Hirst',
        stars:'Katheryn Winnick - Gustaf Skarsgård - Alexander Ludwig',
        rate:'8.5',
        video:'bRrK8h6R4hI'
    },
    {
        name:'Breaking Bad',
        img :'./img/3.jpg',
        describtion:'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
        creators:'Vince Gilligan',
        stars:'Bryan Cranston - Aaron Paul - Anna Gunn',
        rate:'9.4',
        video:'jj35CalTYeE'
    },
    {
        name:'Squid Game',
        img :'./img/4.jpg',
        describtion:'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes . A survival game that has a whopping 45.6 billion-won prize at stake.',
        creators:'',
        stars:'Lee Jung-jae - Park Hae-soo - Masoud Sepahi',
        rate:'8.0',
        video:'sH4Y450PSVM'
    },
    {
        name:'The Blacklist',
        img :'./img/5.jpg',
        describtion:'A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.',
        creators:'Jon Bokenkamp',
        stars:'James Spader - Megan Boone - Diego Klattenhoff',
        rate:'8.0',
        video:'Ed4WezawtgM'
    },
    {
        name:'The Walking Dead',
        img :'./img/6.jpg',
        describtion:'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.',
        creators:'Frank Darabont',
        stars:'Andrew Lincoln - Norman Reedus - Melissa McBride',
        rate:'8.1',
        video:'sH4Y450PSVM'
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
    }}
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
const fco = ()=>{
    const fo =document.getElementById('foot-con');
for(let n = 0 ;n<data.length;n++){
const li = document.createElement('li')
li.onclick= ()=>{chbg(n)}
li.innerHTML=`<a href="#Home"> ${data[n].name} </a>`
fo.appendChild(li)}
}
const chbg = (i)=>{
        const bgimg = document.getElementById('bgimg');
        const info = document.getElementById('info');
        info.innerHTML =`
        <div>
              <h2> ${data[i].name}</h2>
            <br>
               ${data[i].describtion}
             <br>
            <span> Creators : </span>
               ${data[i].creators}
            <br>
             <span> Stars : </span>
              ${data[i].stars} 
            <br>
            <span> Rate : </span>
              ${data[i].rate}
            <i class="fas fa-star"></i>
        </div>
        <div>
         <button onclick="card(${i})"><i class="fas fa-shopping-cart"></i></button>
         <button><i class="fas fa-heart"></i></button>
         </div>`
        bgimg.style.backgroundImage=`url(${data[i].img})`
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
chbg(0)
showdata()
chan(0,8,'active')
chan(11,17,'act')
vi()
fco()



document.location.hash='Home'
}
const card = (i)=>{
    if(localStorage.getItem(i)===null){
    localStorage.setItem(i,i)
    window.location.reload()
   }
}
const showdata = ()=>{
    const Putchese = document.getElementById('Card');
    if(localStorage.length!==0){
    for(let nn = 0 ; nn<data.length;nn++){
        if(localStorage.getItem(nn)!==null){
        var nump = JSON.parse(localStorage.getItem(nn))
        const div =   document.createElement('div')
        const div1 =   document.createElement('div')
        const box =   document.createElement('div')


        div.classList.add('cardd','face')
        div1.classList.add('face','bake')
        box.classList.add('box')
        div1.innerHTML=`<div><h4>${data[nump]?data[nump].name:' ' }</h4>
        <p>
        ${data[nump]?data[nump].rate:' ' }
        <i class="fas fa-star"></i>
        </p> </div>
        <div><button onclick="remo(${nump})">remove</button></div>
        `

        div.style.backgroundImage = `url(${data[nump]?data[nump].img:''})`
        box.appendChild(div); 
        box.appendChild(div1); 
        Putchese.appendChild(box); 

       }
       }}else{
           Putchese.innerHTML='<div class="w-100 text-center">card is impty</div>'
       }
}
const remo = (idd)=>{
    localStorage.removeItem(idd)
    window.location.reload();
}
const sw = (idd ,ro) =>{
    var v = document.getElementById(idd);
    var r =document.getElementById(ro);
    if(v.style.height===''||v.style.height==='0px'){
        v.style.height=idd==='menu'?"170px":"250px";
        v.style.overflow='hidden'
        r.style.transform="rotate(-90deg)"
    }
    else if(v.style.height='250px') {
      v.style.height='0px'
      r.style.transform = "rotate(0deg)"

    }
  
}
const foot = ()=>{
    const footer = document.getElementById('footer')
    const btn = document.getElementById('btn-f')


    if(footer.style.height===''||footer.style.height==='0px'){
        footer.style.height='300px'
        btn.style.bottom='300px'
        btn.style.transform="rotate(180deg)"
        
    }else if(footer.style.height==='300px'){
        footer.style.height='0px';
        btn.style.bottom='0px'
        btn.style.transform="rotate(0deg)"
    }

}
const vi = ()=>{
   const v = document.getElementById('vi')
   for(let i = 0 ; i<data.length;i++){
       const div = document.createElement('div')
      const ifram = document.createElement('iframe')
      div.classList.add('center')
   ifram.src=`https://www.youtube.com/embed/${data[i].video}`
   ifram.width='350'
   ifram.height='400'
   ifram.title="YouTube video player"
   ifram.frameborder="0"
   ifram.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   ifram.allowFullscreen=true
   div.appendChild(ifram)
   v.appendChild(div)
   }
}