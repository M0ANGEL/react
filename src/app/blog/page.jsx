import Link from "next/link";

export const metadata = {
    title: 'Menu de blog',
    description: 'Una descripciòn del sitio',
    keywords: ['p1', 'p2']
}

export default async function Post() {
    const data = await getData();
    return (
        <div>
            <h1 className="text-center text-red-400">Menu del blog</h1>
            <p className="text-center text-red-400">Listado de los blog</p>
            <br />
            <br />
            <ul>
                {data.map(({id, title, body})=> (
                    <li key={id}>
                        <Link href={`/blog/${id}`}><h3>{id} -- {title}</h3></Link>
                        <p>{body}</p>
                    </li>) )}
            </ul>

        </div>
    )
}

async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res.ok){
            throw new Error("Hubo un error en la red");
        }
        const posts = await res.json();
        return posts
    } catch (error) {
        console.error(error);
    }
}