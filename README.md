# iOS Flashlight 🔦

An interactive iOS-style flashlight interface built with **Rive animations** and **JavaScript**. Features real-time position tracking, dynamic brightness calculation, and smooth ON/OFF switching.

![iOS Flashlight Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![Rive](https://img.shields.io/badge/Rive-Animation-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## ✨ Features

- **🎯 Position-Based Brightness** - Brightness changes based on distance from center point
- **🔄 Interactive Switch** - Boolean toggle with ON/OFF state logging
- **📱 iOS-Style Design** - Authentic iOS flashlight appearance
- **⚡ Real-Time Updates** - Instant response to user interactions
- **🎨 Rive Integration** - Smooth animations powered by Rive runtime
- **🧹 Clean Code** - Well-documented, optimized JavaScript

## 🚀 Quick Start

### Prerequisites
- Modern web browser with WebGL support
- Local web server (recommended for development)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/theanimatedmonk/iOS-Flashlight.git
   cd iOS-Flashlight
   ```

2. **Open in browser:**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python3 -m http.server 8000
   # Visit: http://localhost:8000
   ```

## 📁 Project Structure

```
iOS-Flashlight/
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic & Rive integration
├── style.css           # iOS-style CSS styling
├── ios_flashlight.riv  # Rive animation file
└── README.md           # Project documentation
```

## 🛠️ Technical Implementation

### Core Functionality
- **Brightness Calculation**: Distance-based algorithm using center coordinates (150, 190)
- **Switch Monitoring**: Boolean property tracking with console logging
- **Rive Binding**: View model integration with data synchronization

### Key Components
```javascript
// Position tracking
const propX = vmi.number("x-coordinate");
const propY = vmi.number("y-coordinate");

// Brightness control
const propBrightness = vmi.number("brightness");

// Switch state
const propSwitch = vmi.boolean("switch");
```

## 🎮 How It Works

1. **Position Tracking** - X/Y coordinates are monitored from Rive animation
2. **Distance Calculation** - Calculates distance from center point (150, 190)
3. **Brightness Mapping** - Linear interpolation: 0-120px distance → 0-100% brightness
4. **Switch Logging** - Console outputs: `💡 Flashlight: ON` or `💡 Flashlight: OFF`

## 🔧 Configuration

### Brightness Formula
```javascript
brightness = (distance / maxDistance) * 100
// maxDistance = 120px from center
```

### Center Coordinates
```javascript
const cx = 150, cy = 190; // Adjustable center point
```

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [https://github.com/theanimatedmonk/iOS-Flashlight](https://github.com/theanimatedmonk/iOS-Flashlight)
- **Rive**: [https://rive.app](https://rive.app)
- **Live Demo**: *Coming Soon*

---

**Built with ❤️ using Rive, JavaScript, and CSS**
