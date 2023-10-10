import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/* <script async src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script> */}
                    <script async src='https://identity.netlify.com/v1/netlify-identity.js'></script>
                    <script async>
                        {`
                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', function () {
                                    netlifyIdentity.init({
                                        APIUrl: 'https://soul-healing-new.netlify.com/.netlify/identity'
                                });
                            });
                            } else {
                                netlifyIdentity.init({
                                    APIUrl: 'https://soul-healing-new.netlify.com/.netlify/identity'
                            });
                            }
                        `}
                    </script>
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
                {/* Polyfill for CSS scroll-timeline */}
                <script src='/scroll-timeline-polyfill.js' defer></script>
            </Html>
        )
    }
}

export default MyDocument