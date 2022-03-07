// 改变背景颜色

// var btn = document.querySelector('button');
// console.log('btn');
// var div = document.querySelector('div');
// btn.onclick = function() {
//     btn.innerText = '哈哈';
// }

var btn = document.getElementsByClassName('gettimestampcolor')[0];

var div = btn.parentNode.parentNode.getElementsByClassName('showme')[0];

btn.onclick = function() {
    var color = timeStampEQcolor();
    console.log(color)
    var hexcolor = '#' + color;
    div.style.backgroundColor = hexcolor;
    div.innerText = hexcolor;
    console.log(hexcolor)
    btn.innerText = '再试一次'
}

function timeStampEQcolor() {
    var timestamp = new Date().getTime();
    // console.log(timestamp)
    var color = Math.sqrt(timestamp);
    // console.log(color)
    // color = Math.floor(color);
    var colorhex = color.toString(16);
    colorhex = colorhex.substring(7, 13)

    return colorhex
}