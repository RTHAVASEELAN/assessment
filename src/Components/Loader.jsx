import React from 'react'

function Loader() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-emerald-700 font-medium">Loading...</p>
                </div>
            </div>
        </div>
    )
}

export default Loader
