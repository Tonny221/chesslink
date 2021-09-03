import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goToRoom = () => {
    router.push("/room/1");
  };

  return (
    <div className="container">
      <Head>
        <title>ChessLink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ChessLink</h1>
        <button onClick={goToRoom}>create game</button>
      </main>
    </div>
  );
}
