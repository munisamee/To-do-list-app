

function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
       let list = $('#list');
       $('#list').appendChild(<li>To Do List</li>)
       list.appendChild(li);
       let inputValue = $('#input').val();
       li.appendChild(inputValue);
       let text = $('#inputValue');
       li.appendChild(text);
    

       if (inputValue ().text < 0) {
         $('#You must write something');
       }
    
     //2. Crossing out an item from the list of items:
       li.crossOut("strike", function(){
         li.addClass("dbclick");
       })
 
    
     //3(i). Adding the delete button "X":
     let crossOutButton = $('<div crossOutButton class="new-class">X</div>')
     $('li').appendChild(crossOutButton); 
     let crossOutButton = $ ('<addEventListener crossOutButton class="deleteListItem">click>')

    

     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     li.addClass("delete");

     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    