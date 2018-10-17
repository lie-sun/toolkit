"use strict";

/*
* 此js主要是数组去重
* 
* */
let arr = [1, 2, 3, 5, 4, 71, 2, 1];
console.log(arr);

//打印结果: [1, 2, 3, 5, 4, 71, 2, 1]

/**
 * 方法一 使用es6 Set方法去重
 * @param arr
 * @returns {any[]}
 */

function unique1(arr) {
    return Array.from(new Set(arr));
}

console.log(unique1(arr));

//执行结果: [1, 2, 3, 5, 4, 71]


/**
 * 方法二 使用indexOf去重
 * @param arr
 * @returns {*}
 */
function unique2(arr) {
    //1、首先判断是不是一个数组
    if (!Array.isArray(arr)) {
        console.log("type is't array")
        return false;
    }
    let array = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        if (array.indexOf(arr[i]) == -1) {
            array.push(arr[i])
        }
    }
    return array;
}

console.log(unique2(arr));

//打印结果: [1, 2, 3, 5, 4, 71]


/**
 * 方法三 使用sort方法去重
 * 先排序，然后判断新数组中是不是已有此数
 * @param arr
 * @returns {*}
 */
function unique3(arr) {
    arr = arr.sort();
    let array = [];
    array.push(arr[0]);
    for (let i = 1, j = arr.length; i < j; i++) {
        if (arr[i - 1] !== arr[i]) {
            array.push(arr[i])
        }
    }
    return array;
}

console.log(unique3(arr));

//打印结果: [1, 2, 3, 4, 5, 71]

/**
 * 方法四 使用includes方法去重
 * @param arr
 * @returns {*}
 */
function unique4(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is't array");
        return false;
    }
    let array = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(unique4(arr));

//打印结果: [1, 2, 3, 4, 5, 71]


/**
 * 方法五 使用filter方法去重
 * @param arr
 * @returns {*}
 */
function unique5(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    })

}

console.log(unique5(arr));

//打印结果: [1, 2, 3, 4, 5, 71]

/**
 * 方法六 使用es6 Map方法去重
 * @param arr
 * @returns {*}
 */
function unique6(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    let map = new Map();
    let array = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true);
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(unique6(arr));

//打印结果: [1, 2, 3, 4, 5, 71]

/**
 * 方法七 递归去重 使用递归注意推出条件
 * @param arr
 * @returns {*}
 */
function unique7(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    let len = arr.length;
    let array = arr.sort((a, b) => {
        return a > b;
    });

    function loop(index) {
        if (index <= 0) {
            return false;
        }
        if (array[index] === array[index - 1]) {
            array.splice(index, 1);
        }
        loop(index - 1);
    }

    loop(len);
    return array;
}

console.log(unique7(arr));
//打印结果: [1, 2, 3, 4, 5, 71]
