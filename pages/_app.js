import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { RecoilRoot } from 'recoil'
import { StyledEngineProvider } from '@mui/material/styles'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </RecoilRoot>
  </Provider>
}
