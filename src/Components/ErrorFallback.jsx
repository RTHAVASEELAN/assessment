import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
            <h2 className="text-2xl font-semibold text-red-600 mb-2">
                Something went wrong 😞
            </h2>
            <p className="text-gray-600 mb-4">{error.message}</p>
            <button
                onClick={resetErrorBoundary}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}

export function ErrorBoundary({ children }) {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => window.location.reload()}
        >
            {children}
        </ReactErrorBoundary>
    );
}
