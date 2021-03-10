
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('Which sport is your absolute favourite? ', (answer5) => {
          console.log(`${answer1} is someone who likes ${answer2} and listens to ${answer3} while doing it. Probably over some ${answer4} and then follow that up with ${answer5}`);
          rl.close();
        })
      })
    })
  })
});