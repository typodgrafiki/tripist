"use client"

export default function ContentErrorLoading() {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className="px-2 pt-4">
            <p className="font-medium text-lg mb-2 dark:text-[var(--darkModeTitle)]">
                Upps!
            </p>
            <p className="mb-3">Coś poszło nie tak.</p>
            <p>
                <button
                    onClick={reloadPage}
                    className="btn btn-primary"
                >
                    Odśwież stronę
                </button>
            </p>
        </div>
    )
}
