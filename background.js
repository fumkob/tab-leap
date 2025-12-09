// Tab Leap background service worker

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'openTab') {
    chrome.tabs.create({
      url: message.url,
      active: true // Open in foreground
    });
  }
});
