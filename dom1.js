// console.log(document)
// const body = document.body

// console.log(body.childNodes)
// // child nodes give the tags in index.html

// function changeText(){
//     document.getElementById("change").textContent = "Standing by over..."
// }

// let counter = 0;

// let counterId = document.getElementById("counter");
// let incrementBtn = document.getElementById("increment-btn");

// incrementBtn.addEventListener("click", () => {
//     alert(`Current value of increment: ${counter}`)
//     counter++;
//     counterId.textContent = counter
// })

// let enterBtn = document.getElementById("enterBtn");
// let statusTag = document.getElementById("status")

// enterBtn.addEventListener("click", () => {
//     statusTag.innerHTML= "<h1>Entered Metaverse</h1>"
// })

// document.getElementById("MyForm").addEventListener("submit", (e) => {
//     e.preventDefault()

//     let radiusInput = document.getElementById("radius").value;
//     let radius = parseFloat(radiusInput);

//     let volumeField = document.getElementById("volume");

//     if (isNaN(radius) || radius < 0) {
//         volumeField.value = "NaN";
//         return
//     }

//     let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

//     volumeField.value = volume.toFixed(4)
// })

// const submitBtn = document.getElementById("submit");
// const playerInputs = document.getElementById("player-inputs");
// const gameSection = document.getElementById("game");
// const message = document.querySelector(".message");
// const cells = document.querySelectorAll(".cell");

// let player1 = "";
// let player2 = "";
// let currentPlayer = "";
// let board = Array(9).fill(null);
// let gameActive = true;

// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// submitBtn.addEventListener("click", () => {
//     player1 = document.getElementById("player-1").value
//     player2 = document.getElementById("player-2").value

//     if (player1 && player2) {
//       currentPlayer = player1;
//       playerInputs.classList.add("hidden");
//       gameSection.classList.remove("hidden");
//       message.textContent = `${currentPlayer}, you're up`;
//     } else {
//       alert("Please enter names for both players!");
//     }
// })

// cells.forEach((cell, index) => {
//   cell.addEventListener("click", () => {
//     if (!gameActive || cell.textContent) return;

//     let symbol = currentPlayer === player1 ? "X" : "O";
//     board[index] = symbol;
//     cell.textContent = symbol;

//     if (checkWinner(symbol)) {
//       message.textContent = `${currentPlayer}, congratulations you won!`;
//       gameActive = false;
//     } else if (board.every((cell) => cell !== null)) {
//       message.textContent = "It's a draw!";
//       gameActive = false;
//     } else {
//       currentPlayer = currentPlayer === player1 ? player2 : player1;
//       message.textContent = `${currentPlayer}, you're up`;
//     }
//   });
// });

// function checkWinner(symbol) {
//   for (let combo of winningCombinations) {
//     const [a, b, c] = combo;
//     if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
//       highlightWinner(combo);
//       return true;
//     }
//   }
//   return false;
// }

// function highlightWinner(combo) {
//   combo.forEach((i) => {
//     cells[i].classList.add("winner");
//   });
// }

// const submitBtn = document.getElementById("submit");
// const bookList = document.getElementById("book-list");

// submitBtn.addEventListener("click", () => {
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const isbn = document.getElementById("isbn").value;

//   if (title ==='' || author === '' || isbn === ''){
//     alert(`Please fill all fields`)
//     return;
//   }

//   const row = document.createElement("tr")
//   row.innerHTML = `
//   <td>${title}</td>
//   <td>${author}</td>
//   <td>${isbn}</td>
//   <td><button class = "delete">X</button></td>
//   `

//   bookList.appendChild(row);

//   document.getElementById("title").value = "";
//   document.getElementById("author").value = "";
//   document.getElementById("isbn").value = "";
// })

// bookList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.parentElement.remove()
//   }
// })

// const getSumBtn = document.createElement("button")
// getSumBtn.append("Get Total Price")
// document.body.appendChild(getSumBtn)

// const getSum = () => {
//   const prices = document.querySelectorAll(".price")
//   let totalPrice = 0;

//   prices.forEach(cell => {
//     totalPrice += parseFloat(cell.textContent) || 0
//   })

//   const oldTotal = document.getElementById("totalRow");
//   if (oldTotal) oldTotal.remove();

//   const table = document.querySelector("table")
//   const totalRow = document.createElement("tr")
//   totalRow.id = "totalRow"

//   const totalCell = document.createElement("td")
//   totalCell.textContent = `Total Price: Rs. ${totalPrice}`

//   totalRow.appendChild(totalCell)
//   table.appendChild(totalRow)
// }

// getSumBtn.addEventListener("click", getSum)

// const plusBtn = document.querySelector("#plus")
// const minusBtn = document.querySelector("#minus")
// const productBtn = document.querySelector("#multiply")
// const divideBtn = document.querySelector("#divide")
// const remainderBtn = document.querySelector("#remainder")

// const resultText = document.querySelector("#result-div");

// plusBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value)
//   const input2 = parseFloat(document.querySelector("#input-2").value)
//   resultText.textContent = `Result: ${input1 + input2}`
// })
// minusBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);
//   resultText.textContent = `Result: ${input1 - input2}`;
// });
// productBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);
//   resultText.textContent = `Result: ${input1 * input2}`;
// });

// divideBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);

//   if (input2 === 0) {
//     resultText.textContent = `Cannot divide by 0`
//   }
//   else
//   resultText.textContent = `Result: ${input1 / input2}`;
// });

// remainderBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);
//    if (input2 === 0) {
//      resultText.textContent = `Cannot divide by 0`;
//    } else
//      resultText.textContent = `Result: ${input1 % input2}`;
// });

let count = 0;

const countEl = document.getElementById("count");
const errorEl = document.getElementById("error");
const clearBtn = document.getElementById("clearBtn");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  errorEl.style.display = "none";
  clearBtn.style.display = "inline-block";
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  if (count === 0) {
    errorEl.style.display = "block";
  } else {
    count--;
    countEl.textContent = count;
    errorEl.style.display = "none";
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
  clearBtn.style.display = "none";
  errorEl.style.display = "none";
});