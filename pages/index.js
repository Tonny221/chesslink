import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ChessLink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ChessLink</h1>
        <Link href="/room">room</Link>
      </main>
    </div>
  );
}
