var App = require('ghost-app')
,   MyAwesomeApp;

MyAwesomeApp = App.extend({
  filters: {
    prePostsRender: 'handlePrePostsRender'
  },
  handlePrePostsRender: function handlePrePostsRender(payload) {
    payload.html = payload.html.replace(
      /\[awesome\]/g
    , '<span style="color:darkorange;">Awesome!</span>'
    );
    return payload;
  }
});

module.exports = MyAwesomeApp;
