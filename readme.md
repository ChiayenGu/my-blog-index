### Todo

- [ ] ~~js小玩具-表单密码检查：点击眼睛查看密码（文本框），再点一次恢复密码（密码框），判断密码是否为6-16位，正确绿色，错误红色，小图标变化~~  **使用猜数字替代**

- [ ] js小玩具-猜数字：随机生成5位数字，记录猜错的次数；文本框输入后提交；猜对后显示答案；猜错的次数多了就进行嘲讽；设置倒计时（？

- [ ] css/js小玩具-鼠标滑过选老婆：点击开始闪烁，使用精灵图动画，hover时暂停；可以用js也可以用css做

  等待进阶：使用爬虫爬取二次元美少女头像（？），点击换一批。

- [ ] ~~js小玩具-图片跟随鼠标移动，mousemove事件，将图片设为绝对定位，将鼠标位置传给图片。~~  **使用好奇的颜文字替代**

### 03/09

1. 使用事件代理和switch-case为各个按钮添加事件。
2. 修改滚动条样式，将本文档使用iframe引入LOG页面；使用typroa的导出功能为页面添加css。
2. 向bootstrap的导航屈服了，旧版本导航放在了/lib文件夹下。

- 好奇的颜文字：黑眼球使用”子绝父相“进行居中；获取鼠标在窗口的位置；获取眼睛在窗口的位置；获取视口的大小；将三者进行一番运算，得到眼睛的translate()参数。

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

- 现在颜色：获取当前时间戳，对时间戳（13位）开方后转16进制，获取小数点后6位作为色值，为div设置背景颜色。

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

  

