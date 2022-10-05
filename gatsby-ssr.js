const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">Your browser does not support JavaScript!</noscript>,
  ])
}
