//Counter message

var counter = () => {
  $("#counter").text($(".row").length);
};
counter();

//Trash function
$("body").on("click", ".trash", function () {
  $(this).parent().remove();
  counter();
});

//Add click
$("#btn").click(function () {
  //create div row
  var msg = $("#input_msg").val();
  $("body").append(
    '<div class="row"><img class="avatar" src="ressources/avatar-RG.jpeg" /><div><h6>Raphaël Guedj</h6><p>' +
      msg +
      '</p></div><img class="trash" src="ressources/trash.png" /></div>'
  );
  //delete input msg
  $("#input_msg").val("");
  //message counter
  counter();
});

//Search message

$("#btn_search").click(function () {
  $("h6").each(function () {
    if (
      $("#search_message").val() !== "" &&
      $("#search_message").val() !== $(this).text()
    ) {
      $(this).parent().parent().fadeOut();
    } else {
      $(this).parent().parent().delay(500).fadeIn();
    }
  });
  $("#search_message").val("");
});
