window.addEventListener('load', function(){
/** @type {HTMLButtonElement} */
var openFormButton = document.querySelector(".open-form-button");
/** @type {HTMLElement} */
var modalOverlay = document.querySelector(".modal-overlay");
/** @type {HTMLFormElement} */
var form = document.querySelector(".modal-form");
var submitButton = document.querySelector(".submit-button");
var closeButton = document.querySelector(".close-button");
openFormButton.addEventListener("click", function() {
    $('.add-btn').removeAttr('data-disable-with')
    form.reset();
    modalOverlay.style.display = "block";
});

submitButton.addEventListener("click", function() {
  var userId = gon.userid
    $(function(){
      $.ajax({
        url: '/tasks',
        type: 'POST',
        dataType: 'json',
        async: true,
        data: {
          task_name: document.querySelector('input[type=text][name=task_name]').value,
          user_id: (userId)
        },
      })
      .done(function(data){
        var nesting = $('<div class="add-task-mass">').append('<div class="decrease-btn">▼</div>', '<div id="task-title">'+ data.task_name +'</div>', '<div class="increase-btn">▲</div>')
        $('.add-task').append(nesting)
        document.querySelector(`[name='']`).value = ''
      })
    });
});

closeButton.addEventListener("click", function() {
    modalOverlay.style.display = "none";
});
})