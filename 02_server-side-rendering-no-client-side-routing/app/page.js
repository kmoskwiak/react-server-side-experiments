module.exports = (helmet, html, initial, currentModule) => {
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
            window.__CURRENT_MODULE__ = ${currentModule}
        </script>
        <script src="/static/vendor.js"></script>
        <script src="/static/client.js"></script>
    </html>
`};