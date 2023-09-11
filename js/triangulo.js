const valores = document.querySelector('#triangulo');

valores.addEventListener('submit', function(e){
    e.preventDefault();

    const a = document.getElementById('valor1').value;
    const b = document.getElementById('valor2').value;
    const c = document.getElementById('valor3').value;
    ValidarTriangulo(a, b ,c);   
    
});

function ValidarTriangulo(a, b, c){    

    const img = document.querySelector('#imagem');
    if(a <= b + c && b <= a + c && c <= a + b){
        if(a == b && b == c && c == a){
            setMensagem("Equilátero");
            img.setAttribute('src', 'image/bozo.jpg');
        }
        else if(a != b && b != c && c != a){
            setMensagem("Isósceles")
        }
        else{
           setMensagem("Escaleno");            
        }
    }
    else{
        setMensagem("Inválido");
       
    }
}

function setMensagem(frase) {
    const aqui = document.querySelector('#mostra');
    aqui.innerHTML = '';

    aqui.classList.add('oi');
    aqui.innerHTML = frase;
}