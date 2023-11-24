import moment from "moment";

export const useCurrentTime = (): number => {
  const utcDate: string = moment.utc().format();
  const seconds: number = new Date(utcDate).getTime() / 1000;
  return seconds;
};
