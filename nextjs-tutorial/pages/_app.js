import Layout from "../components/Layout";

import "../styles/globals.css";
//blueprint
export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>

            <Component {...pageProps} />
            <span>global Hello</span>
            <style jsx global>{`
                a {
                    color: red;
                }
            `}</style>
        </Layout>

    );
}