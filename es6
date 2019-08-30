参考资料：
https://www.cnblogs.com/xzsty/p/7814798.html

1、js中const,var,let区别
    const定义的变量不可以修改，而且必须初始化。
    var定义的变量可以修改，如果不初始化会输出undefined，不会报错。
    let是块级作用域，函数内部使用let定义后，对函数外部无影响。
    
2、深入理解ES6之—set与map
    Set是无重复值的有序列表。Set会自动移除重复的值，因此你可以使用它来过滤数组中重复的值并返回结果。
    Map是有序的键值对，其中的键允许是任何类型。
    Set和Map是es6新增的两个数据集合。

    1）Set集合
        1.1创建Set并添加项目
            let set = new Set();
            set.add(5);
            set.add("5");
            console.log(set.size);//2
            Set不会使用强制类型转换来判断值是否重复。还可以向Set添加多个对象，他们不会被合并为同一项。
            如果add()方法用相同的值进行了多次调用，那么在第一次之后的调用实际上会被忽略。
            你可以使用数组来初始化一个Set，并且Set构造器确保不会重复使用这些值。
            你可以使用has()方法来测试某个值是否存在于set中
            
         1.2移除值   
         使用delete()方法来移除单个值或者调用clear()方法将所有值从Set中移除。
         
         1.3Set 上的forEach()方法
         let set = new Set([1, 2]);

        set.forEach(function(value, key, ownerSet) {
            console.log(`${key} ${value}`)
            console.log(ownerSet === set);
        })
        
        1.4将Set转换为数组
        let arr = [1,2,4,3,2,5,5];
        let set = new Set(arr);

        let arr1 = [...set];
        console.log(arr1);
        
     2）Map集合
     ES6的Map类型是键值对的有序列表，而键和值都可以是任意类型。键的比较使用的是Object.is()，因此你可以将5与“5”同时作为键，因为他们类型不同。
     可以调用set方法并传递一个键与一个关联的值，来给Map添加项；此后使用键名来调用get()方法便能提取对应的值。
     let map = new Map();
    map.set("name", "cc");
    map.set("age", 23);

    console.log(map.get("name"));//cc
    console.log(map.get("age"));//23
    
    也可以使用对象作为键
    let map = new Map();
    let key1 = {};
    let key2 = {};

    map.set(key1, 5);
    map.set(key2, 8);

    console.log(map.get(key1));//5
    console.log(map.get(key2));//8
    
    Map的方法和属性
    has(key)
    delete(key)
    clear()
    size
     
    Map上的forEach()方法
    let map = new Map([
    ["name", "cc"],
    ["age", 26]
    ]);

    map.forEach(function(value, key, source) {
        console.log(`${key}的值是${value}`);
        console.log(source === map);
    })
     
     
     
     
