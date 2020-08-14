$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const answer1 = $("select#ques1").val();
    const answer2 = $("select#ques2").val();
    const answer3 = $("select#ques3").val();
    const answer4 = $("select#ques4").val();
    const answer5 = $("select#ques5").val();
    
  });
});