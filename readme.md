### Todo

- [ ] js小玩具-猜数字：随机生成5位数字，记录猜错的次数；文本框输入后提交；猜对后显示答案；猜错的次数多了就进行嘲讽；设置倒计时（？



### 03/10

1. 没有配置好webstrom导致了一个悲剧：less文件在自己文件夹下生成了css，修改了源代码；
2. 开始使用jquery。

- [x] **绘制三角形**：使用border-box和border进行三角形的绘制。使用es6的模板文字串的特性生成css属性，使用eval函数转成对象，使用jquery为特定的类设置style。

- [x] **悬停学姿势**：事先准备精灵图，设为播放区域背景图；使用CSS提前写好动画和应用动画的类；使用jQuery将类名添加或移出到元素上。

  此处致谢水群提供图片和灵感的朋友@超级小猫。

  *这里本可以有悬停选老婆的……现在只能悬停学姿势了*

### 03/09

1. 使用事件代理和switch-case为各个按钮添加事件。
2. 修改滚动条样式，将本文档使用iframe引入LOG页面；使用typroa的导出功能为页面添加css。
2. 向bootstrap的导航屈服了，旧版本导航放在了/lib文件夹下。

- [x] **好奇的颜文字**：黑眼球使用”子绝父相“进行居中；获取鼠标在窗口的位置；获取眼睛在窗口的位置；获取视口的大小；将三者进行一番运算，得到眼睛的translate()参数。

```js
var eyes = e.target.parentNode.parentNode.querySelector('p');
var eyeblack = eyes.querySelectorAll('i');
if (flag == 0) {
    for (var i = 0; i < eyeblack.length; i++) {
        eyeblack[i].innerText = "•";
        eyeblack[i].style.fontSize = '55px';
    }
    eyes.childNodes[1].nodeValue = '▽'
    document.addEventListener('mousemove', addmv);
    e.target.innerText = "不准看了"
    flag = 1;
    mousemove = 1;
    break;
} else {
    flag = 0;
    mousemove = 0;
    for (var i = 0; i < eyeblack.length; i++) {
        eyeblack[i].innerText = "×";
        eyeblack[i].style.fontSize = '40px';
    }
    eyes.childNodes[1].nodeValue = '△';
    e.target.innerText = "再试一次";
    break;
}

function addmv(em) {
    if (mousemove == 1) {
        var viewX = document.documentElement.clientWidth;
        var viewY = document.documentElement.clientHeight;
        var x = em.clientX;
        var y = em.clientY;
        var eyesPosition = eyes.getBoundingClientRect();
        var baseX = eyesPosition.left + 0.5 * eyesPosition.width;
        var baseY = eyesPosition.top + 0.5 * eyesPosition.height;
        if (x > baseX) {
            var scaleX = viewX - baseX;
        } else {
            var scaleX = baseX;
        }
        if (y > baseY) {
            var scaleY = viewY - baseY;
        } else {
            var scaleY = baseY;
        }
        var transX = (x - baseX) / scaleX * 18;
        var transY = (y - baseY) / scaleY * 6;
        for (var i = 0; i < eyeblack.length; i++) {
            eyeblack[i].style.transform = 'translate(' + (-50 + transX) + '%, ' + (-44 + transY) + '%)';
        };
    } else {
        this.removeEventListener('mousemove', addmv, false);
    }
}
```

### 03/07

1. 学习了响应式布局，使用前端框架Bootstrap和人家的构件重构首页；
2. 学习了less，使用less来做内容了。
3. 学习了js，开始用基础三件套来填充内容了。

- [x] **现在颜色**：获取当前时间戳，对时间戳（13位）开方后转16进制，获取小数点后6位作为色值，为div设置背景颜色。

```js
var showme = this.querySelector(".showme");
showme.style.backgroundColor = timeStampEQcolor();
showme.innerText = timeStampEQcolor();
e.target.innerText = "再试一次"

function timeStampEQcolor() {
    var timestamp = new Date().getTime();
    // console.log(timestamp)
    var color = Math.sqrt(timestamp);
    // console.log(color)
    // color = Math.floor(color);
    var colorhex = color.toString(16);
    colorhex = colorhex.substring(7, 13);

    return "#" + colorhex;
}
```



