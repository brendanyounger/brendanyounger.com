const defaultTheme = require("tailwindcss/defaultTheme");

const TextColor = "rgb(55, 53, 47)";

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Apple Color Emoji",
        "Arial",
        "sans-serif",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: TextColor,
            fill: TextColor,
            lineHeight: "1.5",
            outline: "0",
            outlineColor: TextColor,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            "-webkit-line-break": "after-white-space",
            "-webkit-font-smoothing": "auto",
            "> :first-child": false,
            "> :last-child": false,
            h1: {
              color: TextColor,
              fontWeight: "600",
              fontSize: "1.875em",
              lineHeight: "1.3",
              marginTop: "32px",
              marginBottom: "4px",
              padding: "3px 2px",
            },
            "h1 strong": {
              fontWeight: "700",
            },
            h2: {
              color: TextColor,
              fontWeight: "600",
              fontSize: "1.5em",
              lineHeight: "1.3",
              marginTop: "22.4px",
              marginBottom: "1px",
              padding: "3px 2px",
            },
            "h2 strong": {
              fontWeight: "700",
            },
            p: {
              padding: "3px 2px",
              marginTop: false,
              marginBottom: false,
            },
            ul: {
              marginTop: false,
              marginBottom: false,
            },
            "ul > li::before": {
              backgroundColor: TextColor,
              marginLeft: 6,
            },
            ol: {
              marginTop: false,
              marginBottom: false,
            },
            "ol > li::before": {
              color: TextColor,
            },
            li: {
              padding: "3px 2px 3px 30px",
              marginTop: false,
              marginBottom: false,
            },
            em: {
              fontWeight: "600",
            },
            a: {
              color: theme("colors.red.600", defaultTheme.colors.red[600]),
              opacity: 0.7,
              fontWeight: false,
              paddingBottom: 2,
              textDecorationLine: "none",
              borderBottomWidth: "1px",
              borderBottomColor: theme(
                "colors.red.700",
                defaultTheme.colors.red[700]
              ),
              "&:hover": {
                color: theme("colors.red.700", defaultTheme.colors.red[700]),
              },
              "&:visited": {
                color: theme("colors.red.900", defaultTheme.colors.red[900]),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
