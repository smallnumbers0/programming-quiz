// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.PUBLIC_HUGGING_FACE_TOKEN': JSON.stringify(process.env.HUGGING_FACE_TOKEN)
    }
  }
});
