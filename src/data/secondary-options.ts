import { Choice } from './Choice';

const options: { [key: string]: Choice[] } = {
  create: [
    {
      value: 'sln',
      label: 'new solution file',
      usage: 'dotnet new sln'
    },
    {
      value: 'project',
      label: 'new project'
    },
    {
      value: 'globaljson',
      label: 'global.json file',
      usage: 'dotnet new globaljson'
    },
    {
      value: 'nugetconfig',
      label: 'NuGet config',
      usage: 'dotnet new nugetconfig'
    },
    {
      value: 'webconfig',
      label: 'Web config',
      usage: 'dotnet new webconfig'
    }
  ],
  add: [
    {
      value: 'csharp-project',
      label: 'an existing C# project to a solution',
      usage: 'dotnet sln <solution>.sln add <project>.c­sproj',
      nb: 'Replace <solution> and <project> with the items you want'
    },
    {
      value: 'pattern',
      label: 'multiple C# projects to a solution using a globbing pattern',
      usage: 'dotnet sln <solution>.sln add **/*.cs­proj',
      nb: 'Replace <solution> with the name you want'
    },
    {
      value: 'reference',
      label: 'a reference from one project to another',
      usage: 'dotnet add reference <project>.csproj',
      nb: 'Replace <project> with the item you want'
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
      value: 'help',
      label: 'help for a command',
      usage: 'dotnet help <command>',
      nb: 'Replace <command> with the command you need help for.\n\ne.g. dotnet build -h.'
    },
    {
      value: 'installed templates',
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
      value: 'installed runtimes',
      label: 'installed .NET Core runtimes',
      usage: 'dotnet --list-runtimes'
    },
    {
      value: 'installed sdks',
      label: 'installed .NET Core SDKs',
      usage: 'dotnet --list-sdks'
    },
    {
      value: 'version',
      label: 'version of the .NET Core SDK in use',
      usage: 'dotnet --version'
    }    
  ],
  restore: [
    {
      value: 'dependencies',
      label: 'dependencies and tools of a project',
      usage: 'dotnet restore',
      nb: 'Starting with .NET Core 2.0 SDK, you don\'t have to run dotnet restore because it\'s run implicitly by all commands that require a restore to occur, such as dotnet new, dotnet build and dotnet run.'
    }
  ],
  clean: [
    {
      value: 'output',
      label: 'the output of a project',
      usage: 'dotnet clean [<project>]',
      nb: 'Replace <project> with your project name.\n\nThe dotnet clean command cleans the output of the previous build.'
    }
  ],
  run: [
    {
      value: 'sourcecode',
      label: 'source code',
      usage: 'dotnet run <myapp.dll>',
      nb: 'Replace <myapp.dll> with your dll.\n\nThe command depends on the dotnet build command to build the code. Any requirements for the build, such as that the project must be restored first, apply to dotnet run as well.'
    }
  ]
};

export const secondaryOptions = options;