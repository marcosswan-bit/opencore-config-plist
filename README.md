# OpenCore Config.plist Simplifier

A web-based GUI tool to generate and manage OpenCore `config.plist` files for Hackintosh builds. Simplifies the complex configuration process with an interactive questionnaire and visual editor.

## Features

- 🎯 **Hardware Questionnaire** - Answer simple questions about your hardware
- 📝 **Visual Config Editor** - Edit config.plist with a user-friendly interface
- ✅ **Validation & Linting** - Real-time checks for configuration errors
- 📥 **Upload/Download** - Import existing configs or export your creations
- 💾 **Version Management** - Track different configurations
- 🔄 **Community Configs** - Share and discover working configurations

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: SQLite
- **Config Parsing**: plist library

## Project Structure

```
.
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API calls
│   │   └── App.tsx
│   └── package.json
├── backend/                  # Express server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/      # Business logic
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Custom middleware
│   │   └── server.ts
│   └── package.json
├── docker-compose.yml       # Docker configuration
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/marcosswan-bit/opencore-config-plist.git
cd opencore-config-plist
```

2. Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Start the development servers
```bash
# Terminal 1: Backend (runs on http://localhost:5000)
cd backend
npm run dev

# Terminal 2: Frontend (runs on http://localhost:3000)
cd frontend
npm start
```

## Roadmap

- [ ] Basic questionnaire flow for hardware detection
- [ ] Visual config.plist editor
- [ ] Config validation engine
- [ ] File upload/download functionality
- [ ] Local config storage
- [ ] Community config sharing (future)
- [ ] SMBIOS generator
- [ ] Kext recommendation engine

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

MIT

## Resources

- [OpenCore Documentation](https://dortania.github.io/docs/latest/Configuration.html)
- [Dortania's OpenCore Guide](https://dortania.github.io/OpenCore-Install-Guide/)
- [r/hackintosh Wiki](https://www.reddit.com/r/hackintosh/wiki/)
