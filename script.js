const Modal = {
  show() {
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('out')
  },
  hide() {
    document
      .querySelector('.modal-overlay')
      .classList
      .add('out')
  }
}

const Todos = [] 

const addNotesToLayers = {
  addNewTodo1() {
    let inputElement = document.querySelector('.layer1 input');
    let olElement = document.querySelector('.layer1 ol');

    let liElement = `
      <li>${inputElement.value} <button onclick="Functions.DeleteTodo(event)">X</button></li>`;

    olElement.innerHTML += liElement;

    Todos.push(inputElement.value)
    inputElement.value = '';
  },

  addNewTodo2() {
    let inputElement = document.querySelector('.layer2 input');
    let olElement = document.querySelector('.layer2 ol');

    let liElement = `
      <li>${inputElement.value} <button onclick="Functions.DeleteTodo(event)">X</button></li>`;

    olElement.innerHTML += liElement;

    inputElement.value = ''
  },

  addNewTodo3() {
    let inputElement = document.querySelector('.layer3 input');
    let olElement = document.querySelector('.layer3 ol');

    let liElement = `
      <li>${inputElement.value} <button onclick="Functions.DeleteTodo(event)">X</button></li>`;

    olElement.innerHTML += liElement;

    inputElement.value = ''
  },

  addNewTodo4() {
    let inputElement = document.querySelector('.layer4 input');
    let olElement = document.querySelector('.layer4 ol');

    let liElement = `
      <li>${inputElement.value} <button onclick="Functions.DeleteTodo(event)">X</button></li>`;

    olElement.innerHTML += liElement;

    inputElement.value = ''
  },

}

const Functions = {
  DeleteTodo(event) {
    const olElement = event.path[2];
    const liElementt = event.path[1];
  
    olElement.removeChild(liElementt)
  },
}