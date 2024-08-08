import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  p-40">
        <Link className="text-red-600 hover:blue cursor-pointer hover:text-green-500 hover:font-semibold ml-40" href="/blog">Ir al menu</Link>
    </main>
  )
}