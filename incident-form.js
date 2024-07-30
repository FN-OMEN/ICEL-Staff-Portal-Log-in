var selectField = document.getElementById("selectField")
var selectText = document.getElementById("selectText")
var options = document.getElementsByClassName("options")
var list = document.getElementById("list")
var arrowIcon = document.getElementById("arrowIcon")

selectField.onclick = function () {
  list.classList.toggle("hide")
  arrowIcon.classList.toggle("rotate")
}

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent 
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
  }
  $("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
}