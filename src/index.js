document.addEventListener("DOMContentLoaded", () => {
  document.getElementById ( "submit" ).addEventListener ( "click", function ( event ){
    event.preventDefault();

    let todo = document.getElementById ( "new-task-description" ).value;
  
    let unordered_list = document.getElementById ( "tasks" );
    let li = document.createElement ( "li" );
    li.textContent = todo;
    unordered_list.appendChild ( li );
  });

  
});

//Something of your choice! The main objective is to add a feature that allows the
//user's input to affect the DOM