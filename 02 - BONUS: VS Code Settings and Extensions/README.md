# Visual Studio Code Settings and Extensions
## Font 
I currently use Liberation Mono. It's free. You can get it here:  
[https://www.fontsquirrel.com/fonts/liberation-mono](https://www.fontsquirrel.com/fonts/liberation-mono)  


P.S. I also like [Inconsolota](https://fonts.google.com/specimen/Inconsolata).

## Extensions
*   THEME: [Default Dark+ Contrast](https://marketplace.visualstudio.com/items?itemName=k3a.theme-dark-plus-contrast)
*   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (make sure you also `npm install -g eslint`) - Linter
*   [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode) - Syntax highlighting for GraphQL
*   [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Tells you the size of your imports
*   [JavaScript Standard Style](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs) - Integrates [JavaScript Standard Style](https://github.com/feross/standard) into VSCode
*   [Prettier-Standard JavaScript Formatter](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode) - formats Javascript using [Prettier](https://github.com/prettier/prettier) and [Standard](https://github.com/feross/standard)
*   [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - Nicer icons
*   [Sort Lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines) - Sorts lines of code alphabetically

## Settings

```json
{
  "editor.fontFamily": "Liberation Mono, Inconsolata, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "editor.rulers": [
    80
  ],
  "editor.tabSize": 2,
  "javascript.validate.enable": true,
  "terminal.integrated.fontSize": 16,
  "window.zoomLevel": 0,
  "workbench.activityBar.visible": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.statusBar.visible": false,
  "files.associations": {
    "*.gql": "graphql"
  },
  "files.autoSave": "off",
  "eslint.autoFixOnSave": true,
  "workbench.panel.location": "right",
  "workbench.colorTheme": "Dark+ (contrast)",
  "workbench.startupEditor": "none"
}
```