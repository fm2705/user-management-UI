import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


//all componenys are handled with the session provider
function MyApp({ Component, pageProps, session }) {
  return(
  <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  
  );
}

export default MyApp
