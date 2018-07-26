import GzPopupComponent from './components/GzPopup'

let $vm

export default {
  install(Vue, options) {
    const options_ = options || {}

    if(!$vm){
      const GzPopupPlugin = Vue.extend(GzPopupComponent)
      $vm = new GzPopupPlugin({
        el:document.createElement('div')
      })


      $vm.w_ = 4000
      console.log($vm)
      // for (let key in options_) {
      //   if (options.hasOwnProperty(key)) {
      //
      //   }
      // }

      document.body.appendChild($vm.$el)

      Vue.component("GzPopup",$vm.$options)
    }
  }
}
