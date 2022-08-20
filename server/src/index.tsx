// @ts-ignore
import express from "express";
import React from 'react'
// Инициализируем сервер
const app = express();
// client
import * as ReactDOMServer from "react-dom/server";
import { App } from "../../client/src/App";
// helpers
import { getConfigProperty} from "./helpers/getConfigProperty";
// types
import {BuildConfig} from "../../index";

const PORT: number = Number(process.env.SERVER_PORT) || 8000;
const config: BuildConfig = getConfigProperty()


app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)

  const html = `
        <html lang=${config?.head?.lang}>
        <head>
            <script src="bundle.index-YBUYX2ZC.js" async defer></script>
            <title>${ config?.head?.title ?? 'React App'}</title>
        </head>
        <body>
            <div id="app">
              ${app}
            </div>
        </body>
        </html>
    `;

  res.send(html);
});

app.use(express.static("./dist"));

app.listen(PORT);
