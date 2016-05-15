var urls = []
var to_copy = ''

chrome.tabs.query({}, function(tabs) {
  tabs.forEach(function(tab) {
    urls.push(tab.url);
  })
  urls.forEach(function(url) {
    $("#result").append('<p>' + url + '</p>')
    to_copy = to_copy + url + "\n"
  })
})
