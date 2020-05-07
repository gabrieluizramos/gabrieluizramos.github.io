# Personal website and blog
Built with [Gatsby](https://www.gatsbyjs.org/).

It contains the following folder structure:
- [commands](./commands): contains some setup, draft creation and publishing scripts;
- [config](./config): contains the gatsby and blog build configuration, such ash [browser](./config/browser) and [plugins](./config/plugins) settings;
- [posts](./posts): contains all the blog posts, divided into the [draft](./posts/drafts) and [published](./posts/published) categories;
- [src](./src): with the application source files;
- [static](./static): with the static files preserved during build time.

All the posts are written in markdown files and are being built and deployed to the `master` branch of the github repo, that's why the `develop` branch is the current base branch in this case.
