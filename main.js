var input = '';

var textoDevolvido = '';

var textoEsconder = document.querySelector('[class="mensagem__vazia"]');

var textoMostrar = document.querySelector('[class="mensagem__resposta esconder"]');


function inputCriptografar() {
  input = document.getElementById('text').value;

  var continuar = true;
  
  if(continuar == true) {
    
    function criptografar() {
      
      var enter = input.replace(/e/g, 'enter');
      var imes = enter.replace(/i/g, 'imes');
      var ai = imes.replace(/a/g, 'ai');
      var ober = ai.replace(/o/g, 'ober');
      var ufat = ober.replace(/u/g, 'ufat');
      
      textoDevolvido = ufat;
    
      return textoDevolvido;
    }
  
    criptografar();

    
  }
  document.getElementById('resposta').innerHTML = textoDevolvido;

  textoEsconder.classList.add('esconder');

  textoMostrar.classList.remove('esconder');
  
  return textoDevolvido;
}

function inputDescriptografar() {
  input = document.getElementById('text').value;

  var continuar = true;
  
  if(continuar == true) {
    
    function descriptografar() {
      
      var e = input.replace(/enter/g, 'e');
      var i = e.replace(/imes/g, 'i');
      var a = i.replace(/ai/g, 'a');
      var o = a.replace(/ober/g, 'o');
      var u = o.replace(/ufat/g, 'u');
      
      textoDevolvido = u;
    
      return textoDevolvido;
    }

  
    descriptografar();
    
  }

  document.getElementById('resposta').innerHTML = textoDevolvido;

  textoEsconder.classList.add('esconder');

  textoMostrar.classList.remove('esconder');
  
  return textoDevolvido;
}

function copiaResposta() {

  navigator.clipboard.writeText(textoDevolvido);

}




var buttonEscrever = document.getElementById("criptografar");
buttonEscrever.onclick = inputCriptografar;

var buttonEscrever = document.getElementById("descriptografar");
buttonEscrever.onclick = inputDescriptografar;

var buttonEscrever = document.getElementById("copiar");
buttonEscrever.onclick = copiaResposta;