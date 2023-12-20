import type { AppProps } from 'next/app';

import 'css/common/critical.css';
import 'css/common/custom-properties.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
