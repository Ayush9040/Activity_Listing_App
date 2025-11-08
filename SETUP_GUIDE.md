# Quick Setup Guide

## 📦 Installation

```bash
# Navigate to project directory
cd "C:\Users\ADMIN\Desktop\GL Project"

# Install dependencies
npm install
```

## 🚀 Running the App

### Web (Fastest way to see the app)
```bash
npm run web
```
Opens automatically at http://localhost:8081

### Mobile with Expo Go
```bash
npm start
```
Then scan the QR code with:
- **iOS**: Camera app
- **Android**: Expo Go app

## 🧪 Testing
```bash
npm test
```

## 📱 Key Features to Demo

1. **Toggle Theme**: Tap sun/moon icon in top-right
2. **Filter by Type**: Scroll horizontally through type chips
3. **Filter by Status**: Select status chips
4. **View Activities**: Scroll through the list
5. **Action Buttons**: Tap Start/Continue/Review buttons

## 🎯 What to Highlight in Interviews

- **Cross-platform**: Same code for web and mobile
- **Performance**: FlatList virtualization, useMemo optimization
- **UI/UX**: Material Design 3, responsive, accessible
- **Clean Code**: Functional components, proper separation
- **Testing**: Jest + React Testing Library

## 📚 Files Structure

```
learning-activity-app/
├── App.js                      # Entry point
├── components/                 # Reusable components
│   ├── ActivityCard.js
│   ├── FilterBar.js
│   └── ThemeToggle.js
├── screens/                    # Screen components
│   └── ActivityListScreen.js
├── data/                       # Mock data
│   └── mockActivities.js
├── tests/                      # Test files
│   └── ActivityCard.test.js
├── package.json                # Dependencies
├── README.md                   # Full documentation
└── interview_prep.md          # Interview Q&A

```

## 💡 Common Questions

**Q: Why Expo?**
A: Quick setup, cross-platform support, easy deployment

**Q: Why React Native Paper?**
A: Material Design 3, excellent web support, consistent theming

**Q: Why no TypeScript?**
A: Per project requirements, but easy to add if needed

**Q: Why local state instead of Redux?**
A: Simple app, single screen, useState sufficient for this scope

## 🔧 Troubleshooting

**Can't install dependencies?**
```bash
npm cache clean --force
npm install
```

**App won't start?**
```bash
npm start -- --clear
```

**Port already in use?**
```bash
npm run web -- --port 8082
```

---

**Ready to impress! 🎉**

