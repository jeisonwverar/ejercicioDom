const d=document;
let x=0;
let y=0;
export function moveBall(e,ball,stage){
 const $ball =d.querySelector(ball);
 const $stage =d.querySelector(stage);
 const limitsBall =$ball.getBoundingClientRect();
 const limitsStage =$stage.getBoundingClientRect();
 console.log(limitsBall,limitsStage)
 console.log(e.keyCode);
 console.log(e.key)
/* const move =(direction)=>{}; */
switch (e.keyCode) {
    case 37:
        e.preventDefault();
        
        /* move:('left'); */
        if(limitsBall.left>limitsStage.left) x--;
        break;
    case 38:
           
            /* move:('up'); */
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                y--;
            }
            break;
    case 39:
            e.preventDefault();
            /* move:('right'); */
            if(limitsBall.right < limitsStage.right)x++;
            break;
    case 40:
        /* move:('down'); */
        if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;

            }
            break;
        default:
        break;
 }
 $ball.style.transform=`translate(${x*5}5px,${y*5}5px)`;
}
export function shortcuts (e){
   /*  console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey); */

    if(e.key=== 'a'&& e.altKey){
        alert('Haz lanzado una alerta con el teclado');
    }
    if(e.key=== 'c'&& e.altKey){
        confirm('Haz lanzado una confirmacion con el teclado');
    }
    if(e.key=== 'p'&& e.altKey){
        prompt('Haz lanzado una aviso con el teclado');
    }
}