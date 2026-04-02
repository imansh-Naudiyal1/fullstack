//  function wait(time){
// return new Promise((resolve) => {
//  setTimeout(() => {
// resolve("Done");
//  }, time);
// });
// }

// async function run() {
//   await wait(2000);
//   console.log("After 2 sec");
// }

// // run();

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, time);
  });
}

async function run() {
  await wait(1000);
  console.log("Step 1");

  await wait(2000);
  console.log("Step 2");

  await wait(1000);
  console.log("Step 3");
}

// run();

async function run() {
  const p1 = wait(1000);
  const p2 = wait(2000);
  const p3 = wait(3000);

  await p1;
  console.log("Step 1 done");

  await p2;
  console.log("Step 2 done");

  await p3;
  console.log("Step 3 done");
  
}

run();