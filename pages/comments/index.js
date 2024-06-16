// import { response } from "express";
import { useState } from "react";

function commentPage() {
  const [comment, setcomment] = useState([]);
  const [commen, setcommen] = useState("");
  const fetchcomment = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setcomment(data);
  };
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    // const data = await response.json();
// console.log(data)
    fetchcomment();
  };
  const SubmitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ commen }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <input
        type="text"
        value={commen}
        onChange={(e) => setcommen(e.target.value)}
      />
      <button onClick={SubmitComment}>submit Comment</button>
      <button onClick={fetchcomment}>Fetch Comment</button>
      {comment.map((comments) => {
        return (
          <div key={comments.id}>
            {" "}
            <h1>
              {comments.id}
              {comments.text}
            </h1>{" "}
            <button onClick={()=>deleteComment(comments.id)}> Delete</button>
          </div>
        );
      })}
    </>
  );
}
export default commentPage;
