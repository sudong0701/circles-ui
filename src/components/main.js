(function () {
    if(!window.$circles) {
        window.$circles = ()=> {

        }
        //移动端集成响应式布局 rem
        function flexible (window, document) {
            var docEl = document.documentElement
            var dpr = window.devicePixelRatio || 1

            // adjust body font size
            function setBodyFontSize () {
                if (document.body) {
                    document.body.style.fontSize = (12 * dpr) + 'px'
                }
                else {
                    document.addEventListener('DOMContentLoaded', setBodyFontSize)
                }
            }
            setBodyFontSize();

            // set 1rem = viewWidth / 10
            function setRemUnit () {
                var rem = docEl.clientWidth / 7.5
                docEl.style.fontSize = rem + 'px'
            }

            setRemUnit()

            // reset rem unit on page resize
            window.addEventListener('resize', setRemUnit)
            window.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                    setRemUnit()
                }
            })

            // detect 0.5px supports
            if (dpr >= 2) {
                var fakeBody = document.createElement('body')
                var testElement = document.createElement('div')
                testElement.style.border = '.5px solid transparent'
                fakeBody.appendChild(testElement)
                docEl.appendChild(fakeBody)
                if (testElement.offsetHeight === 1) {
                    docEl.classList.add('hairlines')
                }
                docEl.removeChild(fakeBody)
            }
        }

        flexible(window, document)

        //使用阿里巴巴矢量库
        function icon() {
            const script = document.createElement('script')
            const css = document.createElement('link')
            const html = document.getElementsByTagName('html')[0]
            let style = document.createElement('style')
            style.type = 'text/css'
            style.innerHTML = `
                :root {
                    --color: #1989fa;
                    --inactiveColor: #7d7e80;
                    --disabledColor: #ebedf0;
                }
                
                :root[data-theme='Primary'] {
                  --color: #1989fa;
                  --inactiveColor: #7d7e80;
                  --disabledColor: #ebedf0;
                }
                
                :root[data-theme='Success'] {
                  --color: #69c23a;
                  --inactiveColor: #7d7e80;
                  --disabledColor: #ebedf0;
                }
                
                :root[data-theme='Warning'] {
                  --color: #E6A23C;
                  --inactiveColor: #7d7e80;
                  --disabledColor: #ebedf0;
                }
                
                :root[data-theme='Danger'] {
                  --color: #FF2C7D;
                  --inactiveColor: #7d7e80;
                  --disabledColor: #ebedf0;
                }
                
                :root[data-theme='Info'] {
                  --color: #909399;
                  --inactiveColor: #7d7e80;
                  --disabledColor: #ebedf0;
                }
            `
            script.src = '//at.alicdn.com/t/font_1665721_c349zj9aaqh.js'
            script.type = 'text/javascript'
            css.href = '//at.alicdn.com/t/font_1665721_c349zj9aaqh.css'
            css.rel = 'stylesheet'
            html.appendChild(css)
            html.appendChild(style)
            html.appendChild(script)
            Array.prototype.shuffle = function() {   //打乱数组
                var array = this;
                var m = array.length,
                    t, i;
                while (m) {
                    i = Math.floor(Math.random() * m--);
                    t = array[m];
                    array[m] = array[i];
                    array[i] = t;
                }
                return array;
            }
        }
        icon()
    }
})()