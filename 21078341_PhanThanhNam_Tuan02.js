// Giả sử các biến ban đầu
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// Chọn các phần tử DOM
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

// Xử lý sự kiện khi click vào nút "Check!"
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // Nếu không nhập gì
  if (!guess) {
    message.textContent = 'Không có số!';
  } else if (guess === secretNumber) {
    // Khi người chơi đoán đúng
    message.textContent = 'Đúng rồi!';
    number.textContent = secretNumber;
    body.style.backgroundColor = 'red';
  } else {
    // Khi người chơi đoán sai
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Quá cao!' : 'Quá thấp!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = 'Bạn đã thua cuộc!';
      scoreDisplay.textContent = 0;
    }
  }
});

// Xử lý sự kiện khi click vào nút "Chơi lại!"
againBtn.addEventListener('click', function () {
  // Khôi phục các giá trị ban đầu
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Khôi phục trạng thái ban đầu của các phần tử giao diện
  message.textContent = 'Bắt đầu đoán...';
  number.textContent = '?';
  scoreDisplay.textContent = score;
  guessInput.value = '';

  // Khôi phục lại các kiểu dáng ban đầu
  body.style.backgroundColor = 'white'; // Đổi nền thành trắng khi bấm "Chơi lại"
  number.style.width = '15rem';
});
