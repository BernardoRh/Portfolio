import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/Default'
import { GlobalStyle } from './styles/Global'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { PortifolioProvider } from './contexts/PortifolioContext'

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <PortifolioProvider>
          <Router />
        </PortifolioProvider>
      </HashRouter>
    </ThemeProvider>
  )
}