// exemplos para verificar as "reclamações" do typescript quando comparado com o javascript

// Caso 1 - Se pegar qualquer coisa que não esteja definida no objeto, dará erro;
function calcularArea() {
    const objeto = { width: 10, height: 15 };

    const area = objeto.width * objeto.height * objeto.depth;

    return area;
}

//Caso 1.1 - Mais um exemplo de tentar pegar algo que não esteja definido no objeto.
function usuario() {
    const usuario = {
        nome: "Rafael",
        idade: 41
    }

    usuario.cpf
}

//Caso 2- Se chamar o método e não abrir e fechar parêntesis, dá erro. 
function calculo() {
    return Math.random < 5;
}

/*Caso 3 - Se houver erro de lógica o typescript também "reclama". No exemplo abaixo, todos os
números menores que 5 são 'a'. Portanto, todos os números maiores ou iguais a 5 (o complementar)
são 'b'. Por isso, se o número for diferente de 'a', obrigatoriamente ele é 'b'. No código
abaixo, há redundância. Está errado e o typescript pega o erro.
*/
function validacao() {
    const valor = Math.random() < 5 ? 'a' : 'b';

    if (valor !== 'a') {
        // cai aqui..

    } else if (valor === 'b') {
        // cai aqui..
    }
}

/* Caso 4 - Quando não se define o tipo de variável dos parâmetros de uma função, o typescript
também reclama.
*/ 
function exibirMensagem(pessoa, data) {

    console.log(`Olá ${pessoa}, hoje é ${data}`);
}

/* Modo correto de se escrever o código acima (o 2 é porque não deixa ter duas funções de mesmo
nome):
*/
function exibirMensagem2(pessoa: string, data: string) {

    console.log(`Olá ${pessoa}, hoje é ${data}`);
}

/* Caso 5 Se chamar a função e não passar a quantidade de parâmetros definida, também reclama.
No caso abaixo, faltou colocar o parâmetro data.
*/
exibirMensagem2('Rafael');

/* Caso 6 Quando a função é para retornar, a boa prática é inserir o tipo de variável que 
esta função retornará
*/
function exibirMensagem3(pessoa: string, data: string): string {

    console.log(`Olá ${pessoa}, hoje é ${data}`);

    return 'Teste';
}


//Caso 
function hello() {
    let message = "Hello World";

    message = message.toLocaleLowerCase();

    //message();
}