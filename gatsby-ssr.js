const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">Your browser does not support JavaScript!</noscript>,
  ])

  setHeadComponents([
    <script src="https://cmp-uat.osano.com/1t0AvyuRhBFceA1OUG/7e28edbe-b626-414e-ba2e-4d7e1d6939e1/osano.js"></script>
]);
}
