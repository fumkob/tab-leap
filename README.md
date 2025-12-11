# Tab Leap

> A minimal Chrome extension that brings new tabs to the foreground. Perfect for users who prefer active tab opening over background tab opening.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

Tab Leap automatically opens links in **foreground tabs** instead of background tabs:

- ⌘/Ctrl + Click links → opens in foreground
- Middle-click links → opens in foreground
- Links with `target="_blank"` → opens in foreground
- Lightweight & no configuration required
- Works on all websites

## Installation

### Development Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **"Developer mode"** (top right corner)
4. Click **"Load unpacked"** and select this project directory
5. The Tab Leap icon will appear in your Chrome toolbar

### Usage

Once installed, Tab Leap works automatically. Simply click links as you normally would—they'll open in foreground tabs instead of background tabs.

No additional setup or configuration needed.

## How It Works

Tab Leap uses two main components:

- **Content Script** (`content.js`): Intercepts link clicks and detects new-tab interactions
- **Background Service Worker** (`background.js`): Creates new tabs with the `active: true` flag to bring them to the foreground

This architecture ensures compatibility with modern Chrome extensions (Manifest V3).

## Project Structure

```
tab-leap/
├── manifest.json       # Extension configuration (Manifest V3)
├── background.js       # Service worker for tab creation
├── content.js          # Content script for link interception
├── popup.html          # Extension popup UI
├── popup.js            # Popup logic
├── icons/              # Extension icons
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Development

### Prerequisites

- Chrome/Chromium browser (v88 or later)
- A code editor of your choice

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/fumkob/tab-leap.git
   cd tab-leap
   ```

2. Load the extension in Chrome (see Installation above)

3. Make changes to the source files

4. Reload the extension in `chrome://extensions/` to test your changes

### File Descriptions

- **manifest.json**: Defines extension metadata, permissions, and entry points
- **background.js**: Service worker that listens for messages and creates new tabs
- **content.js**: Runs on web pages and intercepts link clicks to detect new-tab interactions
- **popup.html/popup.js**: Provides the extension popup UI (extensible for future features)

## Permissions

Tab Leap requests minimal permissions:

- `tabs`: Allows creation of new tabs
- `<all_urls>`: Required to inject content script on all websites

## Troubleshooting

### Extension not working on specific websites

Some sites use custom JavaScript to handle link clicks. Tab Leap works with standard HTML links. If you encounter issues:

1. Check the browser console for errors (press F12)
2. Verify the site isn't using `event.preventDefault()` to block link handling
3. Try reloading the extension in `chrome://extensions/`

### Extension not visible in toolbar

1. Go to `chrome://extensions/`
2. Find "Tab Leap" in the list
3. Click the extension icon to pin it to your toolbar

## Future Enhancements

Potential features for future versions:

- Popup UI for enabling/disabling the extension
- Whitelist/blacklist specific websites
- Keyboard shortcut customization
- Settings for different click behaviors

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

MIT License © 2025

## Author

Created as a simple utility to improve Chrome browsing experience.

---

**Feedback & Issues**

Found a bug or have a suggestion? [Open an issue](https://github.com/yourusername/tab-leap/issues) on GitHub.
