const styles = require('./styles');

module.exports = (packages, content, component) => `<html lang="en" class="no-webfonts no-js">
    <head>
        <title>StormId Components - ${component}</title>
        <link type="text/css" rel="stylesheet" href="https://fast.fonts.net/cssapi/5b32fdc1-42a3-4334-b7b1-5befe7df53c8.css">
        <style>${styles()}</style>
    </head>
    <body>
        <header class="header">
            <div class="logo">
                <svg class="logo__img" xmlns="http://www.w3.org/2000/svg" width="150" height="32" viewBox="20 -2.2 240.8 51.2">
                    <path fill="#fff" d="M22.2 36.2c1.4 3.9 3 6.5 4.8 8s4 2.2 6.7 2.2c2.4 0 4.3-.5 5.7-1.6 1.3-1.1 1.9-2.4 1.9-4 0-.9-.2-1.8-.7-2.4-.5-.7-1.1-1.2-2-1.6-.9-.4-3.1-.9-6.7-1.5-3.4-.6-5.8-1.4-7.2-2.1s-2.4-1.8-3.2-3.1c-.7-1.3-1.1-2.7-1.1-4.2 0-2.3.8-4.4 2.3-6.3 2-2.4 4.8-3.6 8.4-3.6 2.7 0 5.3.9 7.6 2.6l2.2-2.4h1.4l.9 11.2H41c-1-3.2-2.3-5.4-4-6.9-1.6-1.4-3.7-2.1-6.2-2.1-2.1 0-3.8.5-5 1.6-1.2 1.1-1.8 2.3-1.8 3.8 0 1.3.6 2.4 1.6 3.3 1.1.9 3.2 1.6 6.4 2.1 3.7.6 6.2 1.1 7.2 1.6 1.9.6 3.3 1.7 4.3 3.1 1 1.4 1.5 3.1 1.5 5.1 0 2.8-1.1 5.2-3.3 7-2.2 1.9-4.9 2.9-8.3 2.9-3.1 0-6-1-8.7-3.1l-2.4 2.8h-1.7L20 36.2h2.2zM58.6 3.8h2.2v12.8H71v3.1H60.8v20.2c0 1.7.4 3.1 1.2 4 .9.9 1.9 1.4 3.2 1.4 1.5 0 2.8-.7 3.9-2.1 1.1-1.4 1.7-3.7 1.9-6.9h2.2c-.1 4.2-1.1 7.3-2.9 9.3s-4.1 3-6.9 3c-2.6 0-4.7-.7-6.1-2.1s-2.2-3.3-2.2-5.6V19.8h-5.4v-2.4c2.5-.4 4.4-1.4 5.7-3.2 2-2.5 3-6 3.2-10.4zM91.9 15.7c4.2 0 7.8 1.5 10.7 4.6s4.3 7.1 4.3 12.1c0 3.4-.6 6.4-1.9 8.8s-3.2 4.4-5.5 5.7c-2.4 1.4-4.9 2.1-7.7 2.1-4.1 0-7.5-1.6-10.4-4.7-2.9-3.1-4.2-7.1-4.2-12s1.4-9 4.3-12c2.8-3.1 6.2-4.6 10.4-4.6zm0 2.3c-2.5 0-4.6 1.1-6.2 3.4-1.6 2.3-2.4 5.9-2.4 10.7 0 5 .8 8.7 2.4 11s3.7 3.4 6.2 3.4c2.7 0 4.7-1.1 6.4-3.4 1.6-2.3 2.4-6.1 2.4-11.3 0-4.9-.8-8.4-2.4-10.5-1.6-2.2-3.7-3.3-6.4-3.3zM110.9 16.6l11.3-.6v12.8c1.2-4.2 2.7-7.4 4.4-9.5 1.7-2.1 3.8-3.2 6.3-3.2 1.7 0 3.1.5 4.1 1.6s1.5 2.4 1.5 4.2c0 1.4-.4 2.5-1 3.3-.7.8-1.5 1.1-2.6 1.1-1 0-1.8-.4-2.4-1-.6-.6-.9-1.6-.9-2.7 0-.7.1-1.4.6-2.1.4-.6.5-.9.5-1.1 0-.4-.2-.5-.6-.5-.9 0-1.9.5-3.2 1.6-1.6 1.5-2.9 3.6-3.7 6.2-1.4 4.1-2 7.3-2 9.7v6.7c0 .8.3 1.4.8 1.7s1.4.6 2.7.6h4v2.5h-19.6v-2.5h3.2c1.1 0 1.9-.2 2.4-.6.6-.4.8-.9.8-1.5V23.2c0-1.5-.4-2.7-1-3.4s-1.6-1.1-2.8-1.1H111l-.1-2.1zM143.9 16.6l9-.6c.5 2.4.8 4.6 1 6.7 1.7-2.4 3.4-4.2 5.1-5.2 1.7-1 3.6-1.5 5.6-1.5 2.1 0 3.9.6 5.4 1.7 1.4 1.1 2.5 3 3.3 5.5 1.5-2.4 3.2-4.2 5-5.4 1.9-1.2 3.9-1.8 6-1.8 2.9 0 5 .9 6.4 2.6 1.9 2.2 2.7 5.2 2.7 8.7v15.6c0 .9.2 1.6.7 1.9.6.5 1.6.8 2.8.8h1.6v2.5h-15.8v-2.5h1.6c1.4 0 2.3-.2 2.8-.6.6-.4.8-1.1.8-2V27.2c0-2.4-.6-4.2-1.7-5.4-1.1-1.3-2.7-1.9-4.5-1.9-1.4 0-2.7.4-3.8 1.1s-2 1.8-2.7 3.2c-.9 2-1.4 3.7-1.4 5.1v13.5c0 .9.2 1.6.7 2s1.3.6 2.3.6h2.1v2.5h-16v-2.5h1.8c1.1 0 2-.2 2.6-.6.6-.4.9-1 .9-1.7V28.6c0-3.1-.6-5.3-1.6-6.7-1.1-1.4-2.6-2.1-4.4-2.1-2.4 0-4.2.8-5.4 2.4-1.8 2.3-2.7 4.9-2.7 8v12.7c0 .9.2 1.6.6 2 .6.5 1.6.7 2.8.7h1.6v2.5h-15.8v-2.5h2.4c.9 0 1.6-.2 2.1-.6.5-.4.7-1 .7-1.7V22.6c0-1.1-.3-2-.9-2.6-.6-.6-1.7-.9-3.5-1.1l-.2-2.3z"/>
                    <path fill="gray" d="M202.5 16.6l12.5-.4v27.1c0 .7.1 1.3.6 1.6.5.4 1.1.6 1.9.6h3.6V48h-17.9v-2.5h3.3c1 0 1.7-.2 2.1-.7.4-.5.7-1.1.7-2.1V22.9c0-1.3-.4-2.2-1.1-2.9-.7-.7-1.8-.9-3.2-.9h-2.6l.1-2.5zm8.8-18.8c1 0 1.9.4 2.7 1.1.8.7 1.1 1.6 1.1 2.7 0 1-.4 1.9-1.1 2.7-.7.7-1.6 1.1-2.7 1.1-1 0-1.9-.4-2.7-1.1-.7-.7-1.1-1.6-1.1-2.7s.4-1.9 1.1-2.7c.8-.7 1.7-1.1 2.7-1.1zM239.6-1.6l12.3-.6v43.1c0 1.6.3 2.9.9 3.6.6.7 1.6 1.1 2.9 1.1h2.1v2.5h-10.7l-.8-6.4c-1.3 2.3-2.8 4-4.5 5.2-1.7 1.1-3.7 1.7-5.7 1.7-3.6 0-6.7-1.5-9.2-4.5s-3.8-6.9-3.8-11.9c0-5.3 1.6-9.6 4.9-12.8 2.5-2.5 5.4-3.7 8.7-3.7 2 0 3.8.5 5.4 1.5 1.6 1 3 2.5 4.2 4.6V4.1c0-.9-.4-1.7-1.1-2.2-.7-.6-1.9-.8-3.4-.8h-2.2v-2.7zm-1.9 20.1c-2.4 0-4.4 1-5.7 3-1.4 2-2.1 5.4-2.1 10.1 0 5.2.7 8.7 2.1 10.8 1.4 2.1 3.3 3.2 5.6 3.2 2.4 0 4.5-1.1 6.2-3.5s2.6-5.7 2.6-10.2c0-4.2-.9-7.6-2.8-10-1.6-2.4-3.6-3.4-5.9-3.4z"/>
                </svg>
                <div class="logo__subtitle">Components</div>
            </div>
            <nav class="nav">
                ${packages.map((packageName, i) => `<a class="nav__item${packageName === component ? ' is--active' : ''}" href="./${i === 0 ? 'index' : packageName}.html">${packageName.substr(0, 1).toUpperCase()}${packageName.substr(1)}</a>`).join('')}
            </nav>
        </header>
        <main class="markdown-body entry-content">
            <a href="https://github.com/stormid/components/tree/master/packages/${component}" target="_blank" class="github-corner" aria-label="View source on Github">
                <svg width="60" height="60" viewBox="0 0 250 250" style="fill:#000; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
                </svg>
            </a>
            ${content}
        <main>
    </body>
</html>`;