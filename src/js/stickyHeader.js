/* globals jQuery, document */
(function ($) {
  'use strict'
  let pluginName = 'stickyHeader'
  let defaults = {
    sizeGutter: 0,
    callbackFunction: function () {}
  }
  function Plugin (element, options) {
    this.element = element
    this.$element = $(this.element)
    this.options = options
    this.settings = $.extend({}, defaults, options)
    this.init()
  }
  Plugin.prototype = {
    init: function () {
      $(window).on('scroll', () => {
        let distance = $(window).scrollTop()
        if (distance > this.settings.sizeGutter) {
          this.$element.addClass('is-sticky')
        } else {
          this.$element.removeClass('is-sticky')
        }
      })
    }
  }
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options))
      }
    })
  }
}(jQuery))
