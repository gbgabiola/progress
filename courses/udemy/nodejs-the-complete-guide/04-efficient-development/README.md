# VS Code Node Debugger

Add settings to `launch.json`

```js
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/app.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    }
  ]
}

```
