let btn = document.querySelector('.btn')
btn.addEventListener('click', adicionar)

let sortearNovamente = document.querySelector('#sortear-novamente')
sortearNovamente.addEventListener('click', novamente)

function adicionar(){
    let numeros = document.querySelector('#numeros')
    let de = document.querySelector('#de')
    let a = document.querySelector('#a')

    let valueNumeros = Number(numeros.value)
    let valorN1 = Number(de.value)
    let valorN2 = Number(a.value)

    if (numeros.value.length == 0 || de.value.length == 0 || a.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos para prosseguir')
    }

    else if (valorN1 > valorN2) {
        window.alert("[ERRO] O primeiro valor tem que ser menor que o segundo")
    }

    //usando o math.floor, que arredonda o numero para baixo, e dentro dele, o math.random, que retorna sempre um valor aleatorio entro 0 e 1
    else if (checkbox.checked) {
    //ao usuário clicar em sortear, vai sumir toda a div que compõe a colocação de números
      


         let esconder = document.querySelector('#esconder')
         esconder.style.display = 'none'


        let quantidadeDisponivel = valorN2 - valorN1 + 1
    // se pedir mais números do que existem no intervalo, é impossível não repetir
    if (valueNumeros > quantidadeDisponivel) {
        window.alert(`[ERRO] Não é possível sortear números diferentes em um intervalo tão curto.`)
        return   // para a função aqui, não entra no loop
    }

        let listaSorteados = []   

    /* repete "valueNumeros" vezes, sorteando e guardando cada número na lista
    o math random vai sortear um nuemros de 0 a 1, exemplo: 0.87. Depois disso, vai multiplicar pelo valor n2 - n1
    tem que somar +1 depois de subtrair o valor, se nao ele nunca irá pegar o ultimo valor
    /xemplo: n1= 1. n2= 4. As possibilidades sao, 1, 2, 3 e 4. então seria 0.87*3 = 2,61 (e o math.floor arredondará para 3)
    no final: 3+n1 (1) */
        
        for (let i = 0; i < valueNumeros; i++) {
            let sorteado = Math.floor(Math.random() * (valorN2 - valorN1 + 1)) + valorN1
            //enquanto listaSorteados (array) CONTER o número random, sorteie de novo
            while (listaSorteados.includes(sorteado)) {
             sorteado = Math.floor(Math.random() * (valorN2 - valorN1 + 1)) + valorN1
        }
    listaSorteados.push(sorteado)
    }

    let res = document.querySelector('#div4-secao2')
    res.style.display = 'flex'

    let result1 = document.querySelector('#result1')
    result1.innerHTML = listaSorteados.join(' - ')

   

    }

    else {
        //ao usuário clicar em sortear, vai sumir toda a div que compõe a colocação de números
         let esconder = document.querySelector('#esconder')
         esconder.style.display = 'none'

        let listaSorteados = []   
    
        for (let i = 0; i < valueNumeros; i++) {
            let sorteado = Math.floor(Math.random() * (valorN2 - valorN1 + 1)) + valorN1
            listaSorteados.push(sorteado)
        }

        //mostra o resultado na tela
        let res = document.querySelector('#div4-secao2')
        res.style.display = 'flex'

        let result1 = document.querySelector('#result1')
        result1.innerHTML = listaSorteados.join(' - ')
    }
}

 function novamente () {
    // reaproveita toda a lógica do adicionar (trava de intervalo + respeita o checkbox)
    adicionar()
    }