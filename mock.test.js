/***
 * Using a mock function
 */

function forEach(items, callback){
    for(let index =0;index <items.length;index++){
        callback(items[index]);
    }
}

/**
 * In order to test the above function, we can mock the callback function
 * to test if the callback is invoked
 */

const mockCallback = jest.fn(x=>x+7);

forEach([0,1],mockCallback);


test("testing the mock function", ()=>{
    //check if the mockfunction is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    //Testing the outcome of the first call of the mock function
    expect(mockCallback.mock.results[0].value).toBe(7);

    //Test the first argument of the second call of the mock function
    expect(mockCallback.mock.calls[1][0]).toBe(1);
})


/**
 * Mocking the return value
 */

 const myMock = jest.fn();
 console.log(myMock());

 myMock.mockReturnValueOnce(10).mockReturnValueOnce('X').mockReturnValueOnce(true).mockReturnValueOnce('Vishwa');

 console.log(myMock(), myMock(), myMock(), myMock());



 