import React from 'react'

import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

/* To get 100% lighthouse score */
/* https://github.com/gatsbyjs/gatsby/issues/9085 */

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">You need to enable JavaScript to use this app.</noscript>,
  ])
}
