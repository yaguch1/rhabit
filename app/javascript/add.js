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

    $(function(){
      $.ajax({
        url: '/tasks',
        type: 'POST',
        dataType: 'json',
        async: true,
        data: {
          task_name: document.querySelector('input[type=text][name=task_name]').value,
        },
      });
    });
});

closeButton.addEventListener("click", function() {
    modalOverlay.style.display = "none";
});
})