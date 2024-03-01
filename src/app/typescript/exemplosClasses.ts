class Point {
    x: number = 0;
    y: number = 0;
}

let p = new Point();
p.x = 4;
p.y = 6;

console.log(`O ponto é ${p.x}, ${p.y}`);

// Exemplo 2
class BoasVindas {
    mensagem: string;

    constructor() {
        this.mensagem = 'Bem-vindo!';
    }
}

let m = new BoasVindas();

console.log(`${m.mensagem}`);

// Exemplo 3
class Saudacoes {
    /* Readonly significa que só pode receber valor do contrutor (tirar o comentário do código
    para verificar o efeito do erro)
    */
    readonly mensagem: string;
    //mensagem: string;

    constructor() {
        this.mensagem = 'Muito bem-vindo';
    }

    // Quando se tenta criar um método invocando a mensagem, reclama, pois é readonly
    preencherMensagem() {
        this.mensagem = 'Nova mensagem';
    }
}

// Nem fora é possível 
let s = new Saudacoes();

s.mensagem = 'texto';

// Exemplo 4
class Saudacoes2 {
    readonly mensagem2: string;

    constructor() {
        this.mensagem2 = 'Muito bem-vindo';
    }

    // Método
    dizerOla2() {
        console.log(this.mensagem2)
    }

}

/* Exemplo 5 - Quando utilizado get e set para atribuir uma propriedade é possível executar
cósigo dentro dela
*/
class C {
    // Quando é private somente trechos de código dentro da classe conseguem acessar a variável
    private _length = 0;

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
}
 
// Exemplo 6 usa a interface e depois a implementa na classe

interface Pingavel {
    ping(): void;
    
    value: number;

}

class Somar implements Pingavel {

    ping(): void {
        console.log('ping');

    }

    value: number = 3;

}

class Ball implements Pingavel {
    
    ping(): void {

    }

    value: number = 4;

}

let somar = new Somar();

somar.ping()

// Exemplo 7 Extends é a herança das classes

class Animal {
    andar() {
        console.log('Animal andando!');

    }
}

class Cachorro extends Animal {
    latir() {
        console.log('au au');
    }
}

/* Quando for instanciar a classe, virá o andar (herdado da classe Animal) e o latir da classe
Cachorro.
*/
let viralata = new Cachorro();

viralata.andar;
viralata.latir;

/* Exemplo 8 Visibilidade: quando não é expressa é pública (padrão). Todo o código é capaz de
acessar. Quando é privada, somente dentro daquele trecho de código é possível acessar.
Protected - é acessado pelo trecho de código por quem herda a classe. De fora não acessa.
*/


