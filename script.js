// acess the elemens
//acessed the display timer using data
let Display=document.querySelector('.DisplayTimer')
//let initialize the value is zero
let [hours,minitues,seconds,milliseconds]=[0,0,0,0]
let int=null
//startBtn
let startBtn = document.getElementById('StartBtn').addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int)
    }
    int=setInterval(DisplayTimer,10)
    
})
//stopBtn
let stopBtn=document.getElementById('StopBtn').addEventListener('click',()=>{
    clearInterval(int)
})
//ResetBtn
let ResetBtn=document.getElementById('ResetBtn').addEventListener('click',()=>{
    clearInterval(int);
    [hours,minitues,seconds,milliseconds]=[0,0,0,0];
    Display.innerHTML=`00:00:00:00`;
})
//DisplayTimer function
function DisplayTimer(){
    console.log(hours,minitues,seconds,milliseconds);
    milliseconds++
    if(milliseconds===60){
        milliseconds=0
        seconds++
        if(seconds===60){
            seconds=0
            minitues++
            if(minitues===60){
                minitues=0
                hours++
            }
        }
    }
    
    let h=hours<10? '0'+hours:hours;
    let m=minitues<10? '0'+minitues:minitues;
    let s=seconds<10? '0'+seconds:seconds;
    let ms=milliseconds<10? '00'+milliseconds:milliseconds <100? '0'+milliseconds:milliseconds;
    Display.innerHTML=`${h}:${m}:${s}:${ms}`;
    

}