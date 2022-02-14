import React, { useState } from "react";
import "./post.scss";
import { MoreVert, ThumbUpAlt, Favorite } from "@mui/icons-material";
import { PostsInterface } from "../../utils/interfaces";
import { Users } from "../../dummyData";
import { IconButton } from "@mui/material";
interface PostProps {
  post: PostsInterface;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { desc, photo, date, userId, like, comment } = post;
  const userDetails = Users.find((user) => user.id === userId);
  const [likes, setLikes] = useState<number>(like);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleOnClick = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={userDetails?.profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{userDetails?.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc ?? " "}</span>
          <img src={photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {isLiked ? (
              <IconButton onClick={handleOnClick} color="primary">
                <ThumbUpAlt />
              </IconButton>
            ) : (
              <IconButton onClick={handleOnClick}>
                <ThumbUpAlt />
              </IconButton>
            )}
            <span className="postLikeCounter">{likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} commments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
