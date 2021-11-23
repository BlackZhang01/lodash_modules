/*
 * @Author: BlackSkye
 * @Date: 2021-11-08 04:50:15
 * @LastEditTime: 2021-11-23 10:31:43
 * @LastEditors: Please set LastEditors
 * @Description: 模仿lodash实现功能
 * @FilePath: /lodash_modules/lodash.js
 */
/*
 * 
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃ 　
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃　　　　　　　　　　　
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug　　
 * 　　　┃　　　┃　　+　　　　　　　　　
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 * 
 */



(function (window, undefined) {



    const bYong = {
        /**
         * @description: 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
         * @param { array } array 需要处理的数组
         * @param { number } [size]  每个数组区块的长度
         * @return { Array } 返回一个包含拆分区块的新数组(注：相当于一个二维数组)
         */
        chunk(array, size = 1) {
            if (array instanceof Array) {
                let temp;
                let newArray = [];
                while (!(array == false)) {
                    temp = array.splice(0, size);
                    newArray.push(temp);
                }

                return newArray;
            } else {
                return [];
            }
        },

        /**
         * @description: 创建一个新数组，包含原数组中所有的非假值元素。例如 false,'',null,undefined,0,和 NaN 都是被认为是“假值”。
         * @param {Array} array待处理的数组
         * @return {Array} 返回过滤掉假值的新数组。
         */
        compact(array) {
            if (array instanceof Array) {
                return array.map((value) => {
                    if (value == false) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            } else {
                return [];
            }
        },

        /**
         * @description: 创建一个新数组，将array与任何数组或值连接在一起。
         * @param {Array} array被连接的数组
         * @param {any} values连接的值
         * @return {Array} 返回连接后的新数组。
         */
        concat(array, ...values) {
            if (!(array instanceof Array)) {
                array = [array];
            }
            values.forEach(element => {
                if (element instanceof Array) {

                    const len = element.length;
                    for (let i = 0; i < len; i++) {
                        array.push(element[i])
                    }
                    //   if (element.length !== 0) {
                    // element.forEach(val => {
                    //     array.push(val);
                    // })
                    //   } 
                } else {
                    array.push(element)
                }
            });
            return array;
        },

        /**
         * @description: 创建一个具有唯一array值的数组，每个不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数组（array参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
         * @param {Array} array 要检查得数组。
         * @param {...Array} values 排除得值。
         * @return {Array} 返回一个过滤后的新数组。
         */
        difference(array, ...values) {
            if (!(array instanceof Array) || array.length == 0) {
                return [];
            } else {
                // const len = values.length;
                // return  array.filter(element => {
                //             for (const val of values) {
                //                 if(val === element){
                //                     return -1;
                //                 }
                //             }
                //             return 1;
                //         })
                const result = [];
                const tempArr = this.concat(...values);
                array.forEach(ele => {
                    // console.log(ele)
                    for (let i = 0, len = tempArr.length; i < len; i++) {
                        // console.log(tempArr);
                        if(tempArr[i] === ele){
                            return -1;
                        }
                    }
                    result.push(ele);
                })
                return result;
            }
        },

        /**
         * @description: 创建一个切片数组，去除 array 前面的 n 个元素。（n 默认值为 1.）
         * @param {Array} array 要查询的数组。
         * @param {Number} n 要去除的元素个数。
         * @return {Array} 返回 array 剩余切片。
         */        
        drop(array,n=1){
            if(!(array instanceof Array) || array.length == 0){
                return [];
            }else{
                if(typeof n !== 'number'){
                    n = 1;
                }
                return array.splice(n);
            }
        },

        /**
         * @description: 创建一个切片数组，去除 array 尾部的 n 个元素。（n 默认值为 1.）
         * @param {Array} array 要查询的数组。
         * @param {Number} n 要去除的元素个数。
         * @return {Array} 返回 array 剩余切片。
         */        
        dropRight(array,n=1){
            if (!(array instanceof Array) || array.length == 0) {
                return [];
            } else {
                if(typeof n !== 'number'){
                    n = 1;
                }
                return array.splice(0,array.length - n)
            }
        },

        /**
         * @description: 使用 value 值来填充（替换）array，从 start 位置开始，到 end 位置结束（但不包含 end 位置）。
         * Note：这个方法会改变 array（注：不是创建新数组）。
         * @param {Array} array 要填充改变的数组。
         * @param {Any} value 填充给 array 的值。
         * @param {Number} start 开始位置（默认 0）。
         * @param {Number} end 结束位置（默认 array.length）。
         * @return {Array} 返回 array。
         */        
        fill(array,value,start = 0,end = array.length){
            if (!(array instanceof Array) || array.length == 0) {
                return [];
            } else {
                start = typeof start !== 'number' ? 0:start;
                end = typeof end !== 'number' ? array.length : end;
                const tempArr = [];
                const len = end - start;
                for(let i = 0;i < len; i++){
                    tempArr[i] = value;
                }
                array.splice(start,len,...tempArr);
                return array;
            }
            
        },

        /**
         * @description: 判断 value 是不是纯粹的对象，就是该对象是通过 "{}"或 "new Object" 创建的。
         * @param {*} value 待检测的值。
         * @return {Boolean}  返回布尔值。
         */        
        isObject(value){
            if(Object.prototype.toString.call(value) === '[object Object]'){
                return true;
            }else{
                return false;
            }
        },

        /**
         * @description: 该方法类似$.find,区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
         * @param {array} array 要搜索的数组。
         * @param {array|Function|object|string} predicate 这个函数会在每一次迭代调用。
         * @param {Number} fromIndex The index to search from.
         * @return {Number} 返回找到元素的索引值（index），否则返回 -1。
         */        
        findIndex(array,predicate,fromIndex=0){
            if (!(array instanceof Array) || array.length == 0) {
                return [];
            } else {
                for(let i = 0,len = array.length;i < len;i ++){
                    if(typeof predicate ==='function'){
                        let pre = predicate(array[i])
                        if(pre){
                            return i;
                        }
                    }else if(this.isObject(predicate)){
                        if(JSON.stringify(array[i] === JSON.stringify(predicate))){
                            return i;
                        }
                    }else{
                        return -1;
                    }
                }
            }
        },

        /**
         * @description: 减少一级array嵌套深度。
         * @param {array} array 需要减少嵌套层级的数组
         * @return {*} 返回减少嵌套层级后的新数组
         */        
        flatten(array){
            let newArr = [];
            array.forEach(value => {
                if(value instanceof Array){
                    value.forEach(val => {
                        newArr.push(val)
                    })
                }else{
                    newArr.push(value)
                }

            })
        }



    };

    window.bYong = window.$ = bYong;
})(window)

let arr = [1,2,3,[4,5],'a','b',[6,'c',[7,8,'d']],false,'']
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   

  console.log($.findIndex(users, function(o) { return o.user == 'barney'; }))
  // => 0
   
  // The `_.matches` iteratee shorthand.
console.log(  $.findIndex(users, { 'user': 'fred', 'active': false }));
  // => 1
// console.log($.fill(arr,'tes',1,4));
// console.log($.dropRight(arr,1));
// console.log($.drop(arr,3));
// console.log($.difference([1, 2, 3, [4, 5], [6, [7, 8]]], [2, 3],1))
// console.log($.concat([1,2,3],4,5,[],'',[,[2]],[6],[7,8],{name:'a'}));
// console.log(_.compact([1,2,0,'',false,[4,0]]));