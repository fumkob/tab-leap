# Tab Leap

Chrome extension that opens links in foreground tabs instead of background tabs.

## Features

When you click a link that would normally open in a background tab, Tab Leap automatically brings it to the foreground:

- **Cmd/Ctrl + Click** - Opens in foreground tab
- **Middle-click** - Opens in foreground tab
- **target="_blank" links** - Opens in foreground tab

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select this directory

## Project Structure

```
tab-leap/
├── manifest.json       # Extension manifest
├── background.js      # Service worker for tab management
├── content.js         # Content script for link interception
├── popup.html         # Popup UI
├── popup.js           # Popup logic
├── icons/             # Extension icons
└── README.md
```

## License

MIT
