import { formatDistanceToNow } from "date-fns";
export default function formatDate(input_data) {
    if(!input_data) return "";

    return formatDistanceToNow(new Date(input_data), {
        addSuffix: true,
    })
        .replace("about ", "") // Remove "about"
        .replace("less than a minute", "just now")
        .replace("just now ago", "just_now")
        .replace(" ", "")
        .replace("minutes ago", "m")
        .replace("minute ago", "m")
        .replace("hour ago", "h")
        .replace("hours ago", "h");
}
