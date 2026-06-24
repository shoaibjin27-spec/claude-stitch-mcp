# Claude Stitch MCP

The Stitch extension for Claude enables you to interact with the Stitch MCP (Model Context Protocol) server using natural language commands. This makes it easier to manage your design projects directly through Claude.

## ✨ Features

- **🎨 List Projects:** View a list of your Stitch projects
- **🎨 Project Details:** Get detailed information about a specific project
- **🎨 Retrieve Screens:** Access all screens within a given project
- **🎨 Download Assets:** Download assets such as images and HTML files
- **🎨 Generate Screen From Text:** Generate new screens from text prompts using Gemini models
- **🎨 Enhance Prompts:** Automatically improve your design prompts with AI

## 📋 Prerequisites

Before using this extension, ensure you have the following:

1. **Claude Desktop** - Latest version installed
2. **Node.js** - v16 or newer
3. **Stitch Account** - Access to [stitch.withgoogle.com](https://stitch.withgoogle.com)
4. **Google Cloud Credentials** - Either an API Key or ADC authentication setup

## 🚀 Quick Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shoaibjin27-spec/claude-stitch-mcp.git
cd claude-stitch-mcp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npm run build
```

### 4. Run the Installer

```bash
chmod +x install-stitch-mcp.sh
./install-stitch-mcp.sh
```

## 🔐 Authentication

### Option 1: API Key (Recommended for Quick Setup)

1. Go to [Stitch Settings](https://stitch.withgoogle.com)
2. Click your profile icon → **Stitch Settings**
3. Navigate to **API Keys** section
4. Click **Create Key** and copy the key
5. When prompted during installation, paste your API key

### Option 2: Application Default Credentials (ADC)

1. Install gcloud CLI:
   ```bash
   curl https://sdk.cloud.google.com | bash
   ```

2. Initialize gcloud:
   ```bash
   gcloud init
   gcloud auth application-default login
   ```

3. Choose ADC option during installation

## 💡 Usage

Once installed, start Claude and use natural language commands:

### List Your Projects
```
/stitch What Stitch projects do I have?
```

### Get Project Details
```
/stitch Tell me details about project 3677573127824787033
```

### List All Screens in a Project
```
/stitch Give me all the screens of project 3677573127824787033
```

### Download Assets
```
/stitch Download the image of screen 6393b8177be0490f89eb8f2c1e4cfb37
/stitch Download the HTML of screen 6393b8177be0490f89eb8f2c1e4cfb37
```

### Generate New Screens
```
/stitch Design a mobile app for people who love skiing in the Alps
/stitch Create a landing page for a podcast about Design and AI using Gemini 3 Pro
```

### Enhance Prompts
```
/stitch Enhance this prompt: "Design a beautiful dark mode dashboard"
```

## 📁 Project Structure

```
claude-stitch-mcp/
├── src/
│   ├── server.ts              # Main MCP server
│   ├── tools/
│   │   ├── list-projects.ts
│   │   ├── get-project-details.ts
│   │   ├── list-screens.ts
│   │   ├── download-asset.ts
│   │   ├── generate-screen.ts
│   │   └── enhance-prompt.ts
│   └── config.ts              # Configuration handling
├── dist/                       # Compiled JavaScript
├── package.json
├── tsconfig.json
├── claude-stitch-mcp.json      # MCP manifest
├── install-stitch-mcp.sh       # Installation script
└── README.md
```

## ⚙️ Configuration

The extension uses environment variables for configuration:

```bash
# Required
export STITCH_API_KEY="your-api-key"        # or use ADC
export STITCH_AUTH_TYPE="api_key"           # or "adc"

# Optional
export STITCH_PROJECT_ID="your-project-id"
export STITCH_BASE_URL="https://stitch.withgoogle.com/api"
```

## 🛠️ Development

### Build
```bash
npm run build
```

### Watch Mode
```bash
npm run dev
```

### Test
```bash
npm test
```

### Lint
```bash
npm run lint
```

## 🐛 Troubleshooting

### Tool Not Found
- Restart Claude completely
- Verify installation: `ls -la ~/.claude/mcp/`
- Check logs: `tail -100 ~/.claude/logs/mcp.log`

### Authentication Failed
```bash
# For API Key
export STITCH_API_KEY="your-key-here"

# For ADC
gcloud auth application-default login
```

### Permission Denied on Script
```bash
chmod +x install-stitch-mcp.sh
```

## 📚 Resources

- [Stitch Web App](https://stitch.withgoogle.com/)
- [Stitch Documentation](https://stitch.withgoogle.com/docs)
- [Claude Documentation](https://claude.ai/docs)
- [MCP Protocol Spec](https://modelcontextprotocol.io/)

## 📄 License

Apache License 2.0 - See [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For issues, questions, or feature requests:
- Open an [Issue](https://github.com/shoaibjin27-spec/claude-stitch-mcp/issues)
- Check existing [Discussions](https://github.com/shoaibjin27-spec/claude-stitch-mcp/discussions)

---

**Made with ❤️ for the design and AI community**