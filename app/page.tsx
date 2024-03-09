import Image from 'next/image';

export default function Home() {
    const name = 'World';

    return (
        <>
            <div className="h1-bold">Hello World</div>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </>
    );
}
