import { getCurrent } from "@tauri-apps/api/window";
import {
  isRegistered,
  register,
  unregister,
} from "@tauri-apps/plugin-global-shortcut";

const toggleKeybind = "CommandOrControl+Shift+E";

export async function registerKeybinds() {
  // reregister if already set
  if (await isRegistered(toggleKeybind)) {
    unregister(toggleKeybind);
  }

  await register(toggleKeybind, async (event) => {
    if (event.state === "Pressed") {
      console.log("Shortcut triggered");
      if (await getCurrent().isVisible()) {
        // look at this more https://stackoverflow.com/questions/6078799/minimize-restore-windows-programmatically-skipping-the-animation-effect
        // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showwindow
        await getCurrent().hide();
      } else {
        await getCurrent().show();
      }
    }
  });
}
