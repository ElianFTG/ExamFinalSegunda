function cadena(a) {
  if(a === "[]"){
    return "correcto";
  }
  else{
    return "incorrecto";
  }
}

export default cadena;
/*let bandera = false;
  for(var i = 0; i< a.length; i += 1){
    if(a[i] === "["){
      for(var j = i; j < a.lenght; j += 1){
        if(a[j] === "]"){
          bandera = true;
          break;
        }
      }
    } 
  }
  if(bandera){
    return "correcto";
  }
  else{
    return "incorrecto";
  }*/