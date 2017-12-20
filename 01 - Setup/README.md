## tl;dr;  

1\. Make sure you have [Node JS](https://nodejs.org) (9.2.1 or better) installed.  
2\. Make a folder called "tdjs" and add a "package.json" file to it that matches [this](https://www.filepicker.io/api/file/sD9TnXfFSdOympnPNimi).  
3\. From inside "tdjs", run `npm install`

***

## Step-by-Step

#### Step 1 - Install Node JS  
Download and install **the most current version of Node JS** (9.2.1 or higher) from: [https://www.nodejs.org](https://www.nodejs.org)

#### Step 2 - Install a code editor
Download and install **Visual Studio Code*** editor from: [https://code.visualstudio.com](https://code.visualstudio.com)  

*I'll be using Visual Studio Code throughout the course, feel free to use any code editor you like.

#### Step 3 - Make a project folder


```
mkdir tdjs && cd tdjs
```


#### Step 4 - Initialize the project

```
npm init -y
```

#### Step 5 - Install dependencies

```
npm i babel-cli babel-preset-env jest -D
```

  
#### Step 6 - Configuration  

Modify your package.json file to match:

```json
{
  "name": "tdjs",
  "version": "1.0.0",
  "description": "Master Test Driven JavaScript",
  "main": "index.js",
  "babel": {
    "presets": [
      "env"
    ]
  },
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "jest": "^21.2.1"
  }
}
```

## Frequently Asked Questions

**What terminal software are you using?**  
[Hyper](https://hyper.is) (available for Mac, Windows, and Linux)

**Typing "code ." doesn't work for me, what's your secret?**
If you're on a Mac you'll need to follow these instructions:  
[https://code.visualstudio.com/docs/setup/mac](https://code.visualstudio.com/docs/setup/mac)

**Why do I need Babel?**  
We're using the most current JavaScript throughout the course, including ES Modules, and Babel will help us do that.  

You can find out more at [https://babeljs.io](https://babeljs.io)
