## Sistema de Cadastro de Notas e Faltas

Este é um sistema de cadastro de notas e faltas para matérias de alunos. O programa permite cadastrar matérias, notas e faltas para um aluno e determina se o aluno foi aprovado ou reprovado com base em suas notas e faltas.

Pré-requisitos

Node.js instalado
Módulo prompt-sync instalado
Instalação

# 1 - Instale o Node.js:

`# Para sistemas baseados em Unix
sudo apt update
sudo apt install nodejs
sudo apt install npm
`
`
 Para Windows
 Baixe e instale o Node.js a partir do site oficial
`

# 2 - Instale o módulo prompt-sync:

`npm install prompt-sync
`
## Funcionamento

O programa solicita o nome do aluno.
Permite o cadastro de no mínimo 3 matérias, com no mínimo 3 notas cada.
Solicita também o número de faltas para cada matéria.
Com base nas notas e faltas, determina se o aluno foi aprovado (verde) ou reprovado (vermelho).

# Exemplo de Saída

========================================
        SISTEMA DE CADASTRO - [NOTAS E FALTAS]
========================================
1. Cadastre no mínimo 3 matérias.
2. Para cada matéria, deve ser solicitado no mínimo 3 notas.
3. Você pode cadastrar quantas matérias forem necessárias.
========================================
✨ Aluno "João" cadastrado com sucesso!

📘 Cadastro da 1ª matéria | para o aluno João:
✅ Matéria "Matemática" cadastrada com sucesso.
📝 Cadastro de notas:
✅ Notas cadastradas com sucesso!
📚 Matérias cadastradas:
1. MATEMÁTICA
   notas: [8, 7.5, 9]
   média: 8.17
   faltas: 2
   situação: Aprovado

🌟 Finalizando cadastro. Obrigado!

## Licença

Este projeto está licenciado sob a MIT License.
