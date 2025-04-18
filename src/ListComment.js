import React,{ useState, useEffect } from "react";
import { CreateComment } from "./CreateComment";

export const ListComment = ({postId}) => {

    const [userComment, setUserComment] = useState([]);
    const [commentAdded, setCommentAdded] = useState(false);

    const fetchComments = async (e) => {
        const commentList = await fetch("http://localhost:3000/comments?postId="+postId,{
            headers:{"cors":"no-cors"}
        });
        const commentJson = await commentList.json();
        setUserComment(commentJson.reverse());
    }
    useEffect(() => {
        fetchComments();
    },[commentAdded]);

    return (
        <div>
            <CreateComment postId={postId} onCommentCreated={() => setCommentAdded(prev => !prev)}/>
            <hr/>
        {
            userComment?.map((data,index)=>(
                <div className="flex justify-center items-center">
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-400 rounded-lg w-5/6">      

                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center">
                                <img
                                alt="Tania Andrew"
                                src={data?.imgPath}
                                className="relative inline-block h-8 w-8 rounded-full"
                                />
                                <div className="flex flex-col ml-3 text-sm">
                                <span className="text-slate-800 font-semibold">{data?.created_by}</span>
                                <span className="text-slate-600">{data?.created_date}</span>
                                </div>
                            </div>
                        </div>

                        <hr/>    

                        <div className="p-4">
                            <h2 className="mb-2 text-slate-800 text-xl font-semibold">{data?.comment}</h2>
                        </div>

                    </div>
                </div>
            ))
        }

        </div>
    );
};
