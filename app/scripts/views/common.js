(function (global) {
  'use strict';
  var hopeCommon = {
    version: '0.0.1',
    versionDetail: {
      major: 0,
      minor: 0,
      patch: 1
    },
    description: 'ZhaoPai Project'
  };
  global.hopeView = {};

  $.extend(hopeCommon, {
    Element: (function () {
      var check = function (r) {
        return r.test(navigator.userAgent.toLowerCase());
      };
      var doc = document, isOpera = check(/opera/), isIE = !isOpera && check(/msie/), isStrict = doc.compatMode === 'CSS1Compat';

      var element = {
        //return the page viewport width
        getViewportWidth: function () {
          /*jshint -W117 */
          return !isStrict && !isOpera ? doc.body.clientWidth : isIE ? doc.documentElement.clientWidth : self.innerWidth;
        }, //return the page viewport height
        getViewportHeight: function () {
          return isIE ? (isStrict ? doc.documentElement.clientHeight : doc.body.clientHeight) : self.innerHeight;
        }
      };
      return element;
    })(),

    /**
     * 浏览器
     */
    browser: (function () {
      var userAgent = navigator.userAgent;
      var browser = {
        android: /Android/i.test(userAgent), iPhone: /iPhone/i.test(userAgent), iPad: /iPad/i.test(userAgent)
      };
      browser.ios = browser.iPhone || browser.iPad;
      browser.mobile = browser.android || browser.iPhone || browser.iPad;
      return browser;
    })()
  });

  hopeCommon.getViewportWidth = hopeCommon.Element.getViewportWidth;

  global.hopeCommon = hopeCommon;

  //ie7 ie8 compatibility
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (item) {
      var me = this;
      if (me.length === 0) {
        return -1;
      }
      for (var i = 0, len = me.length; i < len; i++) {
        if (item === me[i]) {
          return i;
        }
      }
      return -1;
    };
  }
})(window);

$(function () {
  'use strict';
  $(document.body).on('click', 'a', function (e) {
    if ($(e.target).attr('href') === '') {
      e.preventDefault();
    }
  });
});

