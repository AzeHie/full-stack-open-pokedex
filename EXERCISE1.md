I picked C# for a language for this exercise.

Let's start with linting C# apps.StyleCop is commonly used tool for linting C# applications. StyleCop is a tool which checks C# code follows given rules. 

When testing C# apps, MSTest is one commonly used tool. It's Microsoft's built-in testing framework for VS-Code studio.

For building C# apps, MSBuild is commonly used in the vs-code projects. It's also Microsoft's platform.

Alternative ways to set up CI:
Azure Pipelines is a cloud-based CI/CD service. It supports testing, building and deploying apps on any platform. Azure pipelines is provided by Microsoft and it offers integration with Azure services and GitHub repos, but can also be used with many other version control systems.
GitLab CI/CD is integrated into GitLab's platform and offers developers to define CI/CD directly within the GitLab repository. It supports building, testing and deploying apps across many different platforms.

When choosing between self-hosted and cloud-based environment, there is many different things to think about e.g controlling, customization and cost. Usually it's easiest way to use the same provider, which is used with the project already. GitHub actions if working with GitHub, GitLab CI/CD if GitLab is used already. Cloud-based solutions are usually easier to set up and might be good choice especially with the smaller applications, but that's just one good reason for use of them. 
