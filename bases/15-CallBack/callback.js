function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function processResult(data) {
    console.log(`Received data: ${data.name}, ${data.age}`);
}

fetchData(processResult);


