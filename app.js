

var app = (function() {
  
    function init() {

      var list = document.getElementById("todoList");
      var todoArray = [];
      var myBtn = document.getElementById("addItemBtn");
      var input = document.getElementById("newListItem");

      input.addEventListener('keyup', function (e) {
        e.preventDefault();
        if (e.keyCode == 13){
          myBtn.click();
        }
      });

      myBtn.addEventListener("click", addItem);

      function addItem(){
        todoArray.push(input.value);

        var todoListHTML = "";
        for(var i=0; i<todoArray.length; i++){
          todoListHTML += "<li>" + todoArray[i] + "</li>";
        }
        list.innerHTML = todoListHTML;

        input.value="";
      }


      list.addEventListener("click", function(e){
        if(e.target.tagName === 'LI'){
            e.target.setAttribute("class", "taskDone");
          }
      });

      render();
      bind();
    }

    function render() {
      document.getElementById("todoList") = list;
    }
    
    return {
      init: init,
    }
  })();
  
  document.addEventListener('DOMContentLoaded', function() {
    app.init();
  });