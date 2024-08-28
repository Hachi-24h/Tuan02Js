// Dữ liệu từ nhật ký sự kiện trong trận đấu
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  // 1. Tạo mảng 'events' chứa các sự kiện khác nhau đã xảy ra trong trận đấu (không trùng lặp)
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  // 2. Xóa sự kiện thẻ vàng ở phút 64
  gameEvents.delete(64);
  console.log(gameEvents);
  
  // 3. Tính toán và in ra chuỗi: "Một sự kiện đã xảy ra, trung bình cứ sau 9 phút"
  const totalMinutes = 90;
  const eventFrequency = totalMinutes / gameEvents.size;
  console.log(`An event happened, on average, every ${eventFrequency} minutes`);
  
  // 4. Lặp qua 'gameEvents' và in ra console, đánh dấu xem sự kiện xảy ra ở hiệp 1 hay hiệp 2
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
  }
  