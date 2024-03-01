// Definições de variáveis

let mensagem: string = 'Hello World';

let mensagem2: 'Hello World';

let number1: number = 3.5;

let number2 = 4;

let isTrue: boolean = false;

// OBS: se utilizar o tipo de variável any, o typescript não reclamará de mais nada. CUIDADO!

function olaMundo(mensagem: string): string {

    return `Olá Mundo ${mensagem}`;
}

// Objeto
function exibirCoordenadas(ponto: { x: number, y: number }) {

    return `${ponto.x} , ${ponto.y}`;

}

exibirCoordenadas({ x: 4, y: 6 });

// Função com parâmetros opcionais (coloca-se uma interrogação no parâmetro)
function exibirNome(objeto: { nome: string, sobrenome?: string }): string {

    let mensagem = '';

    if (objeto.sobrenome === undefined) {
        mensagem = `Seu nome é ${objeto.nome}`;

    }
    else {
        mensagem = `Seu nome é ${objeto.nome} e o sobrenome é ${objeto.sobrenome}`;

    }

    return mensagem;
}

// No momento de chamar a função
exibirNome({ nome: 'Rafael' });

exibirNome({ nome: 'Rafael', sobrenome: 'Grígolo' });


// Definir uma variável com mais de um tipo
function exibirIds(id: number | string) {

    let mensagem = '';

    // Nessa checagem, como o id é numérico o TS não deixa dar um toUpperCase, por exemplo 
    if (typeof id === 'number') {
        mensagem = `Seu id numérico é ${id}`;

    }
    else {
        mensagem = id.toUpperCase();

    }

    return mensagem;

}

// Na hora de chamar a função
exibirIds(3);

exibirIds('S456GT');

// Apelido (Alias) para o objeto

type Ponto = {
    x: number,
    y: number
}

function imprimirPonto(p: Ponto) {

    return `O seu ponto é ${p.x} , ${p.y}`;
}

// Chamando a função acima
imprimirPonto({x: 3, y: 5});

// Interfaces - é uma outra forma de dar nome ao objeto

interface Point {
    x: number,
    y: number
}

function imprimirPonto2(p: Point) {

    return `O seu ponto é ${p.x} , ${p.y}`;
}

/* OBS: a principal diferença entre interface e type é que a interface permite fazer mais
coisas, pois utilizam conceitos de POO (programação orientada a objetos), podendo ser
herdadas e extendidas. Já o type (Alias) não.
*/

// Literal Types

function imprimirTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {

}

// Se colocar outro parâmetro que não seja um dos três (left, right ou center), reclama
imprimirTexto('Meu Texto', 'left');

// Null e Undefined

let teste = null;

console.log(teste);

let teste2;

console.log(teste2);


/* Operador Não Nulo. OBS: só usar isso se souber realmente o que está fazendo, pois é mandar
o TS "calar a boca"
*/

function vivendoPerigosamente(x?: number) {

    console.log(x?.toFixed());
}

// Arrays

// Primeira forma de sintaxe
function fazerAlgo(lista: Array<string>) {

}

// Segunda forma de sintaxe
function fazerAlgoTambem(lista: string[]) {

}

// Na hora de chamar
fazerAlgo(new Array('Hello', 'World', 'Happy'));

// Chamando a segunda forma
fazerAlgoTambem(['Hello', 'World', 'Happy']);






