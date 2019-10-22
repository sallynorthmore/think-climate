# ThinkEarth

Website

## Getting Started

- `npm i`
- `npm start` Start server & client, serve at [http://localhost:3001/](http://localhost:3001/)

## Tech stack

- [GatsbyJS](https://www.gatsbyjs.org/)
- [ReactJS](https://reactjs.org/)
- [StyledComponents](https://www.styled-components.com/)
- [Prettier](https://prettier.io/)

Built with GatsbyJS starter ( [docs](./docs/gatsby-docs.md) )

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step

```
$ git clone https://github.com/sallynorthmore/think-climate.git
$ cd think-climate
$ npm i
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```
