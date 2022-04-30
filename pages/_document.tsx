import Document from "next/document";
import  { ServerStyleSheet } from "styled-components";
import { Html,Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage
    
        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => (props) => 
                    sheet.collectStyles(<App {...props} />),

                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => (props) => 
                    sheet.collectStyles(<Component {...props} />),
            });
    
        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)
    
        return {
            ...initialProps,
            style: (
                <>
                    { initialProps.styles }
                    { sheet.getStyleElement() }
                </>
            )
        }
    }
    
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
