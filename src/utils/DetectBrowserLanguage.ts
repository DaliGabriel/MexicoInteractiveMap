export function detectBrowserLanguage(defaultLang = "en") {
  // Check if navigator.language is available
  if (typeof navigator !== "undefined" && navigator.language) {
    const browserLang = navigator.language.split("-")[0]; // Get the primary language subtag

    // Check if the detected language is supported by your app
    if (["en", "es"].includes(browserLang)) {
      return browserLang;
    }
  }

  // Fallback to default language if detection fails or language is not supported
  return defaultLang;
}
