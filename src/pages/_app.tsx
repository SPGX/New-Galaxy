import React, { ReactElement, useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import Login from './login'

import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

import { store } from '@/store'
import Layout from '@/hoc/layout'

import '../i18next'

config.autoAddCss = true
library.add(fab, fas, far)
import '../../styles/index.css'
import '../../styles/theme.css'
import '../../styles/scrollbar.css'
import '../../styles/galaxy-icon/index.css'

interface AppProp {
  token?: any
}

function App({ Component, pageProps }: AppProp | AppProps | any | string): ReactElement | null {
  const supportedChainIds = [56, 97, 1]

  const connectors = {
    injected: {},
  }

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
  }

  const [isLoading, setIsLoading] = useState<boolean>(true)
  // const [setAccessToken] = useState<any>(undefined)

  useEffect(() => {
    headers
    if (isLoading) {
      verifyAccessToken()
    }
  }, [isLoading])

  const verifyAccessToken = async () => {
    // const tokens = await localStorage.getItem('token')
    // setAccessToken(tokens)
    setIsLoading(false)
  }

  if (isLoading) return <div> loading...</div>

  return (
    <Provider store={store}>
      <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
        <Layout>
          <div>
            <Component {...pageProps} />
            {/* {!accessToken && !isLoading ? <Login /> : <Component {...pageProps} />} */}
          </div>
        </Layout>
      </ThirdwebWeb3Provider>
    </Provider>
  )
}

export default App
