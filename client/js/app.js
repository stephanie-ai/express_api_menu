// ********************************************
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#new-item-form');
const itemsList = document.querySelector('ul');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitItem);

// Fetch all cats as soon as app is loaded
getAllMenuItems();

// ********************************************

/*
submitCat - submitItem
appendCat - appendMenuItem
menuData - menData
*/


// Menu flow
// index
function getAllMenuItems(){
    fetch('http://localhost:3000/menu')
        .then(r => r.json())
        .then(appendMenuItem)
        .catch(console.warn)
};

// create
function submitItem(e){
    e.preventDefault();

    const menuData = {
        name: e.target.name.value,
        price: e.target.price.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(menuData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/menu', options)
        .then(r => r.json())
        .then(appendMenuItem)
        .catch(console.warn)
};

// helpers
function appendMenuItem(data){
    data.menuItems.forEach(appendMenuItem);
};

function appendMenuItem(menuData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${menuData.name} || Price: ${menuData.price}`
    itemsList.append(newLi);
};

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    const msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************