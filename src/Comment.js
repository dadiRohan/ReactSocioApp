

const Comment = (props) => {

    const {data} = props;

    return (
        <div>
            <hr/>   
            <div class="rounded-lg bg-red shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
                <div class="p-2">
                    <p class="mb-2 text-md font-medium leading-tight">
                        <img
                            alt="Tania Andrew"
                            src={data?.imgPath}
                            class="relative inline-block h-8 w-8 rounded-full"
                        />
                        <span class="text-slate-800 font-semibold">{data?.created_by}</span>
                        <br/>
                        <sub class="text-slate-600">{data?.created_at}</sub>
                    </p>
                    <p class="mb-4 text-base">
                    {data.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comment;