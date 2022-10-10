const d =document;
export default function countdown(id,limiDate,finalMessage){
 const $countdown = d.getElementById(id);
 const countdownDate = new Date (limiDate).getTime();
 let countdownTempo =setInterval(()=>{
    let now= new Date().getTime();
    let  limiTime = countdownDate-now;
    let  days=Math.floor(limiTime/(1000*60*60*24));
    let  hours=('0'+Math.floor(limiTime%(1000*60*60*24)/(1000*60*60))).slice(-2);
    let  minutes=('0'+Math.floor(limiTime%(1000*60*60)/(1000*60))).slice(-2);
    let  seconds=('0'+Math.floor(limiTime%(1000*60)/(1000))).slice(-2)
   $countdown.innerHTML=`<h3>Faltan: ${days} dias: ${hours} horas: ${minutes} minutos ${seconds} segundos</h3> `;
    if(limiTime<0){
      clearInterval(countdownTempo);
      $countdown.innerHTML=`<h3>${finalMessage}</h3>`;
    }
},1000);
};
