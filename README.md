# gz-popup
#### 一个简单自用的弹窗插件
经过上一个弹窗插件在项目中的应用，我发现我的插件有一个很致命的问题————应用场景过窄，只能用于选择确认和取消的情况。假如需要弹窗中显示表单或者特定内容，则无法完成。因此在新项目中改用新的方法。
## 更新历史
#### v0.0.3 jQuery版改为jQuery插件，修改原有插件部分设置
#### v0.0.2 增加手机版宽度和边界宽度设置，优化内部代码，减少样式渲染次数。
#### v0.0.1 上传全部内容，完成说明文档。下期目标：实现可设置百分比尺寸，并提供边界宽度与手机版宽度的设定。
## jQuery
jQuery插件的做法其实是仿照vue的slot。通过用户自定义插槽内容，插件对插入内容只进行包裹和事处理，尽量使弹窗只完成弹窗需要的事情，不去影响其他逻辑。
### 1.创建
#### HTML
在节点内填写所要展示的HTML内容
虽然在页面中用div包裹也可以，但是会有闪现问题，需要手动添加display:none
```html
<script type="type/popue" id="mask">
 <button type="button" onclick="m.close()">确定</button>
 <button type="button" onclick="m.close()">关闭</button>
</script>
```
#### JavaScript
#### (1) width: 
弹窗宽度，默认值为200(px)，窗口宽度在750px以下时变为80%
#### (2) height: 
弹窗高度，默认值为200(px)
#### (3) limitWidth: 
边界宽度（小于此宽度算作移动端），默认值为750(px)
#### (4) smWidth: 
移动端弹窗宽度（注意此处为百分比），默认值为80（%）。如果所设置的弹窗宽度比移动端界面宽度小，则按原尺寸显示，并不会按照此数值显示
```javascript
window.m = $('#mask').gzPopup({
	w: 500,
	h: 180,
	limitWidth: 600,
	smWidth: 50
})
```
### 2.方法
#### (1) 显示弹窗
```javascript
m.open()
```
#### (2) 关闭弹窗
```javascript
m.close()
```
## VUE
VUE版插件还是中规中矩的使用VUE自身的方法
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
<gz-popup :show="isShow" w="800" h="200">
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

