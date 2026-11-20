import type { Config } from "@react-router/dev/config";

// Static pre-render: semua halaman jadi HTML statis (SEO bagus, hosting murah).
export default { ssr: false, prerender: true } satisfies Config;
