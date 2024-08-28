const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
  
    registerNewAnswer() {
      const input = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
      const answer = Number(input);
  
      if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
        this.answers[answer]++;
      } else {
        alert('Invalid input. Please enter a valid option number.');
      }
  
      this.displayResults('string');
      this.displayResults('array');
    },
  
    displayResults(type = 'array') {
      const resultContainer = document.querySelector('.results');
      resultContainer.innerHTML = ''; // Clear previous results
  
      if (type === 'array') {
        console.log(this.answers);
        this.answers.forEach((res, index) => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result-item');
          resultItem.textContent = `${this.options[index]}: ${res}`;
          resultContainer.appendChild(resultItem);
        });
      } else if (type === 'string') {
        const resultStr = `Poll results are ${this.answers.join(', ')}`;
        console.log(resultStr);
        resultContainer.textContent = resultStr;
      }
    },
  };
  
  document.querySelector('.poll-btn').addEventListener('click', poll.registerNewAnswer.bind(poll));
  