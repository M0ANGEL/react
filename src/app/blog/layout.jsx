export default function Layout ({children}) {
    return (
        <>
        <main className="ml-14 mr-14 mt-40" >
            {children}
        </main>
        <footer className="mb-10 p-5 mt-10 flex items-center justify-center bg-red-500"><b>FIN DE LOS POST</b></footer>
        </>
    )
}