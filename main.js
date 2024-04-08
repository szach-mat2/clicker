// bonusy chwilowe, balans

let click = document.getElementById('click')
let count = document.getElementById('count')
let cont = document.querySelector('.cont')
// let container = document.querySelector('.container')
let reset = document.querySelector('#reset')
let popup = document.querySelector('.popup')
let bps = document.querySelector('#bps')
let start = document.querySelector('.start')
let pan_1 = document.querySelector('.pan_1')
let pan_2 = document.querySelector('.pan_2')
let pan_3 = document.querySelector('.pan_3')
let pan_4 = document.querySelector('.pan_4')
let pan_5 = document.querySelector('.pan_5')
let pan_6 = document.querySelector('.pan_6')
let pan_7 = document.querySelector('.pan_7')
let pan_8 = document.querySelector('.pan_8')
let pan_9 = document.querySelector('.pan_9')
let pan_10 = document.querySelector('.pan_10')
let gpu256 = document.querySelector('.gpu256')
let ilegpu = document.querySelector('.ilegpu')
let vent = document.querySelector('.vent')
let ilevent = document.querySelector('.ilevent')
let ssd = document.querySelector('.ssd')
let ilessd = document.querySelector('.ilessd')
let gpu3 = document.querySelector('.gpu3')
let ilegpu3 = document.querySelector('.ilegpu3')
let ultravent = document.querySelector('.ultravent')
let ileultravent = document.querySelector('.ileultravent')
let gtx260 = document.querySelector('.gtx260')
let ilegtx260 = document.querySelector('.ilegtx260')
let ssdsam = document.querySelector('.ssdsam')
let ilessdsam = document.querySelector('.ilessdsam')
let gtx950 = document.querySelector('.gtx950')
let ilegtx950 = document.querySelector('.ilegtx950')
let opk = document.querySelector('.opk')
let ileopk = document.querySelector('.ileopk')
let rtx = document.querySelector('.rtx')
let ilertx = document.querySelector('.ilertx')
let ascend_bar = document.querySelector('.ascend_bar')
let ascendbut = document.querySelector('#ascendbut')
let insidepercent = document.querySelector('#insidepercent')

let basevent=1.5
let incvent=0.5
let incssd=2
let incultravent = 50
let incssdsam = 300
let incopk = 20_000
let maxvent=6
let lgasc=0

let fadeTime = 4
let audiocash = new Audio('audio/cash.mp3')
audiocash.volume = 0.2
let audioclick = new Audio('audio/click.mp3')
audioclick.volume = 0.2
randTime=60_000
setInterval(randomBonus,randTime)
if(localStorage.startcount==0){
    popup.innerHTML = 'Zacznij grę'
    setTimeout(fadeAway,4*1000)
    popup.style.animation = `fadeAway ${4}s`
}
// start.addEventListener('click', () =>{
//     localStorage.startcount++
// })
if(localStorage.startcount<1){
    localStorage.ascMultiplier=1
    localStorage.ilegpu=0
    localStorage.ilevent=0
    localStorage.ilessd=0
    localStorage.ilegpu3=0
    localStorage.ileultravent=0
    localStorage.ilegtx260=0
    localStorage.ilessdsam=0
    localStorage.ilegtx950=0
    localStorage.ileopk=0
    localStorage.ilertx=0
    localStorage.gpuval=1
    localStorage.gpu3val=10
    localStorage.gtx260val=200
    localStorage.gtx950val=4000
    localStorage.rtxval=1_000_000
    localStorage.gpucost=100
    localStorage.ventcost=50
    localStorage.ssdcost=750
    localStorage.gpu3cost=2_500
    localStorage.ultraventcost=20_000
    localStorage.gtx260cost=60_000
    localStorage.ssdsamcost=300_000
    localStorage.gtx950cost=2_000_000
    localStorage.opkcost=20_000_000
    localStorage.rtxcost=100_000_000
    localStorage.clickcount=0
    localStorage.startcount++
    localStorage.baseiterator=1
}
pan_1.innerHTML =`${FCM(Math.round(Number(localStorage.ventcost)*10)/10)} <br> Wentylacja +${incvent} click`
pan_2.innerHTML = `${FCM(Number(localStorage.gpucost))} <br> GeForce 256 +${localStorage.gpuval}₿ps`
pan_3.innerHTML =`${FCM(Math.round(Number(localStorage.ssdcost)*10)/10)} <br> SSD Patriot +${incssd} click`
pan_4.innerHTML = `${FCM(Number(localStorage.gpu3cost))} <br> GeForce 3 +${localStorage.gpu3val}₿ps`
pan_5.innerHTML =`${FCM(Math.round(Number(localStorage.ultraventcost)*10)/10)} <br> Ultra Wentylacja +${incultravent} click`
pan_6.innerHTML = `${FCM(Number(localStorage.gtx260cost))} <br> GTX 260 +${localStorage.gtx260val}₿ps`
pan_7.innerHTML =`${FCM(Math.round(Number(localStorage.ssdsamcost)*10)/10)} <br> Samsung 870 +${incssdsam} click`
pan_8.innerHTML = `${FCM(Number(localStorage.gtx950cost))} <br> GTX 950 +${localStorage.gtx950val}₿ps`
pan_9.innerHTML =`${FCM(Math.round(Number(localStorage.opkcost)*10)/10)} <br> OP koparka +${incopk} click`
pan_10.innerHTML = `${FCM(Number(localStorage.rtxcost))} <br> RTX 3080 +${localStorage.rtxval}₿ps`

count.innerHTML = Math.round(Number(localStorage.clickcount)*10)/10 +'₿' + ` - ${FCM(Number(localStorage.iterator))}/click (Ascend x${localStorage.ascMultiplier})`
bps.innerHTML = `${localStorage.sumbps} bitcoin'ów na sekundę`

if (sessionStorage.getItem("is_reloaded")){
    setInterval(bpsfuncreload,1000)
    // pan_1.innerHTML =`${Math.round(Number(localStorage.ventcost)*10)/10}<br> Wentylacja +${incvent} click`
    if(localStorage.ilegpu>9){
        gpu256.style.pointerEvents =  'none'
        gpu256.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilevent>9){
        vent.style.pointerEvents =  'none'
        vent.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilessd>19){
        ssd.style.pointerEvents =  'none'
        ssd.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilegpu3>19){
        gpu3.style.pointerEvents =  'none'
        gpu3.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ileultravent>19){
        ultravent.style.pointerEvents =  'none'
        ultravent.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilegtx260>29){
        gtx260.style.pointerEvents =  'none'
        gtx260.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilessdsam>29){
        ssdsam.style.pointerEvents =  'none'
        ssdsam.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilegtx950>29){
        gtx950.style.pointerEvents =  'none'
        gtx950.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ileopk>29){
        opk.style.pointerEvents =  'none'
        opk.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    if(localStorage.ilertx>39){
        rtx.style.pointerEvents ='none'
        rtx.style.backgroundColor = 'rgba(40,40,40,0.7)'
    }
    ilevent.innerHTML = localStorage.ilevent
    ilegpu.innerHTML = localStorage.ilegpu
    ilessd.innerHTML = localStorage.ilessd
    ilegpu3.innerHTML = localStorage.ilegpu3
    ileultravent.innerHTML = localStorage.ileultravent
    ilegtx260.innerHTML = localStorage.ilegtx260
    ilessdsam.innerHTML = localStorage.ilessdsam
    ilegtx950.innerHTML = localStorage.ilegtx950
    ileopk.innerHTML = localStorage.ileopk
    ilertx.innerHTML = localStorage.ilertx
    lgasc = Math.log(parseFloat(localStorage.clickcount))/Math.LN10*11.111
    // console.log(lgasc);
    if(lgasc>=100){
        ascendbut.style.visibility = 'visible'
        ascend_bar.style.height='97%'
    }else{
        ascend_bar.style.height = `${lgasc}%`
    }
    insidepercent.innerHTML=`${Math.round(lgasc*100)/100}%`
} 
sessionStorage.setItem("is_reloaded", 1)

function randomBonus(){
    bitcoin = document.createElement('div')
    bitcoin.style.backgroundImage= 'url("img/favicon.png")'
    bitcoin.style.backgroundSize = 'contain'
    bitcoin.style.width='10vh'
    bitcoin.className='bitcoin'
    bitcoin.style.height='10vh'
    bitcoin.style.position='absolute'
    bitcoin.style.zIndex='2'
    // bitcoin.style.backgroundColor='red'
    bitcoin.style.top=`${Math.random()*window.innerHeight}px`
    bitcoin.style.left=`${Math.random()*window.innerWidth}px`
    bitcoin.addEventListener('click', ()=>{
        randNum = Math.floor(Math.random()*100*localStorage.iterator*10)/10
        localStorage.clickcount=Number(localStorage.clickcount)+randNum
        popup.innerHTML=`Dodano ${randNum} bitcoin'ów`
        // console.log(randNum);
        cont.removeChild(bitcoin)
        setTimeout(fadeAway,fadeTime*1000)
        bitcoin=document.createElement('div');
        cont.appendChild(bitcoin)
        popup.style.animation = `fadeAway ${fadeTime}s`
    })
    
    // bitcoin.style.backgroundColor='red'
    cont.appendChild(bitcoin)
    setTimeout(deletediv,3000)
}
function deletediv(){
    cont.removeChild(bitcoin)
}

function resetasc(){
    localStorage.ilegpu=0
    localStorage.ilevent=0
    localStorage.ilessd=0
    localStorage.ilegpu3=0
    localStorage.ileultravent=0
    localStorage.ilegtx260=0
    localStorage.ilessdsam=0
    localStorage.ilegtx950=0
    localStorage.ileopk=0
    localStorage.ilertx=0
    localStorage.gpuval=1
    localStorage.gpu3val=10
    localStorage.gtx260val=200
    localStorage.gtx950val=4000
    localStorage.rtxval=1_000_000
    localStorage.gpucost=100
    localStorage.ventcost=50
    localStorage.ssdcost=750
    localStorage.gpu3cost=2_500
    localStorage.ultraventcost=20_000
    localStorage.gtx260cost=60_000
    localStorage.ssdsamcost=300_000
    localStorage.gtx950cost=2_000_000
    localStorage.opkcost=20_000_000
    localStorage.rtxcost=100_000_000
}

function FCM(number) {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(2) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(2) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(2) + "t";
    } else if (number >= 1_000_000_000_000_000 && number < 1_000_000_000_000_000_000n) {
        return (number / 1_000_000_000_000_000).toFixed(2) + "q";
    } else if (number >= 1_000_000_000_000_000_000n && number < 1_000_000_000_000_000_000_000n) {
        return (number / 1_000_000_000_000_000_000n).toFixed(2) + "Q";
    }else{
        return number
    }
  }
function fadeAway(){
    popup.innerHTML = ''
}
function bpsfunc(){
    localStorage.sumbps=(localStorage.ilegpu*localStorage.gpuval+localStorage.ilegpu3*localStorage.gpu3val+localStorage.ilegtx260*localStorage.gtx260val+localStorage.ilegtx950*localStorage.gtx950val+localStorage.ilertx*localStorage.rtxval)*localStorage.ascMultiplier  
    bps.innerHTML = `${FCM(Number(localStorage.sumbps))} bitcoin'ów na sekundę`
    localStorage.clickcount= parseFloat(localStorage.clickcount)+parseFloat(localStorage.sumbps)-parseFloat(localStorage.sumbpsreload)
    count.innerHTML=FCM(Math.round(parseFloat(localStorage.clickcount) *10)/10) + '₿' + ` - ${FCM(Number(localStorage.iterator))}/click (Ascend x${localStorage.ascMultiplier})`
    lgasc = Math.log(parseFloat(localStorage.clickcount))/Math.LN10*11.111
    // console.log(lgasc);
    if(lgasc>=100){
    ascendbut.style.visibility = 'visible'
    ascend_bar.style.height='97%'
    }else{
    ascend_bar.style.height = `${lgasc}%`
    }
    insidepercent.innerHTML=`${Math.round(lgasc*100)/100}%`
}
function bpsfuncreload(){
    localStorage.i=0
    if(localStorage.i==0) {
        localStorage.sumbpsreload=(localStorage.ilegpu*localStorage.gpuval+localStorage.ilegpu3*localStorage.gpu3val+localStorage.ilegtx260*localStorage.gtx260val+localStorage.ilegtx950*localStorage.gtx950val+localStorage.ilertx*localStorage.rtxval)*localStorage.ascMultiplier
        localStorage.sumbps=localStorage.sumbpsreload
    }
    bps.innerHTML = `${FCM(Number(localStorage.sumbps))} bitcoin'ów na sekundę`
    localStorage.clickcount=parseFloat(localStorage.clickcount)+parseFloat(localStorage.sumbpsreload)
    count.innerHTML=FCM(Math.round(parseFloat(localStorage.clickcount) *10)/10) + '₿' + ` - ${FCM(Number(localStorage.iterator))}/click (Ascend x${localStorage.ascMultiplier})`
    localStorage.i= parseInt(localStorage.i)+1
    lgasc = Math.log(parseFloat(localStorage.clickcount))/Math.LN10*11.111
    // console.log(lgasc);
    if(lgasc>=100){
        ascendbut.style.visibility = 'visible'
        ascend_bar.style.height='97%'
    }else{
        ascend_bar.style.height = `${lgasc}%`
    }
    insidepercent.innerHTML=`${Math.round(lgasc*100)/100}%`.innerHTML=`${Math.round(lgasc*100)/100}%`
}
function calculateIterator() {
    let iterator = 1;

    if (localStorage.ilevent == 0) {
        if (localStorage.ilessd == 0) {
            if (localStorage.ileultravent == 0) {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseInt(localStorage.baseiterator);
                    } else {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            } else {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ileultravent) * incultravent;
                    } else {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileultravent) * incultravent;
                    } else {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            }
        } else {
            if (localStorage.ileultravent == 0) {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            } else {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            }
        }
    } else {
        if (localStorage.ilessd == 0) {
            if (localStorage.ileultravent == 0) {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            } else {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseInt(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ileultravent) * incultravent;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            }
        } else {
            if (localStorage.ileultravent == 0) {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            } else {
                if (localStorage.ilessdsam == 0) {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ileopk) * incopk;
                    }
                } else {
                    if (localStorage.ileopk == 0) {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ilessdsam) * incssdsam;
                    } else {
                        iterator = parseFloat(localStorage.baseiterator) + parseInt(localStorage.ilevent) * incvent + parseInt(localStorage.ilessd) * incssd + parseInt(localStorage.ileultravent) * incultravent + parseInt(localStorage.ilessdsam) * incssdsam + parseInt(localStorage.ileopk) * incopk;
                    }
                }
            }
        }
    }

    return iterator;
}

click.addEventListener('click', ()=>{
    if(localStorage.startcount==0){
        alert("Zacznij grę")
    }else{
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.iterator = calculateIterator();
                localStorage.clickcount = Number(localStorage.clickcount)+Number(localStorage.iterator)*localStorage.ascMultiplier;
            } else {
                localStorage.clickcount = 0;
            }
            audioclick.play()
            count.innerHTML = FCM(Math.round(parseFloat(localStorage.clickcount) *10)/10) + '₿' + ` - ${FCM(Number(localStorage.iterator))}/click (Ascend x${localStorage.ascMultiplier})`
            lgasc = Math.log(parseFloat(localStorage.clickcount))/Math.LN10*11.111
            console.log(lgasc);
            if(lgasc>=100){
                ascendbut.style.visibility = 'visible'
                ascend_bar.style.height='97%'
            }else{
                ascend_bar.style.height = `${lgasc}%`
                ascendbut.style.visibility = 'hidden'
                ascendbut.className
            }
            insidepercent.innerHTML=`${Math.round(lgasc*100)/100}%`

        }else{
            count.innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
})
ascendbut.addEventListener('click', ()=>{
    if(confirm('Are you Sure?') == true){
        popup.innerHTML = `Pomyślnie zresetowano, otrzymałeś mnożnik x${localStorage.ascMultiplier*2}`
        window.location.reload()
        setTimeout(fadeAway,fadeTime*1000)
        resetasc()
        popup.style.animation = `fadeAway ${fadeTime}s`
        localStorage.iterator=1
        localStorage.clickcount = 0
        localStorage.sumbpsreload=0
        localStorage.sumbps=0
        // localStorage.startcount=0
        localStorage.ascMultiplier*=2
        count.innerHTML = `0₿ (Ascend x${localStorage.ascMultiplier})`
    }
})

reset.addEventListener('click', ()=>{
    if(confirm('Are you sure?') == true){
        popup.innerHTML = 'Pomyślnie zresetowano'
        window.location.reload()
        setTimeout(fadeAway,fadeTime*1000)
        popup.style.animation = `fadeAway ${fadeTime}s`
        localStorage.iterator=1
        localStorage.clickcount = 0
        localStorage.sumbpsreload=0
        localStorage.sumbps=0
        localStorage.startcount=0
        count.innerHTML = `0₿ (Ascend x${localStorage.ascMultiplier})`
    }
})
vent.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.ventcost)){
        if(localStorage.ilevent>9){
            vent.style.pointerEvents =  'none'
            vent.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilevent.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.clickcount-=localStorage.ventcost
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.ventcost}₿ (Ascend x${localStorage.ascMultiplier})`
            localStorage.ventcost=parseInt(localStorage.ventcost)+20
            localStorage.ilevent++
            popup.innerHTML = `Pomyślnie zakupiono wentylację +${Number(localStorage.iterator)+incvent}`
            // popup.style.marginTop = '7vh'
            ilevent.innerHTML = localStorage.ilevent
        }
        if(localStorage.ilevent>9){
            vent.style.pointerEvents =  'none'
            vent.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
        pan_1.innerHTML = `${FCM(Number(localStorage.ventcost))}<br> Wentylacja +${incvent} click`
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})

gpu256.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.gpucost)){
        if(localStorage.ilegpu>9){
            gpu256.style.pointerEvents =  'none'
            gpu256.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilegpu.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.ilegpu++
            localStorage.clickcount-=localStorage.gpucost
            localStorage.gpucost=parseInt(localStorage.gpucost)+40
            // popup.style.marginTop = '7vh'
            pan_2.innerHTML=`${FCM(Number(localStorage.gpucost))}<br> GeForce 256 +${localStorage.gpuval}₿ps`
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.gpucost}₿ (Ascend x${localStorage.ascMultiplier})`
            popup.innerHTML = `Pomyślnie zakupiono gpu (+${localStorage.gpuval})`
            ilegpu.innerHTML = localStorage.ilegpu
        }

        if(localStorage.ilegpu>9){
            gpu256.style.pointerEvents =  'none'
            gpu256.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setInterval(bpsfunc, 1000)
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})

ssd.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.ssdcost)){
        if(localStorage.ilessd>19){
            ssd.style.pointerEvents =  'none'
            ssd.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilessd.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.clickcount-=localStorage.ssdcost
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.ssdcost}₿ (Ascend x${localStorage.ascMultiplier})`
            localStorage.ssdcost=parseInt(localStorage.ssdcost)+50
            localStorage.ilessd++
            popup.innerHTML = `Pomyślnie zakupiono kartę ssd +${Number(localStorage.iterator)+incssd}`
            // popup.style.marginTop = '7vh'
            ilessd.innerHTML = localStorage.ilessd
        }
        if(localStorage.ilessd>19){
            ssd.style.pointerEvents =  'none'
            ssd.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
        pan_3.innerHTML = `${FCM(Number(localStorage.ssdcost))}<br>  SSD Patriot +${incssd} click`
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})
gpu3.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.gpu3cost)){
        if(localStorage.ilegpu3>19){
            gpu3.style.pointerEvents =  'none'
            gpu3.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilegpu3.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.ilegpu3++
            localStorage.clickcount-=localStorage.gpu3cost
            localStorage.gpu3cost=parseInt(localStorage.gpu3cost)+100
            // popup.style.marginTop = '7vh'
            pan_4.innerHTML=`${FCM(Number(localStorage.gpu3cost))}<br> GeForce 3 +${localStorage.gpu3val}₿ps`
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.gpu3cost}₿ (Ascend x${localStorage.ascMultiplier})`
            popup.innerHTML = `Pomyślnie zakupiono gpu (+${localStorage.gpu3val})`
            ilegpu3.innerHTML = localStorage.ilegpu3
        }

        if(localStorage.ilegpu3>19){
            gpu3.style.pointerEvents =  'none'
            gpu3.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setInterval(bpsfunc, 1000)
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})
ultravent.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.ultraventcost)){
        if(localStorage.ileultravent>19){
            ultravent.style.pointerEvents =  'none'
            ultravent.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ileultravent.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.clickcount-=localStorage.ultraventcost
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.ultraventcost}₿ (Ascend x${localStorage.ascMultiplier})`
            localStorage.ultraventcost=parseInt(localStorage.ultraventcost)+2000
            localStorage.ileultravent++
            popup.innerHTML = `Pomyślnie zakupiono wentylację +${Number(localStorage.iterator)+incultravent}`
            // popup.style.marginTop = '7vh'
            ileultravent.innerHTML = localStorage.ileultravent
        }
        if(localStorage.ileultravent>19){
            ultravent.style.pointerEvents =  'none'
            ultravent.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
        pan_5.innerHTML = `${FCM(Number(localStorage.ultraventcost))}<br>  Ultra Wentylacja +${incultravent} click`
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})

gtx260.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.gtx260cost)){
        if(localStorage.ilegtx260>29){
            gtx260.style.pointerEvents =  'none'
            gtx260.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilegtx260.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.ilegtx260++
            localStorage.clickcount-=localStorage.gtx260cost
            localStorage.gtx260cost=parseInt(localStorage.gtx260cost)+10000
            // popup.style.marginTop = '7vh'
            pan_6.innerHTML=`${FCM(Number(localStorage.gtx260cost))}<br> GTX 260 +${localStorage.gtx260val}₿ps`
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.gtx260cost}₿ (Ascend x${localStorage.ascMultiplier})`
            popup.innerHTML = `Pomyślnie zakupiono gpu (+${localStorage.gtx260val})`
            ilegtx260.innerHTML = localStorage.ilegtx260
        }

        if(localStorage.ilegtx260>29){
            gtx260.style.pointerEvents =  'none'
            gtx260.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setInterval(bpsfunc, 1000)
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})
ssdsam.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.ssdsamcost)){
        if(localStorage.ilessdsam>29){
            ssdsam.style.pointerEvents =  'none'
            ssdsam.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilessdsam.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.clickcount-=localStorage.ssdsamcost
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.ssdsamcost}₿ (Ascend x${localStorage.ascMultiplier})`
            localStorage.ssdsamcost=parseInt(localStorage.ssdsamcost)+20_000
            localStorage.ilessdsam++
            popup.innerHTML = `Pomyślnie zakupiono kartę ssd +${Number(localStorage.iterator)+incssdsam}`
            // popup.style.marginTop = '7vh'
            ilessdsam.innerHTML = localStorage.ilessdsam
        }
        if(localStorage.ilessdsam>29){
            ssdsam.style.pointerEvents =  'none'
            ssdsam.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
        pan_7.innerHTML = `${FCM(Number(localStorage.ssdsamcost))}<br>  Samsung 870 +${incssdsam} click`
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})

gtx950.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.gtx950cost)){
        if(localStorage.ilegtx950>29){
            gtx950.style.pointerEvents =  'none'
            gtx950.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilegtx950.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.ilegtx950++
            localStorage.clickcount-=localStorage.gtx950cost
            localStorage.gtx950cost=parseInt(localStorage.gtx950cost)+500_000
            // popup.style.marginTop = '7vh'
            pan_8.innerHTML=`${FCM(Number(localStorage.gtx950cost))}<br> GTX 260 +${localStorage.gtx950val}₿ps`
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.gtx950cost}₿ (Ascend x${localStorage.ascMultiplier})`
            popup.innerHTML = `Pomyślnie zakupiono gpu (+${localStorage.gtx950val})`
            ilegtx950.innerHTML = localStorage.ilegtx950
        }

        if(localStorage.ilegtx950>29){
            gtx950.style.pointerEvents =  'none'
            gtx950.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setInterval(bpsfunc, 1000)
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})
opk.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.opkcost)){
        if(localStorage.ileopk>29){
            opk.style.pointerEvents =  'none'
            opk.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ileopk.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.clickcount-=localStorage.opkcost
            count.innerHTML = `${Number(count.innerHTML) - localStorage.opkcost}₿ (Ascend x${localStorage.ascMultiplier})`
            localStorage.opkcost=parseInt(localStorage.opkcost)+500_000
            localStorage.ileopk++
            popup.innerHTML = `Pomyślnie zakupiono kartę ssd +${Number(localStorage.iterator)+incopk}`
            // popup.style.marginTop = '7vh'
            ileopk.innerHTML = localStorage.ileopk
        }
        if(localStorage.ileopk>29){
            opk.style.pointerEvents =  'none'
            opk.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
        pan_9.innerHTML = `${FCM(Number(localStorage.opkcost))}<br>  OP koparka +${incopk} click`
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})

rtx.addEventListener('click', ()=>{
    if(localStorage.clickcount>=parseInt(localStorage.rtxcost)){
        if(localStorage.ilertx>39){
            rtx.style.pointerEvents =  'none'
            rtx.style.backgroundColor = 'rgba(40,40,40,0.7)'
            ilertx.style.padding = '0 20px'
        }else{
            audiocash.play()
            localStorage.ilertx++
            localStorage.clickcount-=localStorage.rtxcost
            localStorage.rtxcost=parseInt(localStorage.rtxcost)+2_000_000
            popup.style.marginTop = '7vh'
            pan_10.innerHTML=`${FCM(Number(localStorage.rtxcost))}<br> RTX 3080 +${localStorage.rtxval}₿ps`
            count.innerHTML = `${parseFloat(count.innerHTML) - localStorage.rtxcost}₿ (Ascend x${localStorage.ascMultiplier})`
            popup.innerHTML = `Pomyślnie zakupiono gpu (+${localStorage.rtxval})`
            ilertx.innerHTML = localStorage.ilertx
        }

        if(localStorage.ilertx>39){
            rtx.style.pointerEvents =  'none'
            rtx.style.backgroundColor = 'rgba(40,40,40,0.7)'
        }
    }else{
        popup.innerHTML = 'Masz za mało kasy'
    }
    setInterval(bpsfunc, 1000)
    setTimeout(fadeAway,fadeTime*1000)
    popup.style.animation = `fadeAway ${fadeTime}s`
})


    


