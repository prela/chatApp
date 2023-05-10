// relative time format
// https://www.js-howto.com/how-to-format-dates-with-intl-relativetimeformat/

const weekMiliseconds = 1000 * 60 * 60 * 24 * 7;
const dayMiliseconds = 1000 * 60 * 60 * 24;
const hourMiliseconds = 1000 * 60 * 60;
const minuteMiliseconds = 1000 * 60;

export const getRelativeTime = (timestamp) => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const difference = timestamp - new Date().getTime();

  switch (true) {
    case -difference < minuteMiliseconds:
      // const secondsDifference = Math.round(difference / 1000);
      // return rtf.format(secondsDifference, "second");
      return rtf.format(0, "second");
      break;
    case -difference < hourMiliseconds:
      const minutesDifference = Math.round(difference / minuteMiliseconds);
      return rtf.format(minutesDifference, "minute");
      break;
    case -difference < dayMiliseconds:
      const hoursDifference = Math.round(difference / hourMiliseconds);
      return rtf.format(hoursDifference, "hour");
      break;
    case -difference < weekMiliseconds:
      const daysDifference = Math.round(difference / dayMiliseconds);
      return rtf.format(daysDifference, "day");
      break;
    case -difference > weekMiliseconds:
      return timestamp.toLocaleDateString();
      break;
    default:
      return rtf.format(0, "minute");
  }
};
