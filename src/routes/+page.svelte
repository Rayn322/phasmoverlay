<script lang="ts">
  import { registerKeybinds } from "../keybinds";

  registerKeybinds();
</script>

<div class="container">
  <h1>Welcome to Tauri!</h1>

  <p>Click on the Tauri, Vite, and SvelteKit logos to learn more.</p>
</div>

<!-- make background transparent -->
<style>
  .container {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: white 10px solid;
    border-radius: 5rem;
    min-height: 100vh;
    box-sizing: border-box;
  }
</style>
