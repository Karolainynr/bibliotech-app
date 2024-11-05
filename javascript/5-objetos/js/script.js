const name = "O Senhor dos Anéis";
const ano = 1950;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretoFilme = "Peter Jackson";

const livro = {
    titulo: "O Senhor dos Anéis",
    ano: 1950,
    autor: "J. R. R. Tolkien",
};

const filme = {
    titulo: "O Senhor dos Anéis",
    ano: 2001,
    diretor: "Peter Jackson",
    showMessage: function (data) {
        console.log("O filme é incrivel" + data);
    }
}

console.log(livro);
console.log(livro.ano);
console.log(livro.autor);
console.log(livro.titulo);

console.dir(console);
const title = "O Senhor dos Anéis";
const nomeMaiusculo = title.toUpperCase();
const totalDeLetras = title.length;

console.log(nomeMaiusculo);
console.log(totalDeLetras);

const preco = 29.90;
const precoArredondado = preco.toFixed();
console.log(precoArredondado);

filme.showMessage("demais");
filme.showMessage("batata");