(function(window) {
  window.Masklayer = function Masklayer(o) {
    var iw = $(window).width() < 750

    this.el = $(o.el || ".masklayer")
    this.content
    this.oldClassName
    this.masklayer = $('<div class="masklayer"></div>')
    this.width = iw ? "90%" : (o.width || 500) + "px"
    this.m_width = iw ? "45%" : o.width/2 + "px"
    this.height = o.height || 500

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
    return ".masklayer{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:998}.masklayer .masklayer-content{position:absolute;left:50%;top:50%;width:" + this.width + ";height:" + this.height + "px;margin-left:-" + this.m_width + ";margin-top:-" + this.height / 2 + "px;background-color:#fff;border-radius:4px;text-align:center;box-sizing:border-box;padding:21px 0}.masklayer .masklayer-close{position:absolute;right:12px;top:12px;cursor:pointer}"
  }

  /**
   * style标签插入
   * @return {[type]} [description]
   */
  Masklayer.prototype.styleSet = function() {
    var $style = $('<style></style>').html(this.styleString())
    $('body').append($style)
  }

  Masklayer.prototype.methodSet = function() {
    this.masklayer[0].addEventListener('click', function(e) {
      var el = $(e.target || window.event.target)
      if (el.hasClass('masklayer') || el.hasClass('masklayer-close')) {
        this.close()
      }
    }.bind(this))
  };


  Masklayer.prototype.open = function(cb) {
    this.masklayer.fadeIn('normal',cb || null)
  }

  Masklayer.prototype.close = function(cb) {
    this.masklayer.fadeOut('normal',cb || null)
  }
})(window)
