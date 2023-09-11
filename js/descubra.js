let numero = parseInt(prompt('Digite um Número'));

document.write('Você informou esse número: ' + numero + '<br>');

if (numero >= 100 ){
    document.write('Número maior que 100.' + '<br>');
    document.write('<img src="image/irmaos metralha.jpg" alt="Sumiu">');
}

else if(numero >= 50){
    document.write('Número maior que 50 e menor que 100.' + '<br>');
    document.write('<img src="image/tio patinhas.jpg" alt="Não está aqui">');
}

else if(numero >= 25){
    document.write('Número maior que 25 e menor que 50.' + '<br>');
    document.write('<img src="image/bozo.jpg" alt="Não está aqui">');
}

else{
    document.write('Número menor que 100.' + '<br>');
    document.write('<img src="image/minions.jpg" alt="Não está aqui">');
}