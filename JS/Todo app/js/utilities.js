function showCross(){
    let li = document.querySelectorAll('.checkbox-container');
    li.forEach(element => {
        element.addEventListener('mouseover', function() {
            let crossButton = element.children;
            crossButton[3].style.display = 'inherit'; 
        })
    });
};
function hideCross(){
    let li = document.querySelectorAll('.checkbox-container');
    li.forEach(element => {
        element.addEventListener('mouseleave', function() {
            let crossButton = element.children;
            crossButton[3].style.display = 'none';
        })   
    });
};
function setPointer() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        })
    });
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        }) 
    });
    let li = document.querySelectorAll('.pointer');
    li.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        })
    });
};
function addCompleteTaskEvent() {
    let itemToComplete = document.querySelectorAll('.checkbox');
    itemToComplete.forEach(element => {
        element.addEventListener('click', function() {
            if(element.checked) {
                completeTask(this.parentNode);

            }
            else {
                uncompleteTask(this.parentNode);

            }
        })
    });
};
function addDeleteTaskEvent() {
    let itemToDelete = document.querySelectorAll('.delete-task');
    itemToDelete.forEach(element => {
        element.addEventListener('click', function() {
            deleteTask(this.parentNode);
            itemsToDoYet();
        })
    });
};
function clearCompleted() {
    let clearCompleted = document.querySelector('#clear-completed');
    clearCompleted.addEventListener('click', function() {
        let completedTasks = document.querySelectorAll('.completed-task');
        completedTasks.forEach(element => {
            let children = element.children;
            deleteTask(children[0]);
        });
    })
};
function addCompletedTask(task) {
    let list = document.querySelector('ul');
    let newItem = document.createElement('li');
    let borderButton;
    newItem.classList.add('completed-task');
    if(document.body.id === 'dark') {
        newItem.classList.add('color-dark-theme-one');
        newItem.classList.add('border-bottom-dark-theme');
        borderButton = 'border-button-dark-theme';
    }
    else {
        newItem.classList.add('color-light-theme-one');
        newItem.classList.add('border-bottom-light-theme');
        borderButton = 'border-button-light-theme';
    }
    newItem.innerHTML = `<label class="checkbox-container"><span class="pointer">${task}</span><input class="checkbox" type="checkbox" checked><span class="checkmark ${borderButton}"></span><button class="d-none f-right delete-task"><img src="images/icon-cross.svg" alt=""></button></label>`;
    list.appendChild(newItem);
    let input = document.querySelector('input');
    input.value = "" 
    itemsToDoYet();
    addDeleteTaskEvent();
    addCompleteTaskEvent();
    showCross();
    hideCross();
    setPointer();
    updateUserData();
};

setPointer();

showCross();

hideCross();

filterItems();

itemsLeft();

clearCompleted();

itemsToDoYet();

