// O que é um método?
// Métodos são funções que pertencem a um objeto. Eles podem ser chamados e execultados através de um objeto.

const livro = {
    titulo: "JavaScript",
    autor: "Fulano",
    lancamento: 2020,
    descricao: function () {
        console.log(
            "O livro ${this.titulo} foi escrito por ${this.autor} e lançado em ${this.lancamento}"
        );
    },
};

livro.descricao();

// Funções são blocos de código que podem ser chamados e executados em qualquer parte do código.

function logCurso() {
    console.log("Curso de JavaScript");
}


logCurso();
logCurso();
logCurso();


// Qual a diferença entre parametros e argumentos?

// Os parâmetros são as variáveis que recebem valores de argumentos.
// Argumentos são os valores que são passados para a função.
//exemplo abaixo

function logData(data) {
    // data é um parametro
    console.log(data);
}

logData("JAVA"); // "Java" é um argumento
logData("HTML"); // "html" é um argumento

function logDataComMaisParametros(data, curso) {
    console.log(data, curso);
}

logDataComMaisParametros("JAVA", "Curso de Java");

// RETORNO DE FUNÇÕES
// É possivel retornar valores de uma função, para isso utilizamos a palavra reservada return.
// Se não houver um return, a função irá retornar undefined.

function testRetorno() {
    console.log("Teste de retorno");
}

const retorno = testRetorno();
console.log(retorno);

function testeRetorno2() {
    return "Teste de retorno 2";
}

const retorno2 = testeRetorno2();
console.log(retorno2);

function testeRetornoComParametro(parametro) {
    return parametro;
}

const retorno3 = testeRetornoComParametro("Teste de retorno 3");
console.log(retorno3);

function retornoComObjeto() {
    return {
        nome: "Fulano",
        idade: 30,
    };
}

const retorno4 = retornoComObjeto();
console.log(retorno4);


//ESCOPO DE FUNÇÕES

const curso = "Curso de JavaScript";

function escopo() {
    const curso2 = "Curso de HTML";
    console.log(curso2);
}

escopo();
console.log(curso);

function escopo2() {
    const cursoCss = "Curso de CSS";
    console.log(curso);
    console.log(cursoCss);
}

escopo2();