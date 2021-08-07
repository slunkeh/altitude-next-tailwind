import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect( () => { document.querySelector("body").classList.add("bg-dark","text-white,") }, [] );
  return <Component {...pageProps} />
}

export default MyApp
