let array=[{"name":"Василий","age":6},{"name":"Виктор","age":4},{"name":"Пётр","age":8},{"name":"Иннокентий","age":1}]
let arr={"name":"Василий","age":6}
let getSortedArray=function(array,key){

    for (var i = 0; i < array.length; i++ ) {
        for (var j = i; j < array.length; j++ ) {
            if (array[i][key] > array[j][key]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array}
console.log(arr['name'])
console.log(array[0]['name'])
