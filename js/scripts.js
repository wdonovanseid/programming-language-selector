function add(num1, num2) {
  return num1 + num2;
}

let modal = document.getElementById("modalImg");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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

    let rubyTotal = 0;
    let csharpTotal = 0;
    let pythonTotal = 0;
    let goTotal = 0;
    let rustTotal = 0;
    let swiftTotal = 0;

    if (answer1 === "ruby") {
      rubyTotal = add(rubyTotal, 1);
    } else if (answer1 === "c#") {
      csharpTotal = add(csharpTotal, 1);
    } else if (answer1 === "python") {
      pythonTotal = add(pythonTotal, 1);
    } else if (answer1 === "go") {
      goTotal = add(goTotal, 1);
    } else if (answer1 === "rust") {
      rustTotal = add(rustTotal, 1);
    } else if (answer1 === "swift") {
      swiftTotal = add(swiftTotal, 1);
    }

    if (answer2 === "ruby") {
      rubyTotal = add(rubyTotal, 1);
    } else if (answer2 === "c#") {
      csharpTotal = add(csharpTotal, 1);
    } else if (answer2 === "python") {
      pythonTotal = add(pythonTotal, 1);
    } else if (answer2 === "go") {
      goTotal = add(goTotal, 1);
    } else if (answer2 === "rust") {
      rustTotal = add(rustTotal, 1);
    } else if (answer2 === "swift") {
      swiftTotal = add(swiftTotal, 1);
    }
    
    if (answer3 === "ruby") {
      rubyTotal = add(rubyTotal, 1);
    } else if (answer3 === "c#") {
      csharpTotal = add(csharpTotal, 1);
    } else if (answer3 === "python") {
      pythonTotal = add(pythonTotal, 1);
    } else if (answer3 === "go") {
      goTotal = add(goTotal, 1);
    } else if (answer3 === "rust") {
      rustTotal = add(rustTotal, 1);
    } else if (answer3 === "swift") {
      swiftTotal = add(swiftTotal, 1);
    }

    if (answer4 === "ruby") {
      rubyTotal = add(rubyTotal, 1);
    } else if (answer4 === "c#") {
      csharpTotal = add(csharpTotal, 1);
    } else if (answer4 === "python") {
      pythonTotal = add(pythonTotal, 1);
    } else if (answer4 === "go") {
      goTotal = add(goTotal, 1);
    } else if (answer4 === "rust") {
      rustTotal = add(rustTotal, 1);
    } else if (answer4 === "swift") {
      swiftTotal = add(swiftTotal, 1);
    }

    if (answer5 === "c#") {
      $("#congrats").show();
      $("body").addClass("monty").removeClass("main");
    }

    if (rubyTotal > csharpTotal && rubyTotal > pythonTotal && rubyTotal > goTotal && rubyTotal > rustTotal && rubyTotal > swiftTotal) {
      $("#pLanguage").text("Ruby on Rails");
      $("#choiceL").text("A's");
      $("#pLangInfo").text("Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks.")
    } else if (csharpTotal > rubyTotal && csharpTotal > pythonTotal && csharpTotal > goTotal && csharpTotal > rustTotal && csharpTotal > swiftTotal) {
      $("#pLanguage").text("C#");
      $("#choiceL").text("B's");
      $("#pLangInfo").text("C# is widely used for developing desktop applications, web applications and web services. It is used in creating applications of Microsoft at a large scale. C# is also used in game development in Unity.")
    } else if (pythonTotal > rubyTotal && pythonTotal > csharpTotal && pythonTotal > goTotal && pythonTotal > rustTotal && pythonTotal > swiftTotal) {
      $("#pLanguage").text("Python");
      $("#choiceL").text("C's");
      $("#pLangInfo").text("Python is a general-purpose coding language which means that, unlike HTML, CSS, and JavaScript, it can be used for other types of programming and software development besides web development. That includes back end development, software development, data science and writing system scripts among other things.")
    } else if (goTotal > rubyTotal && goTotal > csharpTotal && goTotal > pythonTotal && goTotal > rustTotal && goTotal > swiftTotal) {
      $("#pLanguage").text("Go");
      $("#choiceL").text("D's");
      $("#pLangInfo").text("Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.");
    } else if (rustTotal > rubyTotal && rustTotal > csharpTotal && rustTotal > goTotal && rustTotal > pythonTotal && rustTotal > swiftTotal) {
      $("#pLanguage").text("Rust");
      $("#choiceL").text("E's");
      $("#pLangInfo").text("Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, and provides memory safety without using garbage collection. The designers refined the language while writing the Servo layout or browser engine, and the Rust compiler.Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, and provides memory safety without using garbage collection. ... The designers refined the language while writing the Servo layout or browser engine, and the Rust compiler.")
    } else if (swiftTotal > rubyTotal && swiftTotal > csharpTotal && swiftTotal > goTotal && swiftTotal > rustTotal && swiftTotal > pythonTotal) {
      $("#pLanguage").text("Swift");
      $("#choiceL").text("F's");
      $("#pLangInfo").text("Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products.");
    } else {
      $("#pLanguage").text("ANY programming language");
      $("#choiceL").text("similar letters");
      $("#pLangInfo").html("<a href='https://coderscat.com/learn-programming-languages'>Click Here!</a>");
    }

    $("#theirName").text(fullname);
    $("#result").slideDown();
    setTimeout(function() {window.scrollBy(0, 2000); }, 400);
  });
});