
document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let button = document.getElementById('buttonGo');
    button.addEventListener('click', () => {
      let tab = tabs[0]

      checkPageAndClick(tab);
    });

    let jianlouBtn = document.getElementById('buyWhenever');
    let tryTimeCount = 0;
    jianlouBtn.addEventListener('click', () => {
      let jianlouTimer = setInterval(() => {
        chrome.tabs.executeScript({ file: "jianlou.js" });
        if (++tryTimeCount === 1000) {
          clearInterval(jianlouTimer);
        }
      }, 1000)
    })
  });
});

function checkPageAndClick(tab) {
  chrome.tabs.executeScript(null, { file: "checkTimeArrive.js" }, (result) => {
    console.log(result)
    if (result[0] == true) {
      console.log("now!!")
      chrome.tabs.executeScript(null, { file: "click.js" });
    } else {
      setTimeout(()=>{
        chrome.tabs.update(tab.id, { url: tab.url, active: true }, function (tab1) {
          // add listener so callback executes only if page loaded. otherwise calls instantly
          let listener = function (tabId, changeInfo, tab) {
            if (changeInfo.status === 'complete') {
              // remove listener, so only run once
              chrome.tabs.onUpdated.removeListener(listener);
              // do stuff
              checkPageAndClick(tab);
            }
          }
          chrome.tabs.onUpdated.addListener(listener);
        });
      }, 500)
    }
  });
}
