import { Choice } from './Choice';

export const options: { [key: string]: Choice[] } = {
  project: [
    {
      value: 'console',
      label: 'Console application',
      usage: 'dotnet new console [-lang {C#|F#|VB}]',
      nb: 'argument lang is optional and not valid for some templates but allows to specify the language of the template to create e.g. "dotnet new console -lang C#"'
    },
    {
      value: 'classlib',
      label: 'Class library',
      usage: 'dotnet new classlib',
      nb: 'argument lang is optional and not valid for some templates but allows to specify the language of the template to create e.g. "dotnet new classlib -lang C#"'
    },
    {
      value: 'mvc',
      label: 'ASP.NET Core Web App (Model­-Vi­ew-­Con­tro­ller)',
      usage: 'dotnet new mvc',
      nb: 'argument lang is optional and not valid for some templates but allows to specify the language of the template to create e.g. "dotnet new mvc -lang C#"'
    },
    {
      value: 'xunit',
      label: 'xUnit test project',
      usage: 'dotnet new xunit',
      nb: 'argument lang is optional and not valid for some templates but allows to specify the language of the template to create e.g. "dotnet new xunit -lang C#"'
    }
  ]
};

export const tertiaryOptions = options;