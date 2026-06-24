#!/bin/bash

echo "🎨 Installing Stitch MCP for Claude..."

# Check if Claude is installed
if ! command -v claude &> /dev/null; then
    echo "⚠️  Claude CLI not found in PATH. Proceeding with manual setup..."
fi

# Create MCP directory
MCP_DIR="$HOME/.claude/mcp"
mkdir -p "$MCP_DIR"

echo "📁 MCP directory: $MCP_DIR"

# Copy files
cp claude-stitch-mcp.json "$MCP_DIR/" 2>/dev/null
cp -r dist "$MCP_DIR/stitch-mcp" 2>/dev/null

echo "📝 Setting up authentication..."

# Prompt for authentication method
read -p "Choose auth method (1=API Key, 2=ADC): " auth_choice

if [ "$auth_choice" = "1" ]; then
    read -p "Enter your Stitch API Key: " api_key
    export STITCH_API_KEY="$api_key"
    export STITCH_AUTH_TYPE="api_key"
    echo "✅ API Key configured"
else
    echo "Running: gcloud auth application-default login"
    gcloud auth application-default login
    export STITCH_AUTH_TYPE="adc"
    echo "✅ ADC configured"
fi

# Save env vars
cat > "$HOME/.claude/stitch-env.sh" << EOF
export STITCH_API_KEY="${STITCH_API_KEY:-}"
export STITCH_AUTH_TYPE="${STITCH_AUTH_TYPE:-api_key}"
export STITCH_PROJECT_ID="${STITCH_PROJECT_ID:-}"
export STITCH_BASE_URL="https://stitch.withgoogle.com/api"
EOF

echo ""
echo "✅ Installation complete!"
echo "📍 Config saved to: $HOME/.claude/stitch-env.sh"
echo ""
echo "🚀 Next steps:"
echo "1. Restart Claude"
echo "2. Try: /stitch What projects do I have?"
echo ""