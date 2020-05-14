function add(num1, num2) {
    // console.log([...arguments]);
    const args = [...arguments];
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

const result = add(2, 3, 10, 12);
console.log(result);