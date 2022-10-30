
function myFunction() {
  
  let x1 = document.getElementById("numControl").value;
 const regex = /^(l)(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
 const valnum = regex.exec(x1); 
 
  if (regex.test(x1)) {
    text="Numero de control valido";
   console.log(""+valnum);}
  else {
    text="Numero de control no valido";
  }

  document.getElementById("valida_numControl").innerHTML = text;


  
  let x2 = document.getElementById("correo").value;
  
  const regex2 = /^(l)((m|c)?[0-9]{2}(120|121)[0-9]{3})(@morelia.tecnm.mx)$/i;

  if (regex2.test(x2)) {
    const correo = regex2.exec(x2); 
    console.log(""+correo);
    console.log("Correo: "+correo[2]);
    console.log("Número de control: "+valnum[0]);


    if(correo[2] == valnum[0]){
    text="Correo valido";
    console.log("VALIDO");
    text ="Correo válido";
    document.getElementById("Correo_valido").innerHTML = text;
    
  
  }else{
      
      console.log("NOT VALIDO")
      text ="Correo NO valido";
      document.getElementById("Correo_valido").innerHTML = text;
      text="El correo no coincide con el numero de control";
    document.getElementById("valida_correo").innerHTML = text;
    }
    
  }
  
    
    let x3 = document.getElementById("RFC").value;
    const regex3 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
    const fecha = regex3.exec(x3); 
     if (regex3.test(x3)) {
       text="RFC valido";
       console.log("Fecha de nacimiento: "+fecha)
     }
     else {
       text="RFC no valido";
     }
   
     document.getElementById("valida_RFC").innerHTML = text;

    let x4 = document.getElementById("numero").value;
    const regex4 = /(443)[0-9]{7}$/i;
    const numxd= regex4.exec(x4); 

     if (regex4.test(x4)) {
       text="Numero valido";
     }
     else {
       text="Numero no valido";
     }
   
     document.getElementById("valida_numero").innerHTML = text;


     let x5 = document.getElementById("nombre").value;
     const regex5 = /[A-Z a-z]*[a-z]*/i;
     const nombre = regex5.exec(x5); 
     console.log("Nombre: "+nombre);
     const Concatenados = "Usuario valido: "+nombre+" nacido el "+FechaNac[1];
     document.getElementById("Datos_Generados").innerHTML = Concatenados;

}
