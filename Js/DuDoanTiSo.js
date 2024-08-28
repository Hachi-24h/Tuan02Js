// Dữ liệu từ web service
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer', 
        'Pavard', 
        'Martinez', 
        'Alaba', 
        'Davies', 
        'Kimmich', 
        'Goretzka', 
        'Muller', 
        'Gnabry', 
        'Lewandowski', 
        'Coman'
      ],
      [
        'Burki', 
        'Schulz', 
        'Hummels', 
        'Akanji', 
        'Hakimi', 
        'Weigl', 
        'Witsel', 
        'Hazard', 
        'Brandt', 
        'Sancho', 
        'Gotze'
      ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5
    }
  };
  

  const [players1, players2] = game.players;

  const [gk, ...fieldPlayers] = players1;
  

  const allPlayers = [...players1, ...players2];
  

  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  

  const {team1, draw, team2} = game.odds;
  
  // 6. Viết hàm 'printGoals' nhận số lượng bất kỳ tên cầu thủ và in ra console
  const printGoals = function(...players) {
    console.log(`${players.length} bàn thắng đã được ghi:`);
    for (const player of players) {
      console.log(player);
    }
  };
  

  team1 < team2 && console.log('Bayern Munich có khả năng thắng cao hơn');
  team2 < team1 && console.log('Borrussia Dortmund có khả năng thắng cao hơn');
  
  // Dữ liệu test cho yêu cầu 6
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  