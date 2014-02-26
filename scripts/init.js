(function() {
  'use strict';

  var origin = 'http://stack.versal.com',
      sid = '544814f6-3e75-4afd-b32a-fa564bc52a8e';

  window.addEventListener('message', function(e) {
    if (e.origin === origin && JSON.parse(e.data).event === 'player:ready') {

      e.source.postMessage(JSON.stringify({
        event: 'player:launch',
        api: 'http://stack.versal.com/api2',
        course: 'fvfo3z',
        sid: sid,
        noEditable: true
      }), origin);
    }
  });

}());
