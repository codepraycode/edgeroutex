export function slugify(text: string): string {
  return text
    .toString() // cast to string
    .normalize("NFD") // normalize accents
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
}
