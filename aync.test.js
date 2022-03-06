/**
 * Running some setup before every test
 */
beforeEach(()=>{
    console.log("before every test this will be executed");
})

afterEach(()=>{
    console.log("after every test this will be executed");
})

/**
 * Runnin once before the beginning of the file
 */
beforeAll(()=>{
    console.log("Before all");
})

/**
 * Runnin once at the end of the file
 */
 afterAll(()=>{
    console.log("After all");
})


/**
 * Testing the call back function - improperly
 */
test("testing callback", ()=>{
    function callback(data){
        expect(data).toBe("Vishwa");
    }
    fetchData(callback);
})

/**
 * 
 * Testing the callback function properly 
 */
test("testing callback properly", done=>{
    function callback(data) {
        try{
            expect(data).toBe("Vishwa");
            done();
        }catch(error){
            done(error);
        }
    }

    fetchData(callback);
})


function fetchData(callback){
    setTimeout(()=>{
        callback("Vishwa")
    },2000);
}


/**
 * Testing promises
 */

function promiseFunc(){
    return new Promise((resolve, reject) =>{
          resolve("Vishwa");
    });
}

test("testing promises", ()=>{
    return promiseFunc().then((msg)=>{
        expect(msg).toBe("Vishwa");
    })
})

test.only("Only I will run", ()=>{
    console.log("Only this executes");
})