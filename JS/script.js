

//VALIDACION FORMULARIO REGISTRAR
$(document).ready(function() {

    // Agregar método de validación para RUT 
    $.validator.addMethod("rutChileno", function(value, element) {
      // Eliminar puntos y guión del RUT
      value = value.replace(/[.-]/g, "");
  
      // Validar que el RUT tenga 8 o 9 dígitos
      if (value.length < 8 || value.length > 9) {
        return false;
      }
  
      // Validar que el último dígito sea un número o una 'K'
      var validChars = "0123456789K";
      var lastChar = value.charAt(value.length - 1).toUpperCase();
      if (validChars.indexOf(lastChar) == -1) {
        return false;
      }
  
      // Calcular el dígito verificador
      var rut = parseInt(value.slice(0, -1), 10);
      var factor = 2;
      var sum = 0;
      var digit;
      while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
      }
      var dv = 11 - (sum % 11);
      dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
  
      // Validar que el dígito verificador sea correcto
      return dv === lastChar;
    }, "Por favor ingrese un RUT válido."); 

  $("#formularioUno").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      nombre:{
        required:true,
        nombre:true,
      },
      apellido:{
        required:true,
        apellido:true,
      },
      direccion:{
        required:true,
        direccion:true,
      },
      checkout:{
        required:true,
        exampleCheck1:true,
      },
      email: {
        required: true,
        email: true,
      },
      contraseña: {
        required: true,
        minlength: 5,
      },
      contraseña2: {
        required: true,
        equalTo: "#password",
      },
    }, // --> Fin de reglas
    messages: {
      rut: {
        required: "El rut es un campo obligatorio",
        rutChileno: "El formato del rut no es válido"
      },
      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
    },
  });
});

//VALIDAR FORMULARIO INGRESAR
$(document).ready(function() {
  $("#formularioDos").validate({
    rules: {
      Correo: {
        required: true,
        Correo: true,
      },
      contraseña: {
        required: true,
        minlength: 5,
      },
    }, // --> Fin de reglas
    messages: {
      Correo: {
        required: "El email es un campo requerido",
        Correo: "El email no cumple el formato de un correo",
      },
      contraseña: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
    },
  });
});

//VALIDAR FORMULARIO MANTENEDOR USER
$(document).ready(function() {
  $("#formularioTres").validate({
    rules: {
      ID: {
        required: true,
        ID: true,
      },
      rut: {
        required: true,
        rut: true,
      },
      nombre: {
        required: true,
        nombre: true,
      },
      apellido:{
        required:true,
        apellido:true,
      },
      Correo:{
        required:true,
        Correo:true,
      },
      direccion:{
        required:true,
        direccion:true,
      },
      contraseña:{
        required:true,
        minlength:5,
      },
    }, // --> Fin de reglas
    messages: {
      ID: {
        required: "El ID es un campo requerido",
        ID: "ID NO VALIDO",
      },
      rut: {
        required: "El rut es una campo obligatorio",
        rut: " RUT no valido",
      },
      nombre: {
        required: "el nombre es un campo obligatorio",
        nombre: "nombre no valido",
      },
      apellido:{
        required:"el apellido es un campo obligatorio",
        apellido:"apellido no valido",
      },
      Correo:{
        required:"el correo es un campo obligatorio",
        Correo:"correo no valido",
      },
      direccion:{
        required:"la direccion es un campo obligatorio",
        direccion:"direccion no valida",
      },
      contraseña:{
        required:"la contraseña es un campo obligatorio",
        minlength:"minimo 5 caracteres",
      },
    },
  });
});

//VALIDAR FORM MANTENEDOR PROD
$(document).ready(function() {
  $("#formulario4").validate({
    rules: {
      ID:{
        required:true,
        ID:true,
      },
      nombre: {
        required: true,
        nombre: true,
      },
      descripcion:{
        required:true,
        descripcion:true,
      },
      precio:{
        required:true,
        precio:true,
      },
      descuentoSub:{
        required:true,
        descuentoSub:true,
      },
      descuentoOf:{
        required:true,
        descuentoOf:true,
      },
    }, // --> Fin de reglas
    messages: {
      ID: {
        required: "El ID es un campo requerido",
        ID: "ID NO VALIDO",
      },
      nombre: {
        required: "el nombre es un campo obligatorio",
        nombre: "nombre no valido",
      },
      descripcion:{
        required:"la descripcion es un campo obligatorio",
        descripcion:"descripcion no valida",
      },
      precio:{
        required:"el precio es un campo obligatorio",
        precio:"precio no valido",
      },
      descuentoSub:{
        required:" campo obligatorio",
        descuentoSub:"no valido",
      },
      descuentoOf:{
        required:"campo obligatorio",
        descuentoOf:"no valido",
      },
    },
  });
});

//ValidaFORM MANTENEDOR BODEGA
$(document).ready(function() {
  $("#formulario5").validate({
    rules: {
      nombre: {
        required: true,
        nombre: true,
      },
      cantidad: {
        required: true,
        minlength: 5,
      },
    }, // --> Fin de reglas
    messages: {
      nombre: {
        required: "El nombre es un campo requerido",
        nombre: "El nombre no es valido",
      },
      cantidad: {
        required: "La cantidad es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
    },
  });
});

//validaform datos
$(document).ready(function() {

  // Agregar método de validación para RUT 
  $.validator.addMethod("rutChileno", function(value, element) {
    // Eliminar puntos y guión del RUT
    value = value.replace(/[.-]/g, "");

    // Validar que el RUT tenga 8 o 9 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }

    // Validar que el último dígito sea un número o una 'K'
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
      return false;
    }

    // Calcular el dígito verificador
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
      digit = rut % 10;
      sum += digit * factor;
      rut = Math.floor(rut / 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

    // Validar que el dígito verificador sea correcto
    return dv === lastChar;
  }, "Por favor ingrese un RUT válido."); 

$("#formulario6").validate({
  rules: {
    nuevorut: {
      required: true,
      rutChileno: true
    },
    nuevonombre:{
      required:true,
      nombre:true,
    },
    nuevoapellido:{
      required:true,
      apellido:true,
    },
    nuevadireccion:{
      required:true,
      direccion:true,
    },
    nuevocheckout:{
      required:true,
      exampleCheck1:true,
    },
    nuevoemail: {
      required: true,
      email: true,
    },
    nuevacontraseña: {
      required: true,
      minlength: 5,
    },
    nuevacontraseña2: {
      required: true,
      equalTo: "#password",
    },
  }, // --> Fin de reglas
  messages: {
    nuevorut: {
      required: "El rut es un campo obligatorio",
      rutChileno: "El formato del rut no es válido"
    },
    nuevoemail: {
      required: "El email es un campo requerido",
      email: "El email no cumple el formato de un correo",
    },
    nuevapassword: {
      required: "La contraseña es una campo obligatorio",
      minlength: "Mínimo 5 caracteres",
    },
    nuevapassword2: {
      required: "Repita la contraseña anterior",
      equalTo: "Debe ser igual al campo contraseña",
    },
  },
});
});