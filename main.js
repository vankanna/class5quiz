

$(document).ready(function() {

    $( "#call" ).click(function(event) {
        event.preventDefault();
       var rank = $( "input[name=rank]:checked" ).val();
       var firstName = $("#firstName").val();
       var lastName = $("#lastName").val();

       $("#output").text("Hello, " + rank + " " + firstName + " " + lastName);
    });
});

