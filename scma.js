(function () {
  var project = "ima1zumi";
  var title = document.title;
  var metaDiscre = document.head.children;
  var metaLength = metaDiscre.length;
  var imageURL;
  for (var i = 0; i < metaLength; i++) {
    var proper = metaDiscre[i].getAttribute('property');
    if (proper === 'og:image') {
      imageURL = metaDiscre[i].content.replace(/"|'/, '');
    }
  }
  var d = new Date();
  var today = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join('-');
  var URL = window.location.href.replace(/"|'/, '');
  var quote = window.getSelection().toString();
  var body = ["[" + imageURL + "]", title, URL, ">" + quote, "[" + today + "]"];
  var body_final = encodeURIComponent(body.join('\n'));
  window.open('https://scrapbox.io/' + project + '/' + '%F0%9F%94%97' + encodeURIComponent(title.trim()) + '?body=' + body_final)
})
();
