# ThinkClimate.earth website

This is a statically generated GatsbyJS website hosted on thinkclimate.earth, via Netlify. Content is managed via Netlify CMS.

## Prerequisites

- Node v11
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)
- Install prettier globally

If you're using VSCode as an IDE, refer to the recommended plugins and settings in `./vscode`

## Tech stack

- GatsbyJS (React)
- StyledComponents
- Storybook
- Netlify CMS (& markdown content)
- Stylelint and Eslint for


## Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ git clone https://github.com/sallynorthmore/think-climate.git
$ cd think-climate
$ yarn
$ netlify dev # or ntl dev
```

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

More info on using Netlify, GatsbyJS & Netlify CMS in the [Netlify docs](./docs/netlify.md).


### Ways of working

We use Git, gitflow methodology and github's project management tools.

## Content

Markdown content is stored in `./src/content` and managed by a Netlify CMS at `http://thinkclimate/admin`
