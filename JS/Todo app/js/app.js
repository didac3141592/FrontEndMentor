
function addNewItem() {
    let itemToAdd = document.querySelector('input');
    itemToAdd.addEventListener('keypress', function(e) {
        if(e.key != 'Enter') {
            doNone();
        }
        else {
            if(!itemToAdd.value) {
                emptyTask();
            }
            else {
                addTask(itemToAdd.value);
            }
        }
    });
};
function deleteItem() {
    let itemToDelete = document.querySelectorAll('.delete-task');
    itemToDelete.forEach(element => {
        element.addEventListener('click', function() {
            deleteTask(this.parentNode);
            itemsToDoYet();
        })
    });
};
function completeTask(task) {
    task.parentNode.classList.remove('active-task')
    task.parentNode.classList.add('completed-task');
    itemsToDoYet();
};
function uncompleteTask(task) {
    task.parentNode.classList.remove('completed-task');
    task.parentNode.classList.add('active-task')
    itemsToDoYet();

};
function checkItem() {
    let itemToCheck = document.querySelectorAll('.checkbox');
    itemToCheck.forEach(element => {
        element.addEventListener('click', function() {
            if(element.checked) {
                completeTask(this.parentNode);
            }
            else { 
                uncompleteTask(this.parentNode);
            }
        }) 
    }); 
    let secondItemToCheck = document.querySelectorAll('.pointer');
    secondItemToCheck.forEach(element => {
        element.addEventListener('click', function() {
            let li = element.parentNode;
            let children = li.children;
            let checkbox = children[0];
            if(checkbox.checked) {
                checkbox.checked = false;
                uncompleteTask(this.parentNode);
            }
            else {
                checkbox.checked = true;
                completeTask(this.parentNode);

            }
        })
        
    });
};
function updateUserData() {
    let itemsArray = [];
    let completedArray = [];
    let list = document.querySelectorAll('li');
    let theme = document.body.id;
    list.forEach(element => {
        itemsArray.push(element.outerText);
        completedArray.push(element.classList.contains('completed-task'));
    }); 
    localStorage.setItem('data', JSON.stringify(itemsArray));
    localStorage.setItem('completed', JSON.stringify(completedArray));
    localStorage.setItem('theme', theme);
};  
function doNone() {
};
function emptyTask() {
    alert('You cannot add an empty task to you to-do list');
};
function addTask(task) {
    let list = document.querySelector('ul');
    let newItem = document.createElement('li');
    let borderButton;
    newItem.classList.add('active-task');
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
    newItem.innerHTML = '<label class="checkbox-container"><span class="pointer">'+ task +'</span><input class="checkbox" type="checkbox"><span class="checkmark ' + borderButton +'"></span><button class="d-none f-right delete-task"><img src="images/icon-cross.svg" alt=""></button></label>';
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
function deleteTask(task) {
    task.parentNode.remove();
    updateUserData();
};


addNewItem();

deleteItem();

checkItem();




