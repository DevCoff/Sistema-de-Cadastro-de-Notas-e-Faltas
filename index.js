const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync

const materiaCadastrada = []; // Usei lista para armazanar as informações do cadastro

function menu() { // Função para exibir o menu inicial
    console.log('========================================');
    console.log('        SISTEMA DE CADASTRO - [NOTAS E FALTAS]');
    console.log('========================================');
    console.log('1. Cadastre no mínimo 3 matérias.');
    console.log('2. Para cada matéria, deve ser solicitado no mínimo 3 notas.');
    console.log('3. Você pode cadastrar quantas matérias forem necessárias.');
    console.log('========================================');
}

function criarMateria(aluno) { // optei por utilizar objeto, pois estou mais familiarizado com eles em python.
    const cadastrarMateria = { // na const cadastrarMateria será armazenada toda informação do aluno.
        nome: aluno,
        materia: "",
        notas: [],
        media: 0,
        faltas: 0,
        situacao: ""
    };

    materiaCadastrada.push(cadastrarMateria); // utilizei push para gravar as informações na lista criada anteriormente.
}

// Função para cadastrar notas para uma matéria específica

function cadastrarNotas(index) {
    let somaNotas = 0;

    console.log('📝 Cadastro de notas:');
    for (let i = 0; i < 3; i++) { // Como o exercicio solicita para ter 3 notas, criei um loop for já pre definido com as 3 notas necessárias
        let nota;
        while (true) {
            nota = parseFloat(prompt(`Cadastre a nota ${i + 1}: `));// Solicita uma nota válida do usuário
            if (!isNaN(nota) && nota >= 0 && nota <= 10) { // Verifica se a nota é válida (entre 0 e 10)
                break;
            } else {
                console.log('❌ Nota inválida. Por favor, digite um número entre 0 e 10.');
            }
        }
        materiaCadastrada[index].notas.push(nota); // Adiciona a nota ao array de notas da matéria
        somaNotas += nota; // Soma as notas para calcular a média posteriormente
    }

    const totalNotas = materiaCadastrada[index].notas.length;
    materiaCadastrada[index].media = (somaNotas / totalNotas).toFixed(2);  // Calcula a média das notas, o .toFixed(2) limita para 0.00 2 casas após a virgula evitando um número muito longo
    console.log('✅ Notas cadastradas com sucesso!');
}

// Função principal para cadastrar informações de uma nova matéria para um aluno

function cadastrarInfoMateria(aluno) {
    criarMateria(aluno);  // Cria um novo objeto de matéria para o aluno
    const index = materiaCadastrada.length - 1; //Obtém o índice utilizando o length para verificar qual o indix atual


    console.log(`\n📘 Cadastro da ${index + 1}ª matéria | para o aluno ${aluno}:`); // Solicita e armazena o nome da matéria
    while (true) { // fazemos uma verificação se a matério está correta, se for número ou vazia o programa pergunta novamente para cadastrar
        materiaCadastrada[index].materia = prompt('Cadastre a matéria: ');
        if (materiaCadastrada[index].materia == "") {
            console.log('❌ Nome da matéria inválida, por favor cadastre novamente!');
        }
        else if (isNaN(materiaCadastrada[index].materia)) {
            console.log(`✅ Matéria "${materiaCadastrada[index].materia}" cadastrada com sucesso.`)
            break;
        }
        else {
            console.log('❌ Nome da matéria inválida, por favor cadastre novamente!')
        }

    }
    while (true) { // outra validação, aqui verificamos se foi digitado um valor numérico
        materiaCadastrada[index].faltas = parseInt(prompt('Quantas faltas na matéria: ')); // Solicita e armazena o número de faltas
        if (!isNaN(materiaCadastrada[index].faltas) && materiaCadastrada[index].faltas >= 0) { // Verifica se é um número válido e não negativo
            break;
        } else {
            console.log('❌ Valor inválido. Por favor, digite um valor númerico positivo ou [0]');
        }
    }
    cadastrarNotas(index);

    // Verifica se o aluno foi aprovado ou reprovado
    if (materiaCadastrada[index].media >= 6 && materiaCadastrada[index].faltas <= 5) {
        materiaCadastrada[index].situacao = '\x1b[32mAprovado\x1b[0m';
    } else {
        materiaCadastrada[index].situacao = '\x1b[31mReprovado\x1b[0m';
    }
}

menu();

let aluno;
while (true) { // outra verificação, dessa vez vamos verificar se o nome é uma string ou diferente de != "vazio"
    aluno = prompt('Cadastre o nome do aluno: ');
    if (isNaN(aluno) && aluno != "") {
        console.log(`\n✨ Aluno "${aluno}" cadastrado com sucesso!\n`)
        break; // Sai do loop se o nome do aluno for uma string válida
    } else {
        console.log('❌ Nome inválido. Por favor, escreva um nome válido.');
    }
}

// Cadastro automático das 3 matérias iniciais obrigatorio

for (let i = 0; i < 3; i++) {
    cadastrarInfoMateria(aluno);
}

// Pergunta se deseja cadastrar mais matérias após as 3 obrigatórias
while (true) {
    const continuar = prompt('Deseja cadastrar outra matéria? [1 - Sim / 0 - Não]: ');

    if (continuar == '0') {
        console.log('\n🌟 Finalizando cadastro. Obrigado!\n');
        break;
    }
    else if (continuar === '1') {
        cadastrarInfoMateria(aluno);
    }
    else {
        console.log('❌ Opção inválida. Digite 1 para cadastrar ou 0 para sair!')
    }
}

console.log('\n📚 Matérias cadastradas:');
materiaCadastrada.forEach((materia, index) => { // usamos forEacH para que seja mostrado as materias e os dados cadastrados, com o console.log, dessa forma ela le automaticamente todos os itens cadastrados.
    console.log(`${index + 1}. ${materia.materia.toUpperCase()}\nnotas: [${materia.notas}]\nmédia: ${materia.media}\nfaltas: ${materia.faltas}\nsituação: ${materia.situacao}\n`);
});
