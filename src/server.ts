import Anthropic from "@anthropic-ai/sdk";

interface StitchConfig {
  apiKey?: string;
  projectId?: string;
  authType: "api_key" | "adc";
  baseUrl: string;
}

class StitchMCPServer {
  private config: StitchConfig;

  constructor(config: StitchConfig) {
    this.config = config;
  }

  async listProjects() {
    try {
      const response = await fetch(`${this.config.baseUrl}/projects`, {
        headers: this.getAuthHeaders(),
      });
      return await response.json();
    } catch (error) {
      return { error: "Failed to list projects", details: error };
    }
  }

  async getProjectDetails(projectId: string) {
    try {
      const response = await fetch(
        `${this.config.baseUrl}/projects/${projectId}`,
        {
          headers: this.getAuthHeaders(),
        }
      );
      return await response.json();
    } catch (error) {
      return { error: "Failed to get project details", details: error };
    }
  }

  async listScreens(projectId: string) {
    try {
      const response = await fetch(
        `${this.config.baseUrl}/projects/${projectId}/screens`,
        {
          headers: this.getAuthHeaders(),
        }
      );
      return await response.json();
    } catch (error) {
      return { error: "Failed to list screens", details: error };
    }
  }

  async downloadAsset(screenId: string, assetType: "image" | "html") {
    try {
      const response = await fetch(
        `${this.config.baseUrl}/screens/${screenId}/assets?type=${assetType}`,
        {
          headers: this.getAuthHeaders(),
        }
      );
      return await response.blob();
    } catch (error) {
      return { error: "Failed to download asset", details: error };
    }
  }

  async generateScreen(prompt: string, model: string = "gemini-3-flash") {
    try {
      const response = await fetch(`${this.config.baseUrl}/generate-screen`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ prompt, model }),
      });
      return await response.json();
    } catch (error) {
      return { error: "Failed to generate screen", details: error };
    }
  }

  async enhancePrompt(prompt: string) {
    try {
      const response = await fetch(`${this.config.baseUrl}/enhance-prompt`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ prompt }),
      });
      return await response.json();
    } catch (error) {
      return { error: "Failed to enhance prompt", details: error };
    }
  }

  private getAuthHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.config.authType === "api_key" && this.config.apiKey) {
      headers["Authorization"] = `Bearer ${this.config.apiKey}`;
    }

    return headers;
  }
}

export { StitchMCPServer };