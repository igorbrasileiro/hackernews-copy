/**
 * Code from this StackOverflow answer: https://stackoverflow.com/a/33487313
 */
const DATE_NOW = Date.now();

const epochs: [string, number][] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
];

const getDuration = (timeAgoInSeconds: number) => {
  for (let [name, duration] of epochs) {
      const interval = Math.trunc(timeAgoInSeconds / duration);
      if (interval >= 1) {
          return {
              interval: interval,
              epoch: name
          };
      }
  }
};

export const timeAgo = (date: number) => {
  const timeAgoInSeconds = Math.trunc((DATE_NOW - date) / 1000);
  const {interval, epoch} = getDuration(timeAgoInSeconds);
  const suffix = interval === 1 ? '' : 's';
  return `${interval} ${epoch}${suffix} ago`;
};