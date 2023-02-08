### A Figma Plugin
### Generates HTML and basic CSS code for given design 
#### Under Development
*Provides code in the CONSOLE*
**Uses TypeScript**

## Demonstration

1- The selected frame and the Plugin UI window.
![Screenshot 2023-02-08 172523](https://user-images.githubusercontent.com/86708181/217523554-5f00baa3-7da0-49da-9be4-704128796284.png)

2- Generated Code
![Screenshot 2023-02-08 172605](https://user-images.githubusercontent.com/86708181/217523721-1f946b20-5fd1-42a8-a2a0-6c0d23026876.png)

3- Verfiying the generated code in CodePen
![Screenshot 2023-02-08 172729](https://user-images.githubusercontent.com/86708181/217523834-c638733a-bd0b-4cec-ab02-286496f4f94b.png)


Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
