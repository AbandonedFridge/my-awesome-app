var App = require('ghost-app')
,   MyAwesomeApp;

MyAwesomeApp = App.extend({
  filters: {
    prePostsRender: 'handlePrePostsRender'
  },
  handlePrePostsRender: function handlePrePostsRender(payload) {
    if (Array.isArray(payload))
      return payload.map(handlePrePostsRender);

    payload.html = payload.html.replace(
      /\[awesome( +\w+)?\]/g
    , (match, param) => {
        return '<span style="color:darkorange;">'
        + (param ? param.trim() + ' is ' : '')
        + 'Awesome!</span>'
      }
    );
    return payload;
  }
});

module.exports = MyAwesomeApp;
