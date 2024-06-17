import { getCurrent } from "@tauri-apps/api/window";
import {
  isRegistered,
  register,
  unregister,
} from "@tauri-apps/plugin-global-shortcut";

export async function registerKeybinds() {
  // reregister if already set
  if (await isRegistered("CommandOrControl+Shift+E")) {
    unregister("CommandOrControl+Shift+E");
  }

  await register("CommandOrControl+Shift+E", async (event) => {
    if (event.state === "Pressed") {
      console.log("Shortcut triggered");
      if (await getCurrent().isVisible()) {
        await getCurrent().hide();
      } else {
        await getCurrent().show();
      }
    }
  });
}
