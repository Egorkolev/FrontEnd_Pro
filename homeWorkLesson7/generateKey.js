const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (lengthNum, characters) => {
    let key = "";
    const charactersLength = characters.length;

    for (let i = 0; i < lengthNum; i++) {
        const rendomIndex = Math.floor(Math.random() * charactersLength);
        key += characters.charAt(rendomIndex);
    }
    return key;

}

const key = generateKey(16, characters);
console.log(key);