import { useMutation } from "@tanstack/react-query";
import NProgress from "nprogress"; // Import the library
import "nprogress/nprogress.css";
export default function useAiGengerateTitle(setAi , setAiErrorMessage ) {
    return (useMutation({
        mutationFn: async (bodyText) => {
            if (!bodyText || bodyText.length < 5) {
                setAiErrorMessage("Please write content first!");
            }
            NProgress.configure({ showSpinner: false });
            NProgress.start();
            setAiErrorMessage("");
            setError("body", "");
            setData("title", "Title is generating");
            setAi(true);
            const response = await axios.post(route("post.generate-title"), {
                body: bodyText,
            });
            return response.data;
        },
        onSuccess: (e) => {
            NProgress.done();
            setAi(false);
            setData("title", e.title);
        },
        onError: (e) => {
            console.log(e);
        },
    }));
}
