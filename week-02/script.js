// CallBack 

function process(callback) {
  console.log("Processing...");
  callback();
}
// undefined
 

function finishedMessage(){
    console.log("Done")
}
function doSomething(callback){
    console.log("task Started");

    setTimeout(function(){
        console.log("Task completed.");
        callback();
    }, 1000);
}

// doSomething(finishedMessage);

function sum(a,b,callback){
    let result = a+b; 
    callback(result);
}
sum(10,20,(ans => {
    // console.log("my answer " + ans);
 
}) )

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");