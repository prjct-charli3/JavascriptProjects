class Person {

    constructor(name, age, home) {
    this.name = name;
    this.age = age;
    this.home = home;
  }

  displayHome(){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(this.home));
    return div;
  }

  displayAge(){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(this.age));
    return div;
  }

  displayName(){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(this.name));
    return div;
  }

  clicked() {
  nameDiv.appendChild(this.displayName());
  ageDiv.appendChild(this.displayAge());
  homeDiv.appendChild(this.displayHome());
}

};

function onClicker(){
  name = inputName.value;
  age = inputAge.value;
  home = inputHome.value;
  lists.push(name = new Person(name, age, home));
};

function print(){
  lists.forEach(l => l.clicked());
}

const date = new Date();
const div = document.getElementById('divArena');
const Btn = document.getElementById('MyBtn');
const Btn2 = document.getElementById('MyBtn-2');
const nameDiv = document.getElementById('name');
const ageDiv = document.getElementById('age');
const homeDiv = document.getElementById('home');

// INPUT FORM
const inputName = document.getElementById('nameInput');
const inputAge = document.getElementById('ageInput');
const inputHome = document.getElementById('homeInput');
const submitBtn = document.getElementById('submit');


// ARRAY TO HOLD PERSON OBJECTS
const lists = [];


// OUTPUT FUNCTIONS
document.getElementById('divArena').innerHTML = date.toLocaleString();
Btn.addEventListener("click", print);
