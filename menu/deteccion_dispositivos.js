const d= document;
const n= navigator;
const ua= n.userAgent;

export default function userDevicenInfo(id){
    const $id =d.getElementById(id);
    const isMobile={
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/),
        any:function(){
            return this.android()||this.ios();
        }


    };
    const isDesktop={
        linus:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function (){
            return this.linus()||this.mac()||this.windows();
        }
    };
    const isBrowser={
       chrome: ()=> ua.match(/chrome/i), 
        safari: ()=> ua.match(/safari/i), 
       opera: ()=> ua.match(/opera|opera mini/i), 
       firefox: ()=> ua.match(/firefox/i), 
       edge: ()=> ua.match(/edge/i),
       any: function(){
       return this.chrome()||this.firefox()||
        this.opera()||this.edge()||this.safari();
       }
    };
 $id.innerHTML=`
 <ul>
 <li>User Agent:<b>${ua} </b></li>
 <li>Plataforma:${isMobile.any()||isDesktop.any()}</li>
 <li>Navegador:${isBrowser.any()}</li>
 
 </ul>`;

 if(isBrowser.chrome()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en chrome </mark></p>`
 }
 if(isBrowser.safari()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en safari </mark></p>`
 }
 if(isBrowser.firefox()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en firefox </mark></p>`
 }
 if(isBrowser.edge()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en edge </mark></p>`
 }
 if(isBrowser.opera()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en opera </mark></p>`
 }

    
}