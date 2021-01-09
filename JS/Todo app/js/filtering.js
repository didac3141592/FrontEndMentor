function filterActive() {
    let buttonActive = document.querySelector('#active-to-do');
    let buttonCompleted = document.querySelector('#completed-to-do');
    let buttonAll = document.querySelector('#all-to-do');  
    buttonActive.classList.add('filter-active');  
    buttonAll.classList.remove('filter-active');
    buttonCompleted.classList.remove('filter-active');
    allTasks = document.querySelectorAll('li');
    allTasks.forEach(element => {
        element.style.display = 'none';
    });
    activeTasks = document.querySelectorAll('.active-task');
    activeTasks.forEach(element => {
        element.style.display = 'inherit';   
    });
};
function filterCompleted() {
    let buttonActive = document.querySelector('#active-to-do');
    let buttonCompleted = document.querySelector('#completed-to-do');
    let buttonAll = document.querySelector('#all-to-do');
    buttonCompleted.classList.add('filter-active');
    buttonActive.classList.remove('filter-active');
    buttonAll.classList.remove('filter-active');
    allTasks = document.querySelectorAll('li');
    allTasks.forEach(element => {
        element.style.display = 'none';
    });
    completedTasks = document.querySelectorAll('.completed-task');
    completedTasks.forEach(element => {
        element.style.display = 'inherit';
    });
};
function filterAll() {
    let buttonActive = document.querySelector('#active-to-do');
    let buttonCompleted = document.querySelector('#completed-to-do');
    let buttonAll = document.querySelector('#all-to-do');      
    buttonAll.classList.add('filter-active');
    buttonActive.classList.remove('filter-active');
    buttonCompleted.classList.remove('filter-active');
    allTasks = document.querySelectorAll('li');
    allTasks.forEach(element => {
        element.style.display = 'inherit';
    });
};
function itemsToDoYet() {
    let items = document.querySelectorAll('.active-task');
    let counter = items.length;
    let itesmLeft = document.querySelector('#items-left');
    itesmLeft.innerHTML = counter + ' items left';
};
function filterItems() {
    let buttonActive = document.querySelector('#active-to-do');
    buttonActive.addEventListener('click', function() {
        filterActive();
    });
    let buttonAll = document.querySelector('#all-to-do');
    buttonAll.addEventListener('click', function() {
        filterAll();
    });
    let buttonCompleted = document.querySelector('#completed-to-do');
    buttonCompleted.addEventListener('click', function() {
        filterCompleted();
    });    
};
function itemsLeft() {
    let itemsLeft = document.querySelector('#items-left');
    itemsLeft.addEventListener('click', function() {
        filterActive();
    });
};

filterActive(); 

filterCompleted();

filterAll();
