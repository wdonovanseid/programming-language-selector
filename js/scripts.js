function add(num1, num2) {
  return num1 + num2;
}


$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const answer1 = $("select#ques1").val();
    const answer2 = $("select#ques2").val();
    const answer3 = $("select#ques3").val();
    const answer4 = $("select#ques4").val();
    const answer5 = $("select#ques5").val();

    let rubytotal = 0;
    let csharptotal = 0;
    let pythontotal = 0;

    if (answer1 === ruby) {
      rubytotal = add(rubytotal, 1)
    }

    if (rubytotal > csharp && rubytotal > pythontotal) {
      $("#pLanguage").text("Ruby on Rails");
    } else if (csharp > rubytotal && csharp > pythontotal) {
      $("#pLanguage").text("C#");
    } else if (pythontotal > rubytotal && pythontotal > csharp) {
      $("#pLanguage").text("Python");
    } else if (rubytotal === csharptotal && csharp === pythontotal) {
      $("#pLanguage").text("ANY")
    }

    $("#result").show();
  });
});