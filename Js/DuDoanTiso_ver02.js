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
  
  // 1. Lặp qua mảng `game.scored` và in tên cầu thủ cùng với số bàn thắng
  game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // 2. Sử dụng vòng lặp để tính trung bình của các tỷ lệ cược và in ra console
  const odds = Object.values(game.odds);
  let averageOdd = 0;
  
  for (const odd of odds) {
    averageOdd += odd;
  }
  averageOdd /= odds.length;
  
  console.log(`Average odd: ${averageOdd}`);
  
  // 3. In 3 tỷ lệ cược ra console với định dạng đẹp
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'draw' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
  }
  
  // 4. Tạo đối tượng `scorers` chứa tên cầu thủ và số bàn thắng
  const scorers = {};
  
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  
  console.log(scorers);
  