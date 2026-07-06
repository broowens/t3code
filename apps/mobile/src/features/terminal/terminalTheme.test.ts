import { describe, expect, it } from "vite-plus/test";

import { buildGhosttyThemeConfig, getPierreTerminalTheme } from "./terminalTheme";

describe("getPierreTerminalTheme", () => {
  it("returns the Pierre light terminal palette", () => {
    expect(getPierreTerminalTheme("light")).toMatchObject({
      background: "#f2f2f7",
      foreground: "#6C6C71",
      cursorForeground: "#009fff",
      cursorBackground: "#f2f2f7",
    });
  });

  it("returns the Pierre dark terminal palette", () => {
    expect(getPierreTerminalTheme("dark")).toMatchObject({
      background: "#0d1117",
      foreground: "#c9d1d9",
      cursorForeground: "#58a6ff",
      cursorBackground: "#0d1117",
    });
  });
});

describe("buildGhosttyThemeConfig", () => {
  it("serializes theme colors into a ghostty config file", () => {
    const config = buildGhosttyThemeConfig(getPierreTerminalTheme("dark"));

    expect(config).toContain("background = #0d1117");
    expect(config).toContain("foreground = #c9d1d9");
    expect(config).toContain("cursor-color = #58a6ff");
    expect(config).toContain("palette = 0=#484f58");
    expect(config).toContain("palette = 15=#f0f6fc");
    expect(config.endsWith("\n")).toBe(true);
  });
});
