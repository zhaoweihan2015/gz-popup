# gz-popup
#### 一个简单自用的弹窗插件
经过上一个弹窗插件在项目中的应用，我发现我的插件有一个很致命的问题————应用场景过窄，只能用于选择确认和取消的情况。假如需要弹窗中显示表单或者特定内容，则无法完成。因此在新项目中改用新的方法。
## 更新历史
#### 0.0.1 上传全部内容，完成说明文档。下期目标：实现可设置百分比尺寸，并提供边界宽度与手机版宽度的设定。
## jQuery
jQuery插件的做法其实是仿照vue的slot。通过用户自行添加插槽内容，插件对插入内容进行包裹和处理，尽量使弹窗只完成弹窗需要的事情，不去影响其他逻辑。
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
#### (1) el: 所选节点
#### (2) width: 弹窗宽度，默认值为200(px)，窗口宽度在750px以下时变为80%
#### (3) height: 弹窗高度，默认值为200(px)
```javascript
var m = new Masklayer({
	el: '#mask',
	width: 200,
	height: 180
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
```txt
尚未上传，请稍后
```
### 2.组件使用
```html
<gz-popup :show="isShow" w="800" h="200">
	<button type="button" name="button" @click="openMaskLayer">取消</button>
</gz-popup>
```
### 3.参数设置
#### (1) show: 是否显示，只能传入Boolean类型。
#### (2) w: 弹窗宽度，默认值为200(px)，窗口宽度在750px以下时变为80%
#### (3) h: 弹窗高度，默认值为200(px)