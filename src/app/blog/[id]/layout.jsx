export default function Layout ({children}) {
    return (
        <>
        <main>
            <div className="mb-4">
            {children}
            </div>
        </main>
        </>
    )
}