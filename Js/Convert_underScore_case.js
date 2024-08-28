document.getElementById('convertBtn').addEventListener('click', function () {
  // Lấy dữ liệu từ textarea
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');
  

  const variableNames = inputText.split('\n');
  
  const results = [];


  variableNames.forEach((varName, i) => {
    
    varName = varName.trim().toLowerCase();


    const nameParts = varName.split('_');


    const camelCaseName = nameParts
      .map((part, index) => (index === 0 ? part : part[0].toUpperCase() + part.slice(1)))
      .join('');

    const checkmarks = '✅'.repeat(i + 1);

    results.push(`${camelCaseName} ${checkmarks}`);
  });

  outputText.value = results.join('\n');
});
