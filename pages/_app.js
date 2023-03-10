import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { RecoilRoot } from 'recoil'
import { StyledEngineProvider } from '@mui/material/styles'
import AppIntlProvider from '@/components/appIntlProvider'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppIntlProvider>
        <RecoilRoot>
          <StyledEngineProvider injectFirst>
            <Component {...pageProps} />
          </StyledEngineProvider>
        </RecoilRoot>
      </AppIntlProvider>
    </Provider>
  )
}
