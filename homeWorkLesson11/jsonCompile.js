const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';

const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';

function parseJSON(params) {
    try {
        const parsedJson = JSON.parse(params);
        return parsedJson;
    } catch (error) {
        console.error("some error with parse JSON", error);
    }
}

const returnedPars1 =  parseJSON(jsonString1);
console.log("returnedPars1", returnedPars1);

const returnedPars2 =  parseJSON(jsonString2);
console.log("returnedPars2", returnedPars2);