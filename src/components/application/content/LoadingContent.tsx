export function LoadingContent() {
    return (
        <div className="px-2 pt-4">
            <div className="my-lists-loading flex justify-between items-center gap-5">
                <div className="title w-4/12"></div>
                <ul className="my-lists-loading flex gap-5">
                    <li className="title w-[15px]"></li>
                    <li className="title w-[15px]"></li>
                    <li className="title w-[15px]"></li>
                </ul>
            </div>
            <ul className="my-lists-loading flex gap-5 justify-between">
                <li className="w-full max-w-[110px]"></li>
                <li className="w-full max-w-[85px]"></li>
            </ul>
            <ul className="my-lists-loading">
                <li className="wide"></li>
                <li className="wide"></li>
                <li className="wide"></li>
                <li className="wide"></li>
                <li className="wide"></li>
            </ul>
            <ul className="my-lists-loading mt-10">
                <li className="max-w-[110px]"></li>
            </ul>
        </div>
    )
}

export function LoadingContentEmpty() {
    return (
        <ul className="my-lists-loading px-2 pt-4 flex flex-col grow items-center justify-center">
            <li className="title w-4/12"></li>
            <li className="wide w-8/12"></li>
            <li className="wide w-6/12"></li>
        </ul>
    )
}
