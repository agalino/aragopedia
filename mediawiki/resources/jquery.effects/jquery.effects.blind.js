/*!
 * jQuery UI Effects Blind 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(a,b){a.effects.blind=function(c){return this.queue(function(){var e=a(this),d=["position","top","bottom","left","right"];var i=a.effects.setMode(e,c.options.mode||"hide");var h=c.options.direction||"vertical";a.effects.save(e,d);e.show();var k=a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="vertical")?"height":"width";var j=(h=="vertical")?k.height():k.width();if(i=="show"){k.css(f,0)}var g={};g[f]=i=="show"?j:0;k.animate(g,c.duration,c.options.easing,function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(c.callback){c.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);