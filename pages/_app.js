import Background from "@components/Background/Background.styles";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Background foregroundColor="#533e2d" backgroundColor="#E1C4A3" opacity="0.2">
      <Component {...pageProps} />
    </Background>
  );
}

export default MyApp;
