var app = (function() {
  
  var list;
  var input;

  function init() {

    list = document.getElementById("todoList");
    input = document.getElementById("newListItem");

    bind();
  }

  function addItem(){
    list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";

    input.value="";
  }

  function bind(){

    input.addEventListener('keyup', function (e) {
      e.preventDefault();
      if (e.keyCode == 13){
        addItem();
      }
    });

    list.addEventListener("click", function(e){
      if(e.target.tagName === 'LI'){
          e.target.setAttribute("class", "taskDone");
        }
    });
  }
  
  return {
    init: init,
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  app.init();
});