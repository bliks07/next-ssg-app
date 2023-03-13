import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { RecoilRoot } from 'recoil'
import { StyledEngineProvider } from '@mui/material/styles'
import AppIntlProvider from '@/components/appIntlProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppIntlProvider>
        <RecoilRoot>
          <StyledEngineProvider injectFirst>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </StyledEngineProvider>
        </RecoilRoot>
      </AppIntlProvider>
    </Provider>
  )
}
