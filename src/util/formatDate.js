import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function formatDate (date) { 
  if ((Date.now() - (168 * 60 * 60 * 1000)) <= date) {
      date = dayjs(date).fromNow();
  }
  else {
      date = dayjs(date).format("h:mm a on M/D/YYYY");
  }
  return date;
}

export default formatDate;