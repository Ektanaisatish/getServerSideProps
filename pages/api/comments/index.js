import { comments } from "../../../data/comments";

export default function handler(req, res) {
    if(req.method==='GET'){
  res.status(200).json(comments);
    }else if(req.method==='POST'){
        const commen = req.body.commen
        const newComment = 
        {
            id:Date.now(),
            text:commen,
        }
        comments.push(newComment)
        res.status(201).json(newComment)
    }
}
