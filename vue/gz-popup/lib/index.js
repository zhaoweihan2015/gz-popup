import GzPopupComponent from './components/GzPopup'

let $vm

export default {
  install(Vue, options) {
    const options_ = options || {}

    if(!$vm){
      let data = GzPopupComponent.data()

      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          data[key] = options[key]
        }
      }

      GzPopupComponent.data = ()=>{
        return data
      }
      let GzPopupPlugin = Vue.extend(GzPopupComponent)
      Vue.component("GzPopup",GzPopupPlugin)
    }
  }
}
