import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        const locale = useLocale();

        // Show a 404 error if the user requests an unknown locale
        if (params.locale !== locale) {
            console.log('not found')
            // notFound();
        }

        return (
            <Html lang={locale}>
                <Head>
                    <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                {/* Polyfill for CSS scroll-timeline */}
                <script src="/scroll-timeline-polyfill.js" defer></script>
            </Html>
        )
    }
}

export default MyDocument