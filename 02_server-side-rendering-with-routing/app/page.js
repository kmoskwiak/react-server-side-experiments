module.exports = (helmet, html, initial) => {
    return `
    <!doctype html>
    <html>
        <head>
            ${helmet.title.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="app">${html}</div>
        </body>
        <script>
            window.__PRELOADED_STATE__ = ${initial}
        </script>
        <script src="/static/vendor.js"></script>
        <script src="/static/client.js"></script>
    </html>
`};