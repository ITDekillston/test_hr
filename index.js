function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }
//
var onloading = {
  on: true,
  mass: [],
  add: (fun) => {
    if(onloading.on) {
      onloading.mass.push(fun);
    } else {
      fun();
    }
  },
  wo: window.onload = () => {
    onloading.mass.forEach(f => {
      f();
    })
  }
}
//
function rand(min, max) {
  return Math.random() * (max - min) + min;
}
//
var observer = {
  block: [],
  start: new IntersectionObserver(e => {
    e.forEach(b => {
      observer.block.forEach(bs => {
        if(bs[0] == b.target) {
          bs[1](b.isIntersecting);
        }
      });
    });
  }),
  add: (block, fun) => {
    observer.block.push([block, fun]);
    //
    observer.start.observe(block);
  }
};
//
var device;
//
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  device = false;
} else {
  device = true;
}










