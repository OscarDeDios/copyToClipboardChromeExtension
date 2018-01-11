chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url:'popup.html'},function(tab){
    activeTab = tab.id;
    activeWin = tab.windowId;
    activeTabLoading = true;
  });
});