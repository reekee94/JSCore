function testThrow (exeption) {
    try {
        throw exeption;
    } catch (e) {console.log(`Caught: ${exeption}`)
    }
}

// testThrow(5);
testThrow(5);