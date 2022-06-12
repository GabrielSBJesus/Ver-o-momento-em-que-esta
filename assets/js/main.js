const texto = document.querySelector('#data');
const butao = document.querySelector('#button')
const data = new Date();


butao.addEventListener('click', function(d){
    const opcoes =  {
        dataStyle: 'full'
    };
    
    texto.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
})