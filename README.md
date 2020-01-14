# GraphQL, React & Apollo Demo

- [GraphQl Slides](https://slides.com/joekarlsson/graphql): Slides from the lecture
- [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
- [Apollo Client](https://github.com/apollographql/apollo-client): Fully-featured, production ready caching GraphQL client
- [Graphcool](https://www.graph.cool): Backend development framework based on GraphQL + Serverless
- [GraphQl Slides](https://speakerdeck.com/joekarlsson/building-a-graphql-client-in-javascript): Slides that accompany this demo

## Example

![graphql-demo](https://user-images.githubusercontent.com/4650739/46759321-bcd37180-cc94-11e8-974e-b8d464a39b67.gif)

## Quickstart

### 1. Clone example repository

```sh
git clone https://github.com/JoeKarlsson/graphql-apollo-demo.git
cd graphql-apollo-demo
```

### 2. Create Graphcool service with the [Graphcool CLI](https://docs-next.graph.cool/reference/graphcool-cli/overview-zboghez5go)

```sh
# Install Graphcool Framework CLI
npm install -g graphcool

# Create a new service inside a directory called `server`
graphcool init server
```

This created the following file structure in the current directory:

```
.
└── server
    ├── graphcool.yml
    ├── types.graphql
    └── src
        ├── hello.graphql
        └── hello.js
```

### 3. Define data model

Next, you need to define your data model inside the newly created `types.graphql`-file.

Replace the current contents in `types.graphql` with the following type definition (you can delete the predefined `User` type):

```graphql
type Post @model {
	# Required system field
	id: ID! @isUnique # read-only (managed by Graphcool)
	# Optional system fields (remove if not needed)
	createdAt: DateTime! # read-only (managed by Graphcool)
	updatedAt: DateTime! # read-only (managed by Graphcool)
	description: String!
	imageUrl: String!
}
```

### 4. Deploy the GraphQL server

You're now ready to put your Graphcool service into production! Navigate into the `server` directory and [deploy](https://docs-next.graph.cool/reference/graphcool-cli/commands-aiteerae6l#graphcool-deploy) the service:

```sh
cd server
graphcool deploy
```

When prompted which cluster you want to deploy to, choose any of the **Shared Clusters** options (`shared-eu-west-1`, `shared-ap-northeast-1` or `shared-us-west-2`).

Save the HTTP endpoint for the `Simple API` from the output, you'll need it in the next step.

> **Note**: You can now test your GraphQL API inside a GraphQL playground. Simply type the `graphcool playground` command and start sending queries and mutations.

### 5. Connect the frontend app with your GraphQL API

Paste the `Simple API` endpoint from the previous step to `./src/index.js` as the `uri` argument in the `HttpLink` constructor call:

```js
// replace `__SIMPLE_API_ENDPOINT__` with the endpoint from the previous step
const httpLink = new HttpLink({ uri: '__SIMPLE_API_ENDPOINT__' })
```

> **Note**: If you ever lose your endpoint, you can get access to it again with the `graphcool info` command.

### 6. Install dependencies & run locally

```sh
cd ..
npm install
npm start # open http://localhost:3000 in your browser
```

## Next steps

- [Documentation](https://www.graph.cool/docs)
- [Advanced GraphQL features](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/)
- [Implementing business logic with serverless functions](https://www.graph.cool/docs/reference/functions/overview-boo6uteemo/)

### Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/JoeKarlsson?v=3">
        <br />
        <a href="https://github.com/JoeKarlsson">Joe Karlsson</a>
      </td>
    <tr>
  <tbody>
</table>

### License

#### [MIT](./LICENSE)
