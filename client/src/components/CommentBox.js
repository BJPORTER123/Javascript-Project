import { useState } from "react";

    const CommentBox = ({ onCommentSubmit }) => {

        const [comment, setComment] = useState("");

        const handleCommentChange = (evt) => {
            setComment(evt.target.value);
        }

        const handleCommentSubmit = (evt) => {
            evt.preventDefault();
            const commentToSubmit = comment.trim();
            if (!commentToSubmit) {
                return
            }

            onCommentSubmit({
                comment: commentToSubmit
            });

            setComment("");
        }

        return (
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    type="comment"
                    placeholder="Add comment..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <input
                    type="submit"
                    value="Post"
                />
            </form>
        )

    }

export default CommentBox;

//OnClick - submit comment
//Comment to display on appropriate country
//Post comment and comment key to database