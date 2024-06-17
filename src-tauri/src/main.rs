// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, PhysicalSize};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();

            // get size and add padding
            let binding = window.current_monitor().unwrap().unwrap();
            let monitor_size = binding.size();
            let size = PhysicalSize {
                width: (monitor_size.width as f64 * 0.75).round(),
                height: (monitor_size.height as f64 * 0.75).round(),
            };

            window.set_size(size).unwrap();
            window.center().unwrap();

            #[cfg(desktop)]
            {
                app.handle()
                    .plugin(tauri_plugin_global_shortcut::Builder::new().build())?;
            }

            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
