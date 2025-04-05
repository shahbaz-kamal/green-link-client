/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ✅ PRIMARY BRAND COLOR - Use for navbar background, section headings, CTA buttons
        primary: "#2F855A", // Forest Green

        // ✅ SECONDARY ACCENT - Use for soft background blocks, hover states, badges
        secondary: "#A0D9B4", // Mint Green

        // ✅ ATTENTION GRABBER - Use for 'Donate Now' button, alerts, or key CTAs
        accent: "#F6E05E", // Sunbeam Yellow

        // ✅ SUPPORTIVE DARK TONE - Use for footer background, cards, or strong visual sections
        teal: "#285E61", // Deep Teal

        // ✅ MAIN PAGE BACKGROUND - Use as body/page background for a soft and clean look
        background: "#FAF9F6", // Cloud Beige

        // ✅ BASE TEXT COLOR - Use for body text, navbar links, button text
        text: "#1A202C", // Charcoal Black
      },
    },
  },
  plugins: [require("daisyui")],
};
