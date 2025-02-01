
const CreatePost = () => {
    return (
        <>
            <form class="max-w-sm mx-auto">
                <div className="px-3 mb-2 mt-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Post</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create a new Post..."></textarea>
                </div>

                <div className="flex justify-end px-4">
                    <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Post" />
                </div>
            </form> 
        </>
    );
};

export default CreatePost;