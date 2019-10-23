$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    event.preventDefault();
  });

    $("#form1").submit(function(event) {
      var nameInput = $("input#name").val();

      $(".name").append(nameInput);

      $("#letter").show();

      event.preventDefault();
  });

    $("#form2").submit(function(event) {
       var userInput = $("input#userInput").val();

       $(".userInput").append(userInput.toUpperCase());
       
       $("#shout").show();

       console.log(userInput);
       event.preventDefault();
  });
});
