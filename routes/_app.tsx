import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta name="color-scheme" content="dark light" />
      </Head>
      <body class="dark:bg-gray-900 bg-white">
        <Component />
      </body>
    </html>
  );
}
