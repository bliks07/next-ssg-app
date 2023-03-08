import { StyledEngineProvider } from '@mui/material/styles'

export default function Layout({ children }) {

    return (<StyledEngineProvider injectFirst>
        {children}
    </StyledEngineProvider>)
}