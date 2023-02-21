import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="dark">
      <Head>
      </Head>
      <body class="dark:bg-gray-900">
        <Component />
      </body>
    </html>
  );
}
