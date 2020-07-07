var one = () => {

    var arr = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];
        var newArray = arr.map(number => number * 4); newArray;
        var filteredValues = newArray.filter(number => number >= 8);
   
    return filteredValues;
}