import { useState, useEffect } from "react";
import { allPost } from "./utils/mockdata";
import Comment from "./Comment";
import CreatePost from "./CreatePost";

const Listpost = () => {

    const [userPost,setUserPost] = useState([]);
    const fetchUsers = async () => {
        const postList = await fetch("http://localhost:3000/posts",{
            headers:{"cors":"no-cors"}
        });
        const postJson = await postList.json();
        setUserPost(postJson.reverse());
    }

    useEffect(()=>{
        fetchUsers();
    },[userPost])
    
    return (
        <div>
            <CreatePost />

            {
                userPost?.map((data,index)=>(
                    <div className="flex justify-center items-center">

                        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-400 rounded-lg w-4/6">      

                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center">
                                    <img
                                    alt="Tania Andrew"
                                    src={data?.imgPath}
                                    className="relative inline-block h-8 w-8 rounded-full"
                                    />
                                    <div className="flex flex-col ml-3 text-sm">
                                    <span className="text-slate-800 font-semibold">{data?.created_by}</span>
                                    <span className="text-slate-600">{data?.created_at}</span>
                                    </div>
                                </div>
                            </div>

                            <hr/>    

                            <div className="p-4">
                                <h2 className="mb-2 text-slate-800 text-xl font-semibold">
                                {data?.post}
                                </h2>

                                <p className="text-slate-600 leading-normal font-light">

                                    <button className="py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                                        </svg>
                                        <span>{data?.likes}</span>
                                    </button>

                                    <form className="max-w-2sm bg-white rounded-lg border p-2 mx-auto mt-2">
                                        <div className="px-3 mb-2 mt-2">
                                            <textarea placeholder="comment" className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
                                        </div>
                                        <div className="flex justify-end px-4">
                                            <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment" />
                                        </div>
                                    </form>

                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* {
                allPost[0]?.data?.map((data,index) => (
                    <div className="flex justify-center items-center">
                        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-400 rounded-lg w-4/6">      

                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center">
                                    <img
                                    alt="Tania Andrew"
                                    src={data?.imgPath}
                                    className="relative inline-block h-8 w-8 rounded-full"
                                    />
                                    <div className="flex flex-col ml-3 text-sm">
                                    <span className="text-slate-800 font-semibold">{data?.created_by}</span>
                                    <span className="text-slate-600">{data?.created_at}</span>
                                    </div>
                                </div>
                            </div>

                            <hr/>    

                            <div className="p-4">
                                <h2 className="mb-2 text-slate-800 text-xl font-semibold">
                                {data?.post}
                                </h2>

                                
                                
                                <p className="text-slate-600 leading-normal font-light">

                                    <button className="py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                                        </svg>
                                        <span>{data?.likes}</span>
                                    </button>

                                    <form className="max-w-2sm bg-white rounded-lg border p-2 mx-auto mt-2">
                                        <div className="px-3 mb-2 mt-2">
                                            <textarea placeholder="comment" className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
                                        </div>
                                        <div className="flex justify-end px-4">
                                            <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment" />
                                        </div>
                                    </form>

                                    {
                                        data?.comments?.map((commentData,commentindex)=>(
                                            <Comment data={commentData} />
                                        ))
                                    }
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    
                ))
            } */}
        </div>
    );
};

export default Listpost;