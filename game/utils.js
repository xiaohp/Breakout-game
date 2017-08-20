// 选择器
var e = sel => document.querySelector(sel)
// 自定义 log
var log = console.log.bind(console)
// 加载图片
var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}
// 矩形相交
var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}
// 判断数组相等
var arrayEqual = function(a, b) {
    if (JSON.stringify(a) === JSON.stringify(b)) {
        return true
    }
    return false
}
// 获取数组中元素下标
// 原生的 indexOf 不能判断元素是数组的情况
var arrayIndexOf = function(array, element) {
    var index = -1
    for (var i = 0; i < array.length; i++) {
        if (arrayEqual(array[i], element)) {
            index = i
            break
        }
    }
    return index
}

// 数组删除元素
var arrayRemove = function(array, element) {
    var index = arrayIndexOf(array, element)
    if (index > -1) {
        array.splice(index, 1)
    }
    return array
}
