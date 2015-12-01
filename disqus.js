!function() {
  'use strict';

  var script;
  var template;

  window.disqus_config = function() {
    this.page.identifier = location.pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  };

  var main = function() {
    template = document.createElement('aside');

    template.id = 'disqus_thread';
    template.hidden = true;

    script = document.createElement('script');

    script.addEventListener('load', show);
    script.setAttribute('data-timestamp', Date.now());
    script.setAttribute('src', '//gibatronic-lab.disqus.com/embed.js');

    document.body.appendChild(template);
    document.body.appendChild(script);
  };

  var show = function() {
    template.removeAttribute('hidden');
  };

  if (document.readyState == 'loading') {
    return document.addEventListener('DOMContentLoaded', main);
  }

  main();
}();
