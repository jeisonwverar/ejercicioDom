const d=document;


export default function contactFormValidations(){
 const $form =d.querySelector('.contact_form');
 const $inputs=d.querySelectorAll( '.contact_form [required]');
 console.log($form,$inputs);
 $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id=input.name;
    $span.textContent=input.title;
    $span.classList.add('contact-form-error', "none")
    input.insertAdjacentElement("afterend",$span);

 });

 d.addEventListener('keyup',e=>{
     if(e.target.matches(".contact_form [required]")){
         let $input=e.target;
         let pattern=$input.pattern||$input.dataset.pattern;
        /*  console.log($input,pattern) */
       if(pattern&& $input!==""){
        console.log('tiene patron')
        let regex=new RegExp($input);
        return !regex.exec($input.value)
        ?d.getElementById($input.name).classList.add('is-acitve')
        :d.getElementById($input.name).classList.remove('is-acitve')
       }
       if(!pattern)  {
        console.log('no tiene patron')
        return $input.value ===""
        ?d.getElementById($input.name).classList.add('is-acitve')
        :d.getElementById($input.name).classList.remove('is-acitve')
       }
    }
 })
};