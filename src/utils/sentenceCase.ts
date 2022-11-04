/**
 * @description
 * converts strings with "_" into sentence case (only first letter of word is capital eg: Hello world)
 */

export const sentenceCase = (text: string) =>
  text.charAt(0).toUpperCase() +
  text.slice(1).toLowerCase().replaceAll("_", " ");
