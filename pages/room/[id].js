import Room from "@components/Room/Room";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container">
      <Head>
        <title>Room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TODO: create a proper header and remove this h1 */}
      <h1
        style={{
          textAlign: "center",
          paddingTop: "1rem",
          margin: "0 auto 1rem",
        }}
      >
        Room: {id}
      </h1>

      <Room />
    </div>
  );
}
