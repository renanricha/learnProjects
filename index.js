import entradaDados from 'readline-sync'

const questoes = [
    { id: 1, pergunta: 'Quando aconteceu o atentado as Torres Gêmeas?', resposta: '2001' },
    { id: 2, pergunta: 'Em que ano foi detectado o primeiro paciente com coronavírus?', resposta: '2019' },
    { id: 3, pergunta: 'Em que ano Steve Jobs apresentou o primeiro iPhone sem botão físico?', resposta: '2007' },
    { id: 4, pergunta: 'Qual o ano da morte de Stan Lee?', resposta: '2018' },
    { id: 5, pergunta: 'Qual ano o Brasil tornou-se tetracampeão mundial de futebol?', resposta: '1994' },
    { id: 6, pergunta: 'O primeiro lançamento de foguete da SpaceX ocorreu em?', resposta: '2017' },
    { id: 7, pergunta: 'Em que ano foi apresentado o primeiro computador eletrônico?', resposta: '1946' },
    { id: 8, pergunta: 'Em que ano ocorreu a Revolução Francesa?', resposta: '1789' },
    { id: 9, pergunta: 'Em que ano começou a Primeira Guerra Mundial?', resposta: '1914' },
    { id: 10, pergunta: 'Em que ano terminou a Segunda Guerra Mundial?', resposta: '1945' },
    { id: 11, pergunta: 'O muro de Berlim foi derrubado em qual ano?', resposta: '1989' },
    { id: 12, pergunta: 'Qual o ano que o Titanic afundou?', resposta: '1912'  },
    { id: 13, pergunta: 'Qual o ano de lançamento do primeiro PlayStation?', resposta: '1994' },
    { id: 14, pergunta: 'Em que ano a Declaração Universal dos Direitos Humanos foi assinada?', resposta: '1948' },
    { id: 15, pergunta: 'Em que ano a World Wide Web (WWW) foi criada por Tim Berners-Lee?', resposta: '1990' },
    { id: 16, pergunta: 'Em que ano o Euro foi introduzido como moeda única na Europa?', resposta: '1999' },
    { id: 17, pergunta: 'Em que ano foi abolido a escravidão no Brasil?', resposta: '1888' },
    { id: 18, pergunta: 'Qual ano foi instaurado o regime militar no Brasil?', resposta: '1964' },
    { id: 19, pergunta: 'Em que ano o Brasil proclamou a República?', resposta: '1889' },
    { id: 20, pergunta: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', resposta: '1904' },
    { id: 21, pergunta: 'Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?', resposta: '1950' },
    { id: 22, pergunta: 'Em que ano foi adotado o Acordo de Paris sobre mudanças climáticas?', resposta: '2015' },
    { id: 23, pergunta: 'Em qual ano ocorreu a guerra das Malvinas?', resposta: '1982' },
    { id: 24, pergunta: 'Qual foi o ano em que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', resposta: '1963' },
    { id: 25, pergunta: 'Em que ano a União Europeia (UE) foi estabelecida?', resposta: '1993' },
    { id: 26, pergunta: 'Em que ano a Guerra Civil Espanhola começou?', resposta: '1936' },
    { id: 27, pergunta: 'Em que ano Nelson Mandela foi libertado da prisão?', resposta: '1990' },
    { id: 28, pergunta: 'Em que ano a Alemanha foi reunificada após a Guerra Fria?', resposta: '1990' },
    { id: 29, pergunta: 'Qual foi o ano do acidente nuclear em Chernobyl?', resposta: '1986' },
    { id: 30, pergunta: 'Em que ano o homem pisou na Lua pela primeira vez?', resposta: '1969' }
]

console.log("--------QUIZ DE FATOS HISTÓRICOS--------")
console.log("Seja Bem-vindo jogador(a)!")

let nome = entradaDados.question('Digite o seu nome: ')
let pontuacao = 0
let qtdPerguntas = 10
/*
aqui vai a dica de ouro:
------------ Usar funções para tudo! ------------
*/

const embaralhar = () => Math.random() -  0.5

const questoesEmbaralhadas = questoes.sort(embaralhar)


// uso do 'for' para ficar mais limpo do que usar 'forEach'
for (let i = 0; i < qtdPerguntas; i++) {
    console.log(questoes[i].pergunta)
    let resp = entradaDados.question('Resposta: ')
    if (resp == questoes[i].resposta) {
        console.log(`Resposta correta!
        `)
        pontuacao += 1
    }
    else
    {
        console.log(`Resposta errada
        `)
    }
}

console.log(`
Jogador(a): ` + nome)
console.log("Pontuação final: " + pontuacao + " acertos.")

// uso do 'if', 'else if' e 'else' no fim para ver o range de pontos
if (pontuacao >= 8){
    console.log(`
    EXCELENTE! Você é um verdadeiro expert.
    `)
}
else if (pontuacao < 8 && pontuacao >= 6){
    console.log(`    
    MUITO BOM! Você acertou a maioria.
    `)
}
else if (pontuacao < 6 && pontuacao >= 4){
    console.log(`    
    BOM TRABALHO! Pratique um pouco mais.
    `)
}
else {
    console.log(`
    OH NÃO! Tente mais uma vez.
    `)
}
