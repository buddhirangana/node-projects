const promise = new Promise((resolve, reject) => {
    resolve('Success');
    //reject('Failure');
})
    .then(value => {
        console.log(value); //Success
        return "One";
    })
    .then(value => {
        console.log(value); //One
        return "Two";
    })
    .then(value => {
        console.log(value); //Two
        return "Three";
    })
    .then(value => {
        console.log(value); //Three
        return "Four";
    })
    .catch(error => {
        console.log(error);
    });