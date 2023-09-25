import { defineConfig } from "@twind/core";
import presetAutoPrefix from '@twind/preset-autoprefix'
import presetLineClamp from "@twind/preset-line-clamp";
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
    // hash: true,
    darkMode: 'class',
    presets: [presetAutoPrefix(), presetTailwind(), presetLineClamp()]
});
