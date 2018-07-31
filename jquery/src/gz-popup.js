(function($) {
  $.fn.gzPopup = function(o) {
    return new Masklayer($(this), o)
  }

  /**
   * 弹窗对象
   * @param  {dom} el 节点
   * @param  {object} o  设置参数
   * @constructor
   */
  function Masklayer(el, o) {
    this.el = el
    this.content
    this.oldClassName
    this.masklayer = $('<div class="masklayer"></div>')
    this.width = o.w || 200
    this.height = o.h || 200
    this.smWidth = o.smWidth || 80
    this.limitWidth = o.limitWidth || 750

    this.init()
  }
  /**
   * 初始化
   * @return {[type]} [description]
   */
  Masklayer.prototype.init = function() {
    this.styleSet()
    this.domSet()
    this.methodSet()
  }

  /**
   * dom节点设置
   * @return {[type]} [description]
   */
  Masklayer.prototype.domSet = function() {
    this.el.hide()
    this.oldClassName = this.el[0].className
    this.content = this.el.html()
    this.el.remove()
    this.masklayer
      .hide()
      .addClass(this.oldClassName)
      .append($('<div class="masklayer-content"></div>'))
      .find('.masklayer-content')
      .append($('<div class="masklayer-close glyphicon glyphicon-remove"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhUlEQVQ4T6WTO0sDQRSFz5mEoGjjAySFha2PQhHT+BeS3Q3YaKdWNhZaaKvgo0hvY2GhjcVsCOQX2BhFG4OFIIKFFqKNokmWubIhK+OiEHTKe8/5uGfmDvHPw7jf87w+AKsiMglgvNW/JHkeBEGhVCo92Z5vAMdxsiQPSPb8NJiIvACY933fj/pfAMdxZpVSh+0kMsbMFYvFo1DbBORyuYFEInEHoKMdAICPWq02VC6XH5sAz/O2AaxZ5hMADwBmWrVjAGkA05ZmV2u91gS4rlslOWw1340xGZIbJBvGmE2l1CmATktzrbUejgANkkl7fBG5V0plgiAwSqkzkoOxeA2tdSoCvJLsigPq9fpUWEulUpU4QETefN/vju7gCsCIHQHAlIgskTQA9gBUYhGqWuvRaIItkusWIDTcACi0assAxgAsWpodrfV6E5DP59MicvvnZwwh/1qkaCzXdV2S+wB6f1moZxFZ+HGVI0M2m+1PJpMr4WciORHWReSirc/U5hp/k30CG6idEYisAi4AAAAASUVORK5CYII="></div>'))
      .append($(this.content))
    $('body').append(this.masklayer)
  }

  /**
   * css样式字符串
   * @return {[type]} [description]
   */
  Masklayer.prototype.styleString = function() {
    return ".masklayer{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:998}.masklayer .masklayer-content{position:absolute;left:50%;top:50%;width:" + this.width + "px;height:" + this.height + "px;margin-left:-" + this.width / 2 + "px;margin-top:-" + this.height / 2 + "px;background-color:#fff;border-radius:4px;text-align:center;box-sizing:border-box;padding:21px 0}.masklayer .masklayer-close{position:absolute;right:12px;top:12px;cursor:pointer}@media screen and (max-width:" + this.limitWidth + "px){.masklayer .masklayer-content{width:" + this.smWidth + "%;margin-left:-" + this.smWidth / 2 + "%}}"
  }

  /**
   * style标签插入
   * @return {[type]} [description]
   */
  Masklayer.prototype.styleSet = function() {
    var $style = $('<style></style>').html(this.styleString())
    $('body').append($style)
  }

  /**
   * 事件绑定
   */
  Masklayer.prototype.methodSet = function() {
    this.masklayer[0].addEventListener('click', function(e) {
      var el = $(e.target || window.event.target)
      if (el.hasClass('masklayer') || el.hasClass('masklayer-close')) {
        this.close()
      }
    }.bind(this))
  };

  /**
   * 弹窗显示
   * @param  {Function} cb 事件结束后回调函数
   */
  Masklayer.prototype.open = function(cb) {
    this.masklayer.fadeIn('normal', cb || null)
  }

  /**
   * 弹窗消失
   * @param  {Function} cb 事件结束后回调函数
   */
  Masklayer.prototype.close = function(cb) {
    this.masklayer.fadeOut('normal', cb || null)
  }
})(jQuery)
