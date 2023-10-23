import moment from "moment";

export const useCurrentTime = () => {
  const utcDate = moment.utc().format();
  let seconds = new Date(utcDate).getTime() / 1000;
  return seconds;
};