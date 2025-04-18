import React from "react";
import { useState } from "react";


const CreatePost = ({onPostCreated}) => {

    const [newPost,setNewPost] = useState('');

    const userName = localStorage.getItem("loggedUserName");

    const date = new Date(Date.now());
    const FullDate = date.getFullYear()+'-'+ (date.getMonth() + 1) +'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

    const onSubmit = (e) => {
        e.preventDefault();
        
        const dataInput = {
            imgPath : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            post:newPost,
            likes:0,
            created_at: '',
            created_date: FullDate,
            created_by: userName,
            comments:0
        };

        console.log(dataInput);

        try {
            fetch("http://localhost:3000/posts",{
              headers:{"cors":"no-cors", "Content-Type":"application/json"},
              method: 'POST',
              body: JSON.stringify(dataInput),
            }).then(res=>{
              console.log("res status " + res.status);
              setNewPost('');
              onPostCreated();
            });
        } catch (error) {
            console.log("error "+error);
        }
    };


    return (
        <>
            <form onSubmit={onSubmit}>
                <label for="chat" className="sr-only">Your message</label>
                <div className="flex items-center px-40 py-2 rounded-lg bg-gray-150 dark:bg-gray-900">
                    <textarea value={newPost} onChange={(e) => { setNewPost(e.target.value)} }
                    id="chat" rows="5" className="block mx-11 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required>
                    </textarea>
                        
                    <button type="submit" className="inline-flex justify-center text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg className="w-28 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreatePost;