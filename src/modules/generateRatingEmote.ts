/**
 * Module to generate a ✅ or ❌ emote.
 *
 * @param {number} percentage The percentage toward the threshold.
 * @param {boolean} negative Whether the metric is a negative measurement. If so, invert the thresholds.
 * @returns {string} The emote to use.
 */
export const generateRatingEmote = (
  percentage: number,
  negative: boolean
): string => {
  if (negative) {
    return percentage > 75 ? "❌" : "✅";
  } else {
    return percentage < 75 ? "❌" : "✅";
  }
};
