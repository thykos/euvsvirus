export const toHHMMSS = (secs) => {
  const hours   = Math.floor(secs / 3600)
  const minutes = Math.floor(secs / 60) % 60
  const seconds = secs % 60

  const [h,m,s] = [hours,minutes,seconds]
  .map(v => v < 10 ? "0" + v : v)
  .filter((v,i) => v !== "00" || i > 0);
  return `${h}h ${m}m ${s}s`;
};
