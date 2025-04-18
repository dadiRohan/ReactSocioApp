import React from "react";
import { useState } from "react";

export const CreateComment = ({postId,onCommentCreated}) => {
    
    const [newComment,setNewComment] = useState([]);

    const userName = localStorage.getItem("loggedUserName");

    const date = new Date(Date.now());
    const FullDate = date.getFullYear()+'-'+ (date.getMonth() + 1) +'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

    const onCommentSubmit = (e) => {
        e.preventDefault();

        const dataInput = {
            postId: postId,
            comment:newComment, 
            created_at: '',
            created_date: FullDate,
            created_by: userName,
            imgPath : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        };

        console.log(dataInput);

        try {
            fetch("http://localhost:3000/comments",{
              headers:{"cors":"no-cors", "Content-Type":"application/json"},
              method: 'POST',
              body: JSON.stringify(dataInput),
            }).then(res=>{
              console.log("res status " + res.status);
              setNewComment('');
              onCommentCreated();
            });
        } catch (error) {
            console.log("error "+error);
        }
    }

    return (
        <div className="">
            <form onSubmit={onCommentSubmit} className="max-w-2sm bg-white rounded-lg  p-2 mx-auto mt-2">
                <div className=" mb-2 mt-2">
                    <textarea value={newComment} onChange={(e) => { setNewComment(e.target.value)} }
                    placeholder="Comment" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
                </div>
                <div className="flex justify-end px-4">
                    <button type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500">Comment</button>
                </div>
            </form>
        </div>
    );
};