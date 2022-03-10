// 使用事件委托来给按钮绑定事件吧！

var buttons = document.querySelector("#css");
var flag = 0;
var mousemove = 0;
buttons.addEventListener('click', function (e) {
    console.log(e)
    // console.log(e.target.className)
    // console.log()

    switch (e.target.classList[2]) {

        case "getTimeStampColor":
            var showme = this.querySelector(".showme");
            showme.style.backgroundColor = timeStampEQcolor();
            showme.innerText = timeStampEQcolor();
            e.target.innerText = "再试一次"
            break;

        case "changeExpression":
            var eyes = e.target.parentNode.parentNode.querySelector('p');
            var eyeblack = eyes.querySelectorAll('i');
            // console.log(eyes.childNodes[1])
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
                }
                ;
            } else {
                this.removeEventListener('mousemove', addmv, false);

                // flag = 1;
            }
        }

        case "drowATriangle":
            var showme = $('.Triangle');
            showme.removeClass('triangleStyle');
            showme.removeAttr('style');

            var triangleStyle1 = ['border-left', 'border-right', 'border-bottom', 'border-top'];
            var triangleStyle2 = ['#282c34', '#f1e8ec', '#ccc', '#e4eeff','#fff'];
            //随机生成数字
            var leftorRight = Math.round(Math.random());
            var toporBottom = Math.round(Math.random()) + 2;

            var color1 = Math.floor(Math.random() * triangleStyle2.length);
            var color2 = Math.floor(Math.random() * triangleStyle2.length);
            while (color1 == color2) {
                color2 = Math.floor(Math.random() * triangleStyle2.length);
            }
            var borderstyle = `{\'${triangleStyle1[leftorRight]}\':\'200px solid ${triangleStyle2[color1]}\',
                                \'${triangleStyle1[toporBottom]}\':\'200px solid ${triangleStyle2[color2]}\',
                                \'${triangleStyle1[1-leftorRight]}\':0,
                                \'${triangleStyle1[5-toporBottom]}\':0,
                                }`
            var borderstyleOBJ = eval('('+borderstyle+')');
            console.log(borderstyle)
            console.log(borderstyleOBJ);
            showme.css(borderstyleOBJ);
        // console.log(color1,color2);


    }
})




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