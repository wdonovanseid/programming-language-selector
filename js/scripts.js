function add(num1, num2) {
  return num1 + num2;
}


$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const fullname = $("#name").val();
    const answer1 = $("select#ques1").val();
    const answer2 = $("select#ques2").val();
    const answer3 = $("select#ques3").val();
    const answer4 = $("select#ques4").val();
    const answer5 = $("select#ques5").val();

    let rubytotal = 0;
    let csharptotal = 0;
    let pythontotal = 0;
    let gototal = 0;
    let rusttotal = 0;
    let swifttotal = 0;

    if (answer1 === "ruby") {
      rubytotal = add(rubytotal, 1);
    } else if (answer1 === "c#") {
      csharptotal = add(csharptotal, 1);
    } else if (answer1 === "python") {
      pythontotal = add(pythontotal, 1);
    } else if (answer1 === "go") {
      gototal = add(gototal, 1);
    } else if (answer1 === "rust") {
      rusttotal = add(rusttotal, 1);
    } else if (answer1 === "swift") {
      swifttotal = add(swifttotal, 1);
    }

    if (answer2 === "ruby") {
      rubytotal = add(rubytotal, 1);
    } else if (answer2 === "c#") {
      csharptotal = add(csharptotal, 1);
    } else if (answer2 === "python") {
      pythontotal = add(pythontotal, 1);
    } else if (answer2 === "go") {
      gototal = add(gototal, 1);
    } else if (answer2 === "rust") {
      rusttotal = add(rusttotal, 1);
    } else if (answer2 === "swift") {
      swifttotal = add(swifttotal, 1);
    }
    
    if (answer3 === "ruby") {
      rubytotal = add(rubytotal, 1);
    } else if (answer3 === "c#") {
      csharptotal = add(csharptotal, 1);
    } else if (answer3 === "python") {
      pythontotal = add(pythontotal, 1);
    } else if (answer3 === "go") {
      gototal = add(gototal, 1);
    } else if (answer3 === "rust") {
      rusttotal = add(rusttotal, 1);
    } else if (answer3 === "swift") {
      swifttotal = add(swifttotal, 1);
    }

    if (answer4 === "ruby") {
      rubytotal = add(rubytotal, 1);
    } else if (answer4 === "c#") {
      csharptotal = add(csharptotal, 1);
    } else if (answer4 === "python") {
      pythontotal = add(pythontotal, 1);
    } else if (answer4 === "go") {
      gototal = add(gototal, 1);
    } else if (answer4 === "rust") {
      rusttotal = add(rusttotal, 1);
    } else if (answer4 === "swift") {
      swifttotal = add(swifttotal, 1);
    }

    if (answer5 === "c#") {
      $("#congrats").show();
      $("body").addClass("monty").removeClass("main");
    }

    if (rubytotal > csharptotal && rubytotal > pythontotal && rubytotal > gottotal && rubytotal > rusttotal && rubytotal > swifttotal) {
      $("#pLanguage").text("Ruby on Rails");
      $("#choiceL").text("A's");
      $("#pLangInfo").text("Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks.")
    } else if (csharptotal > rubytotal && csharptotal > pythontotal && csharptotal > gottotal && csharptotal > rusttotal && csharptotal > swifttotal) {
      $("#pLanguage").text("C#");
      $("#choiceL").text("B's");
      $("#pLangInfo").text("C# is widely used for developing desktop applications, web applications and web services. It is used in creating applications of Microsoft at a large scale. C# is also used in game development in Unity.")
    } else if (pythontotal > rubytotal && pythontotal > csharptotal && pythontotal > gottotal && pythontotal > rusttotal && pythontotal > swifttotal) {
      $("#pLanguage").text("Python");
      $("#choiceL").text("C's");
      $("#pLangInfo").text("Python is a general-purpose coding language which means that, unlike HTML, CSS, and JavaScript, it can be used for other types of programming and software development besides web development. That includes back end development, software development, data science and writing system scripts among other things.")
    } else if (gototal > rubytotal && gototal > csharptotal && gototal > pythontotal && gototal > rusttotal && gototal > swifttotal) {
      $("#pLanguage").text("Go");
      $("#choiceL").text("D's");
      $("#pLangInfo").text("Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.");
    } else if (rusttotal > rubytotal && rusttotal > csharptotal && rusttotal > gottotal && rusttotal > pythontotal && pythontotal > swifttotal) {
      $("#pLanguage").text("Rust");
      $("#choiceL").text("E's");
      $("#pLangInfo").text("Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, and provides memory safety without using garbage collection. The designers refined the language while writing the Servo layout or browser engine, and the Rust compiler.Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, and provides memory safety without using garbage collection. ... The designers refined the language while writing the Servo layout or browser engine, and the Rust compiler.")
    } else if (swifttotal > rubytotal && swifttotal > csharptotal && swifttotal > gottotal && swifttotal > rusttotal && swifttotal > swifttotal) {
      $("#pLanguage").text("Swift");
      $("#choiceL").text("F's");
      $("#pLangInfo").text("Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products.");
    } else if (rubytotal === csharptotal || csharptotal === pythontotal || rubytotal === pythontotal) {
      $("#pLanguage").text("ANY programming language");
      $("#choiceL").text("similar letters");
      $("#pLangInfo").html("<a href='https://coderscat.com/learn-programming-languages'>Click Here!</a>");
    }

    $("#theirName").text(fullname);
    $("#result").slideDown();
    setTimeout(function() {window.scrollBy(0, 2000); }, 400);
  });
});