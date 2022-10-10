const d=document;
const n=navigator;

export default function getGeolocation(id){
    const $id= d.getElementById(id);
     const Options ={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0

    };

    const   success=(position)=>{
        let coords =position.coords;
        console.log(position)

        $id.innerHTML=`
        <p>Tu posicion actila es:</p>
        <ul>
            <li> Latitud:<b>${coords.latitude}</b></li>
            <li> Longitud:<b>${coords.longitude}</b></li>
            <li> Precision:<b>${coords.accuracy}<b/></li>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},12.5z"
            target="_blank" rel="noopener">Ver en google maps</a>

        </ul>`
    }
    const error=(err)=>{
        $id.innerHTML=`<p>Error${err.code}:${err.message}</p>`
        console.log(`Error${err.code}:${err.message}`);
    };
    n.geolocation.getCurrentPosition(success,error,Options);
    
}