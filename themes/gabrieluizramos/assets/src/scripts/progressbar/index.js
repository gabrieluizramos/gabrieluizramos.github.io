var readingProgressBar = (function() {
  var config ={
    article: '[data-progress]',
    articleRead: '[data-content]',
    progress: null
  };

  var events = {
    windowScroll: function () {
      var bodyScrollHeight = document.body.scrollHeight;
      var pageHeight = document.documentElement.clientHeight;
      var windowPosition = window.scrollY;

      var progress = (windowPosition / (bodyScrollHeight - pageHeight) * 100);
      progress = parseInt(progress);

      config.article.dataset.progress = progress;
    },

    init: function () {
      window.onscroll = events.windowScroll;
    }
  };

  var init = function() {
    (function queryElements () {
      config.article = document.querySelector(config.article);
      config.articleRead = document.querySelector(config.articleRead);
    })();

    events.init();
  }

  return init();
})();

export default readingProgressBar;