
const promises = [firstPromise(), secondPromise(), thirdPromise()];
 
Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });