import '@/styles/globals.scss'
import { RecoilRoot } from 'recoil'
import { StyledEngineProvider } from '@mui/material/styles'

export default function App({ Component, pageProps }) {
  return <RecoilRoot>
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  </RecoilRoot>
}
