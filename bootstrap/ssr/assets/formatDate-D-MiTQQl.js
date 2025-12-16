import { formatDistanceToNow } from "date-fns";
function formatDate(input_data) {
  if (!input_data) return "";
  return formatDistanceToNow(new Date(input_data), {
    addSuffix: true
  }).replace("about ", "").replace("less than a minute", "just now").replace("just now ago", "just_now").replace(" ", "").replace("minutes ago", "m ago").replace("minute ago", "m ago").replace("hour ago", "h ago").replace("hours ago", "h ago");
}
export {
  formatDate as f
};
