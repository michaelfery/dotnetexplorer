import { Choice } from './Choice';

export const options: { [key: string]: Choice[] } = {
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
    },
    {
      value: 'mvc',
      label: 'ASP.NET Core Web App (Model­-Vi­ew-­Con­tro­ller)',
      usage: 'dotnet new mvc'
    },
    {
      value: 'xunit',
      label: 'xUnit test project',
      usage: 'dotnet new xunit'
    }
  ]
};

export const tertiaryOptions = options;