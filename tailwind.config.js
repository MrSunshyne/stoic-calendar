module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [require("@tailwindcss/ui")],
};
