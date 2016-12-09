//the entire foundation for async/await is promises
//Promise
//A promise represents the eventual result of an asynchronous operation.
//Every async function you write will return a promise, and
//every thing you await will ordinarily be a promise.
//Promise force consistent asynchronicity

//Async/Await allows you to write asynchronous code that appears to be synchronous

//Await: it functions exactly the same way as calling .then() on a promise but
//without requiring any callback function

//Async functions don’t magically wait for themselves. You must await, or you’ll get a promise instead of the value you expect.


/*
* Await multiple values
* */

let [foo, bar] = await Promise.all([getFoo(), getBar()]);

/*
* call back to Promise
* */

function callbackToPromise(method, ...args) {
    return new Promise(function(resolve, reject){
       return method(...args, function(err, result)) {
            return err ? reject (err) : resolve(result);
        }
    });
}

aysnc function getFirstUser() {
    let users = await callbackToPromise(getUsers);
    return users[0].name;
}

/*
* Handling errors
* try... catch...
* */

myApp.registerEndpoint('GET', '/api/firstUser', async function(reg, res){
    try {
        let firstUser = await getFirstUser();
        res.json(firstUser);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});