document.getElementById('convertBtn').addEventListener('click', function () {
  // Lấy dữ liệu từ textarea
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');
  
  // Tách dữ liệu thành các dòng
  const variableNames = inputText.split('\n');
  
  // Khởi tạo một mảng để lưu kết quả
  const results = [];

  // Duyệt qua từng dòng và chuyển đổi
  variableNames.forEach((varName, i) => {
    // Loại bỏ khoảng trắng thừa và chuyển tất cả về chữ thường
    varName = varName.trim().toLowerCase();

    // Tách từ theo dấu gạch dưới
    const nameParts = varName.split('_');

    // Chuyển đổi sang camelCase
    const camelCaseName = nameParts
      .map((part, index) => (index === 0 ? part : part[0].toUpperCase() + part.slice(1)))
      .join('');

    // Tạo chuỗi với các dấu tích
    const checkmarks = '✅'.repeat(i + 1);

    // Thêm kết quả vào mảng
    results.push(`${camelCaseName} ${checkmarks}`);
  });

  // Hiển thị kết quả trong textarea
  outputText.value = results.join('\n');
});
