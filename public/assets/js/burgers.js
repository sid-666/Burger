// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devouer").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevouer");

    $(this).parent().css("justify-content", "flex-end");
    $(this).addClass("hide");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed sleep to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created burger order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
