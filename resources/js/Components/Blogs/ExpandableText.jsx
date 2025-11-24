import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function ExpandableText({ blog , viewSumbitHandler }) {
    const isShortText = blog.description.length < 150;
    const [isExpand, setExpand] = useState(false);

    return (
        <div>
            {isShortText ? (
                <div  onClick={() => viewSumbitHandler()}>{blog.description}</div>
            ) : (
                <div
                    className="text-sm sm:text-md text-gray-700 dark:text-gray-300"
                    onClick={() => viewSumbitHandler()}
                >
                    <div
                        className={`whitespace-pre-wrap`}
                        onClick={() => {
                            // window.getSelection() is original tool in window
                            // it trigger the user select characters count value
                            // it function work when user select the text don't run the expand fun
                            // window.getSelection() only return object thing
                            // need to transfer the string so , use the toString()

                            const selection = window.getSelection();
                            if (selection.toString().length === 0) {
                                setExpand(!isExpand);
                            }
                        }}
                    >
                        {isExpand
                            ? `${blog.description}`
                            : ` ${blog.description.substring(
                                  0,
                                  (blog.description.length * 1) / 10
                              )}...`}
                        <span className="text-blue-500 underline text-md">
                            {isExpand ? "Show less" : "See more"}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
