export const weeksBetween = function(d1, d2) {
  // return 10;
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
};
