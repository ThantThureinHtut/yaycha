import { useMutation } from "@tanstack/react-query";
import NProgress from "nprogress"; // Import the library
import "nprogress/nprogress.css";
export default function useAiGengerateTitle(
    setAi,
    setAiErrorMessage,
    setData,
    setError
) {
    return useMutation({
        mutationFn: async (bodyText) => {
            if (!bodyText || bodyText.length < 5) {
                setAiErrorMessage("Please write content first!");
            } else {
                NProgress.configure({ showSpinner: false });
                NProgress.start();
                setAiErrorMessage("");
                setError("body", "");
                setData("title", "Title is generating");
                setAi(true);
                const response = await axios.post(
                    route("post.generate-title"),
                    {
                        body: bodyText,
                    }
                );
                return response.data;
            }
        },
        onSuccess: (e) => {
            NProgress.done();
            if (e) {
                setAi(false);
                setData("title", e.title);
            }
        },
        onError: (e) => {
            console.log(e);
        },
    });
}
