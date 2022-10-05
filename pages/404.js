import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Page not found</title>
            </Head>
            <h1 className={utilStyles.centerText}>404 - Page Not Found</h1>
        </Layout>
    );
  }