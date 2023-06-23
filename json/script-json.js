const objs = [
    {
        nome: "Fulano",
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "Programador",
            empresa: "Empresa X"
        },
        hobbies: ["Programar","Correr","Ler"]
    },
    {
        nome: "Ciclano",
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: ["Jogar","Academia"]
    }
    
]
console.log(objs);
console.log(typeof objs);
//JSON
//convertendo para objeto JSON

const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

//convertendo json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

//imprindo a const objData pelo map
objData.map((pessoa) => {
    console.log(`nome: ${pessoa.nome}`);
})
