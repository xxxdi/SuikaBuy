chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        if (changeInfo.url && changeInfo.url.startsWith("https://buy.taobao.com/auction/order/confirm_order")) {
            console.log("updated from background, loading to confirm_order.htm")
            // chrome.tabs.executeScript({ code: "window.onload = function () {window.alert('try to buy!')}" });
            // chrome.tabs.executeScript({ code: "window.onload = function () {document.getElementsByClassName('go-back')[0].click()}" });
            chrome.tabs.executeScript({ code: "window.onload = function () {document.getElementsByClassName('go-btn')[0].click()}" });
        }
    }
);