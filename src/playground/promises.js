const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('something went wrong!');
    }, 5000);
    
});

console.log('before promise');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
});

console.log('after promise');
