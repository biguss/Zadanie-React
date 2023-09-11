import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div>
      <h2>Total Comments: {comments.length}</h2>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
}
export default CommentList;
