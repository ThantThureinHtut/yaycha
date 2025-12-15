export default function addReplyToTree(nodes , parentId , comment){
    return nodes.map((node) => {
        // Check with comment id with parentId
        if(node.id == parentId){
            return {
                ...node ,
                replies: [...(node.replies || []) , comment]
            }
        }

        // The Id which you want to search is not in the parent level
        // it is going deeper. So go and seach in the replies
        // so replies we call the function again so i loop , that replies value become parent level

        // This is do for Check and Search for Id in the Child Level
        if(node.replies && node.replies.length > 0){
            return {
                ...node,
                replies: addReplyToTree(node.replies, parentId, comment),
            };
        }

        /**
         * Reply to Comment B (Id : 2)
         * Search The Id 2 to add the new comment
         * Parent Level
         *  {
         *     id: 1,
         *     parent_id:null,
         *     comment: Parent Comment,
         *     replies: [
         *         {id:2 , parent_id:1 , replies: []}
         *      ]
         *  }
         *
         *
         * You Search id is not in parent level , search in child
         *
         * replies: addReplyToTree(node.replies, parentId, comment),
         * replies :  {id:2 , parent_id:1 , comment: Child One Comment , replies: []}
         *
         * It Id:2 become parent Level
         *
         *  if(2 === (your search id: 2)){
         *      retunr {
         *           ...node, ({id:2 , parent_id:1})
         *            replies: [...(node.replies || []) , comment]
         *      }
         *  }
         *
         *
         *
         * {
         *     id: 1,
         *     parent_id:null,
         *     replies: [
         *         {
         *              id:2 ,
         *              parent_id:1 ,
         *              comment: Child One Comment
         *              replies: [
         *                         id: 3 ,
         *                         parent_id:2,
         *                         comment: Child Two Comment
         *                         replies: []
         *                       ]}
         *      ]
         *  }
         *
         *
         *
         *
         */

        return node;
    })
}
