//  Build: An async function that fetches data from a real public API (use fetch + JSONPlaceholder)
// •  Task: Handle every possible failure case — network errors, bad data, timeouts

async function getData(){
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const getResult = await result.json();
        console.log(getResult.address.city);

     }catch(error){
        console.log('Error');

    }
}
getData();