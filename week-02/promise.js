function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 5) {
        resolve("Success");
      } else {
        reject("Fail");
      }
    }, 5000);
  });
}

checkNumber(8)
  // .then((msg) => console.log(msg))
  // .catch((err) => console.error(err));

  function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1"), 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data + "Step 2"), 1000);
  });
}

step1()
  .then((res) => {
    return step2(res); 
  })
  .then((final) => {
    console.log(final);
  });