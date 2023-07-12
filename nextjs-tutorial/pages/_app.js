import NavBar from "../components/NavBar";
import "../styles/globals.css";
//blueprint
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <span>global Hello</span>
            <style jsx global>{`
                a {
                    color: red;
                }
            `}</style>
        </>

    );
}