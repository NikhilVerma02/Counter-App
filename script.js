let num = 0;
const history = [];
const redoStack = [];

function updateNumber() {
  document.getElementById("number").innerText = num;
  document.getElementById("progress").style.width = `${(num / 150) * 100}%`;
}

function add() {
  if (num < 150) {
    history.push(num);
    num += 1;
    updateNumber();
    redoStack.length = 0; // Clear redo stack
  }
}

function subtract() {
  if (num > 0) {
    history.push(num);
    num -= 1;
    updateNumber();
    redoStack.length = 0; // Clear redo stack
  }
}

function undo() {
  if (history.length > 0) {
    redoStack.push(num);
    num = history.pop();
    updateNumber();
  }
}

function redo() {
  if (redoStack.length > 0) {
    history.push(num);
    num = redoStack.pop();
    updateNumber();
  }
}

updateNumber();
