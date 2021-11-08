/*
 * @Author: BlackSkye
 * @Date: 2021-11-08 04:50:15
 * @LastEditTime: 2021-11-09 02:44:10
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
                return array.map((value)=>{
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
        concat(array,...values){
            if(!(array instanceof Array)){
                array = [array];
            }
            values.forEach(element => {
              if (element instanceof Array) {

                const len = element.length;
                for(let i = 0;i < len; i++){
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
        }




    };

    window.bYong = window.$ = bYong;
})(window)

console.log($.concat([1,2,3],4,5,[],'',[,[2]],[6],[7,8],{name:'a'}));
// console.log(_.compact([1,2,0,'',false,[4,0]]));