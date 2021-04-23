// Complete the variadricAverage function so that it can take any number
// of arguments and calculate their average.
//
// Bonus Test: Edit the 'average' function to use the 'variadricAverage'.

function average(numbers) {
  return variadricAverage.apply(null, numbers);
}
console.log("The average is: " + average([2, 5, 6, 2, 45, 3, 23, 14]));

function variadricAverage() {
  // YOUR CODE HERE
  for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
    sum += arguments[i];
  }
  return sum / n;
}
console.log("The average is: " + variadricAverage(2, 5, 6, 2, 45, 3, 23, 14));

function onLoadHandler() {
  function executeQ1() {
    var myname = "umi atiyah";
    document.getElementById("my-name").innerHTML = myname;
  }

  function executeQ2(root, arr) {
    var item = ["item", "item", "item"];
    var text = "";
    for (var i = 0; i < item.length; i++) {
      text += item[i] + "<br>";
    }
    document.getElementById("q2-list").innerHTML = text;
  }

  function executeQ3() {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    let scott = new Person("Scott");
    let matt = new Person("Matt");
    document.getElementById("q3-list").innerHTML =
      scott.name + "<br>" + matt.name;
  }

  function executeQ4() {
    var data,
      i,
      x = "";
    data = {
      sample: [
        {
          description: "Lady with a red umbrella",
          "image-url": "https://i.imgur.com/pwpWaWu.jpg",
        },
        {
          description: "Flowers and some fruits",
          "image-url": "https://i.imgur.com/KIPtISY.jpg",
        },
        {
          description: "Beautiful scenery",
          "image-url": "https://i.imgur.com/2jMCqQ2.jpg",
        },
        {
          description: "Some kind of bird",
          "image-url": "https://i.imgur.com/QFDRuAh.jpg",
        },
        {
          description: "The attack of dragons",
          "image-url": "https://i.imgur.com/8yIIokW.jpg",
        },
      ],
    };

    for (i = 0; i < data.sample.length; i++) {
      x += data.sample[i].description;
    }
    var myJSON = JSON.stringify(x);
    document.getElementById("q4-answer").innerHTML = myJSON;
  }

  executeQ1();
  executeQ2();
  executeQ3();
  executeQ4();
}
