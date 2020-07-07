var one = () => {

    var arr = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];
        var newArray = arr.map(number => number * 4); newArray;
        var filteredValues = newArray.filter(number => number >= 8);
   
    return filteredValues;
}
    

var two = () => {
    try {
    var s = '{"nombre":"cristian", "ciudad":"santiago", "edad":"37"}';
    var o = JSON.stringify(s);
    }
    catch (error){
        alert("No puede ser procesado")
    }
    return o;
}


var three = () => {

    let o = one();
    let t = two();

    var four = {

        "status" : "OK",
        "one" : o,
        "two" : t
              }

console.log(four);
}

three();