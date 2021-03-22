module.exports = (content, package) => require('./doctype')(`<html lang="en">
<head>
    <title>StormId Components</title>
    <link type="text/css" rel="stylesheet" href="https://fast.fonts.net/cssapi/5b32fdc1-42a3-4334-b7b1-5befe7df53c8.css">
    <style>
        :root {
            --font-family-default: "Avenir Next W01 Light", Helvetica, "Lucida Grande", sans-serif;
            --font-family-medium: "AvenirNextLTW01-Medium", Helvetica, "Lucida Grande", sans-serif;
            --font-family-bold: "Avenir Next LT W01 Bold", Helvetica, "Lucida Grande", sans-serif;
            --font-family-thin: "Avenir Next W01 Thin", Helvetica, "Lucida Grande", sans-serif;

            --font-size-peta: 2.986rem;
            --line-height-peta: 1.25;
            --font-size-giga: 2.074rem;
            --line-height-giga: 1.25;
            --font-size-mega: 01.728rem;
            --line-height-mega: 1.25;
            --font-size-alpha: 1.44rem;
            --line-height-alpha: 1.25;
            --font-size-gamma: 1rem;
            --line-height-gamma: 1.2;
            --font-size-delta: 0.85rem;
            --line-height-delta: 1.4;
            --font-size-epsilon: 0.694rem;
            --line-height-epsilon: 1.4;

            --baseline: 1.5rem;
            --gutter: 24px;

            --light-grey-1: #f5f5f5;
            --light-grey-2: #e6e6e6;
            --light-grey-3: #cccccc;
            --mid-grey-1: #b3b3b3;
            --mid-grey-2: #999999;
            --mid-grey-3: #808080;
            --dark-grey-1: #666666;
            --dark-grey-3: #323232;
            --teal: #187E81;
            --light-teal: #77b5be;
            --teal-black: #072425;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        html,
        body {
            height: 100%;
        }

        body {
            background: var(--light-grey-1);
            color: #333333;
            font: 100%/1.4 "AvenirNextLTW01-Regular", Helvetica, "Lucida Grande", sans-serif;
            font-display: swap;
        }
        h1 {
            font-size: var(--font-size-peta);
            font-family: var(--font-family-default);
            margin-bottom:calc(var(--baseline)/4);
        }
        h2 {
            font-size: var(--font-size-alpha);
            font-family: var(--font-family-medium);
            margin-top:calc(var(--baseline)*2);
            margin-bottom:calc(var(--baseline)/4);
        }
        h3 {
            font-size: var(--font-size-beta);
            font-family: var(--font-family-medium);
            margin-bottom:calc(var(--baseline)/4);
        }
        p {
            margin-bottom:calc(var(--baseline)/2);
        }
        hr {
            content:'';
            display:block;
            width:70px;
            height:4px;
            background-color:#28CBD0;
            margin-top:30px;
            border: 0 none;
        }
        .entry-content {
            overflow: none;
            margin: var(--baseline) 0 var(--baseline) 0;
            max-width: 900px;
            padding: 0 calc(var(--gutter)*2);
            width: 100%
        }
        img {
            filter: grayscale(100%);
            position: absolute;
            top: calc(var(--baseline)*2);
            right: calc(var(--baseline)*1.5)
        }
        .header {
            border-bottom: 1px solid var(--light-grey-2);
            margin-bottom: calc(var(--baseline)*2);
            padding-bottom: var(--baseline);
            margin-left: calc(var(--baseline)/2);
            margin-right: calc(var(--baseline)/2);
        }
        .col {
            float: left;
            margin-left: calc(var(--baseline)/2);
            margin-right: calc(var(--baseline)/2);
        }
        .clearfix:after,
        .clearfix:before {
            content: "";
            display: table
        }
        .clearfix:after {
            clear: both
        }
        .section {
            margin-bottom: calc(var(--baseline)*2);
        }
        .section__title {
            border-top: 2px solid;
            width: calc(((99.999% / 12) * 3) - (36px));
            padding-top: calc(var(--baseline)/2);
        }
        .section__content {
            border-top: 2px solid;
            width: calc(((99.999% / 12) * 8) - (36px));
            padding-top: calc(var(--baseline)/2);
        }
        .markdown-body .highlight pre,
        .markdown-body pre {
            border-left:3px solid var(--light-grey-3);
            background-color: white;
            line-height: 1.45;
            overflow: auto;
            padding: var(--baseline);
            margin-bottom: calc(var(--baseline));
            margin-top: calc(var(--baseline)/2);
        }
    </style>
</head>
<body>
    <a href="https://github.com/mjbp/components/tree/master/packages/${package}" target="_blank" class="github-corner" aria-label="View source on Github">
        <svg width="60" height="60" viewBox="0 0 250 250" style="fill:#000; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
    </a>
    <article class="markdown-body entry-content">${content}</body>
</html>`);