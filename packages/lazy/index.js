import csLazy from './src/lazy.vue'

csLazy.install = function (Vue) {
    Vue.directive('lazy', {    //图片懒加载
        inserted: function (el, binding, vnode ) {
            if(typeof IntersectionObserver !== 'undefined') {   //支持IntersectionObserver
                var observer  = new IntersectionObserver(
                    function (entries) {
                        entries.map((item)=> {
                            if(item.isIntersecting) {
                                if(vnode.tag === 'img') {   //图片懒加载
                                    el.src = binding.value
                                }
                                observer.unobserve(el)
                            } else {
                                if(vnode.tag === 'img') {   //图片懒加载
                                    el.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                                }
                            }
                        })
                    }
                )
                observer.observe(el)
            }
        }
    })

    Vue.directive('lazyBGImg', {    //背景图片懒加载
        inserted: function (el, binding, vnode ) {
            if(typeof IntersectionObserver !== 'undefined') {   //支持IntersectionObserver
                var observer  = new IntersectionObserver(
                    function (entries) {
                        entries.map((item)=> {
                            if(item.isIntersecting) {
                                el.style.backgroundImage = `url(${binding.value})`
                                observer.unobserve(el)
                            } else {
                                el.style.backgroundImage = 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
                            }
                        })
                    }
                )
                observer.observe(el)
            }
        }
    })
}

export default csLazy