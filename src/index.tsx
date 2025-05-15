import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'

import { App } from './app/app.component'

const container = document.getElementById('root')

if (container) {
  const root = ReactDOM.createRoot(container)

  root.render(<App />)
}
