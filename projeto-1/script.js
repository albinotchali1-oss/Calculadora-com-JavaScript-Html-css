const btnNumber = document.querySelectorAll('button');
const result = document.getElementById('resultado');

btnNumber.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const conteudo = btn.textContent.trim();

        if (!isNaN(conteudo) && conteudo !== '') {
            insert(conteudo);
        }else{
            if (conteudo == 'c') {
                result.innerHTML = '';
            }else if(conteudo == '<'){
                result.innerHTML = result.textContent.slice(0, -1);
            }else if (conteudo == 'x') {
                result.innerHTML += '*';
            }else if (conteudo == '=') {
                if (result.innerText !== '') {
                    result.innerHTML = eval(result.innerText);
                }else{
                    result.innerHTML = 'Enter a number';
                }
            }else{
                insert(conteudo);
            }
        }
    });

});

function insert(num){
    result.innerHTML += num;
}