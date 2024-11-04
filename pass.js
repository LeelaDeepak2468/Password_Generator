function OTPgen(){
     otp=""
    for(let i=0;i<6;i++){
        otp+=(Math.floor(Math.random()*10)).toString();
    }
    
    text.value=otp;
    var sec=1;
    var timer;
    ti=document.getElementById('timer');
    timer=setInterval(()=>{
     	ti.innerHTML='00:'+sec;
     	sec++;
     	},1000);
     setInterval(()=>{window.location.reload()},30000);
}