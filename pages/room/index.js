import Room from "@components/Room/Room";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Room />
    </div>
  );
}
