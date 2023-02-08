import { useState } from "react";
import { putVisitedCountries } from '../services/CountryService';



    const CommentBox = ({ country }) => {

        const [comment, setComment] = useState("");

        const handleCommentChange = (evt) => {
            setComment(evt.target.value);
        }

        const handleCommentSubmit = (evt) => {
            evt.preventDefault();
            const copyOfCountry = {...country};
            const commentToSubmit = comment.trim();
           
            copyOfCountry.comment = commentToSubmit
            putVisitedCountries(copyOfCountry);
            console.log(copyOfCountry)
            setComment("");
        };

        

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