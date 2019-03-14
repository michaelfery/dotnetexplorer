# .Net Core Command Explorer

## Intro

Recently, I came across [Summitech's Git explorer](https://github.com/summitech/gitexplorer). It is a really cool resource for anyone to easily figure out the best Git commands to use. I loved it, use it almost every day and decided to build something similar for .Net Core CLI.

Website: [Click to find the right .Net Core commands without digging through the web.](http://dotnetexplorer.com)

Explore and Enjoy!

## Tools

### React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Azure

The website is currently hosted on Azure Web App.<br/>
The CI/CD is managed with Azure DevOps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Contribute

Thank you for contributing to DotNetExplorer!

Please follow the below instructions to send a Pull Request (Search the website to make sure that this command doesn't already exist).

The data folder (inside the src directory) is where you will be operating from. The three files you should be concerned with are the `primary-options.js`, `secondary-options.js` and `tertiary-options.js` files. 

These three files are responsible for the options a user can pick. 

`primary-options.js` contains an array of objects responsible for the options of the first select box. 
`secondary-options.js` contains an object. This object houses an arrays of objects (a mouthful :smile:), this is responsible for the second set of options a user sees when they select a primary option. 
`tertiary-option.js` file is responsible for cases where there needs to be a third & final select box.

#### Steps to add a new command
0. Please ensure you are not on the master branch. Checkout to a new branch entirely.
1. Add an object to the array in the `primary-options.ts` file. Sample Format:
```
 { value: 'show', label: 'show/view' }
```
2. Add an array to the `secondary-options` file. Sample Format:
```
show: [
    {
      value: 'info',
      label: 'detailed information about a .NET Core installation and the machine environment',
      usage: 'dotnet --version'
      nb: 'Displays informations as the current operating system, and commit SHA of the .NET Core version'
    },
    {
      value: 'version',
      label: 'version of the .NET Core SDK in use'
    },
  ```
  The `nb` is optional. It is responsible for what the user sees in the notes section. 
  
  `\n` is used to insert newline.
  
  3. To add tertiary options, remove the `usage` and `nb` key/value pair for that command in the `secondary-options.ts` file e.g..
  
   ```
show: [
    {
      value: 'new',
      label: 'new project'
    },
  ```
  
  then supply `tertiary-options.ts` file the necessary data e.g.
  ```
  new: [
    {
      value: 'console',
      label: 'console application',
      usage: 'dotnet new console'
    },
    {
      value: 'classlib',
      label: 'class library',
      usage: 'dotnet new classlib'
    }
  ]
  ```
4. Once you are done, add, commit, push and create a PR to Master.