// Tab Leap content script

function handleLinkClick(event) {
  const target = event.target.closest('a');

  if (!target || !target.href) {
    return;
  }

  // Check if opening in new tab (Cmd/Ctrl+click, middle click, or target="_blank")
  const openInNewTab =
    event.ctrlKey ||
    event.metaKey ||
    event.button === 1 ||
    target.target === '_blank';

  if (openInNewTab) {
    event.preventDefault();
    event.stopPropagation();

    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({
        type: 'openTab',
        url: target.href
      });
    } else {
      // Fallback: open normally if chrome API is not available
      window.open(target.href, '_blank');
    }
  }
}

// Listen for both click and auxclick events
document.addEventListener('click', handleLinkClick, true);
document.addEventListener('auxclick', handleLinkClick, true);
