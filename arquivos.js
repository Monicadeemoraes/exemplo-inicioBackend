const fs = require("fs");

let texto;

fs.readFile('text.txt', function(erro, sucesso){
    if(erro){
        console.log("Ihh pessoinha, erro ao ler o arquivo");
        console.log(erro);
    }
    else{
       sucesso = sucesso.toString();
       console.log("Arquivo lido com sucesso");
       console.log(sucesso);
       texto = sucesso;
    }
});
    console.log("Função executada com sucesso.");


//exemplo de escrita de arquivo

let paraEscrever = process.argv[2];

fs.appendFile('testeEscrita.txt', `${paraEscrever}\r\n`, erro => {
    if(erro){
        console.log("Erro ao escrever o arquivo");
    }
    else{
        console.log("Deu bom - arquivo escrito com sucesso");
    }
});

console.log("Chamada de escrita executa com sucesso");