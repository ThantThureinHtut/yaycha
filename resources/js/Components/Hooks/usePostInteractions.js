import { useMutation } from "@tanstack/react-query";
import formatNumber from "../Utils/formatNumber";
import axios from "axios";
const usePostInteractions = (post, auth, isPressed , setPressed) => {
     const viewMutation = useMutation({
        mutationFn: () => {
            axios.post(route("post.viewStore"), {
                user_id: auth.user.id,
                post_id: post.id,
            });
        },
        onMutate: async () => {
            post.views_count += 1;
            post.views_count_formatted = formatNumber(post.views_count);
            // This need !! cuz in viewSumbitHandller , checking the view.user_id === auth.user.id
            // but when you click again and again before Echo is finish. So the views value is still null ,The Count is increasing
            // so need to put views value for perevent that action but that data is temp , not autaul data to sign in
            // so in post data , in user one {post_id: 1 , user_id: 2} but in user two two which come from database value
            // but when you refresh your page it become autaul data which is come from database;

            // Example ->
            //  user click -> increase view Count(virtual data) (1)
            //  user click again before loading is finish -> increase (1)->(2)->(3)
            //  when loading is finish , view count become (1) in your userinterface (which is bed UX)
            //  so add the temporary data to prevent that kind of thing which i related my if check

            // Remining This prevent the increaing the viewcount for temporary
            post.views = [
                ...(post.views || []),
                { post_id: post.id, user_id: auth.user.id },
            ];
        },
    });

    const likeMutation = useMutation({
        mutationFn: () => {
         axios.post(route("post.likeStore"), {
                like_id: auth.user.id,
                user_id : post.user_id,
                post_id: post.id,
            });
        },
        onMutate:  () => {
            setPressed((prev) => !prev);
            isPressed ? post.likes_count -= 1 : post.likes_count += 1;
            post.likes_count_formatted = formatNumber(post.likes_count);
        },
    });
    return {
        viewIn: viewMutation,
        likeIn: likeMutation
    }
}
export default usePostInteractions;
