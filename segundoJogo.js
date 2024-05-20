// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

function setRank(name, wins, defeat){
    hero.name = name;
    let qtndWins = wins - defeat;
    hero.totalWins = qtndWins;
    if (qtndWins <= 10){
        return "Ferro";
    } else if (qtndWins <= 20){
        return "Bronze";
    } else if (qtndWins <= 50){
        return "Prata";
    } else if (qtndWins <= 80){
        return "Ouro";
    } else if (qtndWins <= 90){
        return "Diamente";
    } else if (qtndWins <= 100){
        return "Lendário";
    } else if (qtndWins >= 101){
        return "Imortal";
    }
}

const hero = {
    name: "",
    qtndWins: 0,
    qtndDefeat: 0,
    totalWins: 0,
    rank: "",
}

/* 
poderia incluir todas as mudanças diretamente na função, mas pesquisei sobre vi que era uma má prática :(, então evitei ao máximo, mas para desenvolver diversos testes, daria mais trabalho eu deixar desfragmentado as propriedades do objeto.

Exemplo de como eu usaria na forma de boa prática

hero.name = "Christiano"
hero.wins = wins;
hero.defeat = defeat;
hero.totalWins = wins-defeat;
hero.rank = setRank(hero.totalWins); // nesse caso mudaria os paramentos da função, é claro!
console.log(`O Herói ${hero.name} tem o saldo de vitórias de: ${hero.totalWins} e está no nível de ${hero.rank}`)

*/

hero.rank = setRank("Christiano",11,1)
console.log(`O Herói ${hero.name} tem o saldo de vitórias de: ${hero.totalWins} e está no nível de ${hero.rank}`)
