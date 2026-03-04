/**
 * Resolves a text value from JSON config.
 * If the value starts with "t:", it's treated as a translation key.
 * Otherwise, it's returned as a literal string.
 *
 * @param {string} value - The value from JSON config
 * @param {function} t - The translation function from useI18n()
 * @returns {string|Array} The resolved text
 */
export default function resolveText(value, t) {
  if (typeof value !== "string") return value;
  if (value.startsWith("t:")) {
    return t(value.slice(2));
  }
  return value;
}
