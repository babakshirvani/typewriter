const sentence = "hello there from lighthouse lab \n";

const myfunc = function(sentence) {
  sentence = sentence.split("");
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(`${sentence[i]}`)
    }, delay);
    delay += 50;
  }
}

myfunc(sentence)