/**
 * Module to calculate percentage of a threshold.
 *
 * @param {number} amount The amount currently reached.
 * @param {number} max The amount to base the threshold on.
 * @returns {number} The perecentage of `max` that `amount` holds.
 */
export const calculatePercentage = (amount: number, max: number): number => {
  return Math.round((amount / max) * 100);
};
