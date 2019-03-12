import { Choice } from './Choice';

const options: { [key: string]: Choice[] } = {
  create: [
    {
      value: 'sln',
      label: 'new solution file',
      usage: 'dotnet new sln'
    },
    {
      value: 'new',
      label: 'new project'
    }
  ],
  add: [
    {
      value: 'csharp-project',
      label: 'an existing C# project to a solution',
      usage: 'dotnet sln <solution>.sln add <project>.c­sproj',
      nb: 'Replace "solution" and "project" with the items you want'
    },
    {
      value: 'pattern',
      label: 'multiple C# projects to a solution using a globbing pattern',
      usage: 'dotnet sln <solution>.sln add **/*.cs­proj',
      nb: 'Replace "solution" with the items you want'
    },
    {
      value: 'pattern',
      label: 'a reference from one project to another',
      usage: 'dotnet add reference <project>.csproj',
      nb: 'Replace "project" with the item you want'
    }    
  ],
  delete: [
    {
      value: 'project',
      label: 'a C# project from a solution',
      usage: 'dotnet sln todo.sln remove todo-a­pp/­tod­o-a­pp.c­sproj'
    }
  ],
  show: [
    {
      value: 'templates',
      label: 'list of the available templates',
      usage: 'dotnet new -l'
    },
    {
      value: 'projects',
      label: 'all projects in a solution file',
      usage: 'dotnet sln list'
    },
    {
      value: 'info',
      label: 'detailed information about a .NET Core installation and the machine environment,',
      usage: 'dotnet --info'
    },
    {
      value: 'runtimes',
      label: 'installed .NET Core runtimes',
      usage: 'dotnet --list-runtimes'
    },
    {
      value: 'sdks',
      label: 'installed .NET Core SDKs',
      usage: 'dotnet --list-sdks'
    },
    {
      value: 'version',
      label: 'version of the .NET Core SDK in use',
      usage: 'dotnet --version'
    }    
  ]
};

export const secondaryOptions = options;