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

function setRank(name,wins){
    hero.name = name;
    if (wins <= 10){
        hero.rank = "Ferro";
    } else if (wins <= 20){
        hero.rank = "Bronze";
    } else if (twnds <= 50){
        hero.rank = "Prata";
    } else if (wins <= 80){
        hero.rank = "Ouro";
    } else if (wins <= 90){
        hero.rank = "Diamente";
    } else if (wins <= 100){
        hero.rank = "Lendário";
    } else if (wins >= 101){
        hero.rank = "Imortal";
    }
}

const hero = {
    name: "",
    qtndWins: 2,
    qtndDefeat: 1,
    rank: "",
}

let totalWins = hero.qtndWins - hero.qtndDefeat;
setRank("Christiano",totalWins);
console.log(`O Herói ${hero.name} tem de saldo de ${totalWins} está no nível de ${hero.rank}`)
