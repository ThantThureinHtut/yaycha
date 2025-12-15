import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { useEffect } from "react";
import formatDate from "../Utils/formatDate";

export default function Comments({ comment, repyIdSubmitHandler , depth = 0 }) {
    const hasReplies = comment.replies && comment.replies.length > 0;
    const MAX_LIMIT = 2

    return (
        <div key={comment.id} className="my-2">
            {/* Parent Comment  */}
            <div className="flex gap-2 ">
                <div className="">
                    <Avatar className="size-9 ">
                        <AvatarImage src={comment?.user?.avatar_url} />
                    </Avatar>
                </div>
                <div>
                    <div className="bg-secondary px-3 py-2 rounded-2xl">

                        <h1 className="text-sm">{comment?.user?.username}</h1>
                        {(comment.parent && depth > 2) ? (
                            <p className="text-sm"><b className="text-blue-500">@{comment.parent.user.username}</b> {comment?.comment}</p>
                        ) : (
                              <p className="text-sm">{comment?.comment}</p>
                        )}

                    </div>
                    <div className="flex justify-between text-xs my-0.5 mx-4">
                        <span>{formatDate(comment.created_at)}</span>
                        <span
                            onClick={() =>
                                repyIdSubmitHandler({
                                    post_id: comment.post_id,
                                    parent_id: comment.id,
                                    replyName: comment.user.username,
                                    comments: comment
                                })
                            }
                        >
                            reply
                        </span>
                    </div>
                </div>
            </div>

            {/* Reply / Child Comment belongTo Parent */}
            <div className={depth < MAX_LIMIT ?  "mx-10" : "mx-0"}>
                {hasReplies &&
                    comment.replies.map((comment) => (
                        // Do this rerun the coments again
                        <Comments
                            key={comment.id}
                            comment={comment}
                            repyIdSubmitHandler={repyIdSubmitHandler}
                            depth={depth + 1}
                        />
                    ))}
            </div>
        </div>
    );
}
