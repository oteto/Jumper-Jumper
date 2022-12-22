import { defineManifest } from "@crxjs/vite-plugin";

export const manifest = defineManifest({
  manifest_version: 3,
  name: "Jumper+Jumper",
  version: "1.0.0",
  action: {
    default_popup: "index.html",
  },
  content_scripts: [
    {
      js: ["src/content_script/jumpInfo.ts"],
      matches: ["https://shonenjumpplus.com/magazine/*"],
    },
  ],
  permissions: ["storage"],
  commands: {
    _execute_action: {
      suggested_key: {
        default: "Ctrl+J",
      },
    },
  },
});
