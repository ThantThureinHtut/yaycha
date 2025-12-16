import { useMutation } from "@tanstack/react-query";
const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short"
  }).format(number);
};
const usePostInteractions = (post, auth, isPressed, setPressed) => {
  const viewMutation = useMutation({
    mutationFn: () => {
      axios.post(route("post.viewStore"), {
        user_id: auth.user.id,
        post_id: post.id
      });
    },
    onMutate: async () => {
      post.views_count += 1;
      post.views_count_formatted = formatNumber(post.views_count);
      post.views = [
        ...post.views || [],
        { post_id: post.id, user_id: auth.user.id }
      ];
    }
  });
  const likeMutation = useMutation({
    mutationFn: () => {
      axios.post(route("post.likeStore"), {
        like_id: auth.user.id,
        user_id: post.user_id,
        post_id: post.id
      });
    },
    onMutate: () => {
      setPressed((prev) => !prev);
      isPressed ? post.likes_count -= 1 : post.likes_count += 1;
      post.likes_count_formatted = formatNumber(post.likes_count);
    }
  });
  return {
    viewIn: viewMutation,
    likeIn: likeMutation
  };
};
export {
  formatNumber as f,
  usePostInteractions as u
};
