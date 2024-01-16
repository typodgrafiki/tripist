import React from "react"

export default function loading() {
    return (
        <div className="site-loading animated fixed bg-white bg-opacity-10 inset-0 backdrop-blur-sm z-20 flex justify-center items-center">
            <div className="loader"></div>
        </div>
    )
}
