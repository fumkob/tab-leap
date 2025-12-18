// Tab Leap background service worker

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'openTab') {
    // Determine if tab should be active (foreground) or inactive (background)
    // If openInBackground is true, open in background (active: false)
    // Otherwise, open in foreground (active: true) - maintains current behavior
    const shouldBeActive = !message.openInBackground;

    chrome.tabs.create({
      url: message.url,
      active: shouldBeActive
    });
  }
});
