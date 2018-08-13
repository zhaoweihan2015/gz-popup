# gz-popup
#### 一个简单自用的弹窗插件
经过上一个弹窗插件在项目中的应用，我发现我的插件有一个很致命的问题————应用场景过窄，只能用于选择确认和取消的情况。假如需要弹窗中显示表单或者特定内容，则无法完成。因此在新项目中改用新的方法。
### 1.下载
```npm
npm install --save-dev gz-popup
```
### 2.组件使用
#### 需使用```Vue.use()```引入
```javascript
import GzPopup from 'gz-popup'

Vue.use(GzPopup,{
  limitWidth:980,
  smWidth:70
})
```
#### 在组件中使用
```html
<gz-popup v-model="isShow" w="800" h="200">
 <button type="button" name="button" @click="openMaskLayer">取消</button>
</gz-popup>
```
### 3.参数设置
#### 全局设置
#### (1) limitWidth:
边界宽度（小于此宽度算作移动端），默认值为750(px)
#### (2) smWidth:
移动端弹窗宽度（注意此处为百分比），默认值为80（%）。如果所设置的弹窗宽度比移动端界面宽度小，则按原尺寸显示，并不会按照此数值显示
#### 组件中设置
#### (1) show:
是否显示，只能传入Boolean类型。
#### (2) w:
弹窗宽度，默认值为200(px)，窗口宽度在750px以下时变为80%
#### (3) h:
弹窗高度，默认值为200(px)
