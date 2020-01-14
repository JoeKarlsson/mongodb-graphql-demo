# GraphQL, React & Apollo Demo

- [GraphQl Slides](https://speakerdeck.com/joekarlsson/building-a-graphql-client-in-javascript): Slides that accompany this demo
- [Access MongoDB Data with GraphQL [Docs] ](#): The Stitch GraphQL API allows client applications to access data in a linked MongoDB cluster using any standard GraphQL client.
- [GraphQL](https://graphql.org/): A query language for your API
- [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
- [Apollo Client](https://github.com/apollographql/apollo-client): Fully-featured, production ready caching GraphQL client

## Example

![graphql-demo](https://user-images.githubusercontent.com/4650739/46759321-bcd37180-cc94-11e8-974e-b8d464a39b67.gif)

## Prerequisites

Before you begin, you will need a MongoDB Atlas account. You can learn more about creating an Atlas account in the [Atlas Getting Started](https://docs.atlas.mongodb.com/getting-started/) documentation.

Sign up [here](https://cloud.mongodb.com) and apply code JOEKATLAS200 on the billing page. For help: check out my post on redeemin your FREE Atlas credits:

[How To Activate Your MongoDB Atlas Credits](https://www.joekarlsson.com/2019/12/how-to-activate-your-mongodb-atlas-credits/)

## Quickstart

### 1. Clone example repository

```sh
git clone https://github.com/JoeKarlsson/mongodb-graphql-demo.git
cd mongodb-graphql-demo
```

### 2. Log on to Atlas

To use MongoDB Stitch, you must be logged into [Atlas](https://cloud.mongodb.com).

### 3. Create an Atlas Cluster

1. In the left navigation pane, click Clusters, and then click the Build New Cluster button. The Create New Cluster page opens.
2. Choose your preferred provider and region, tier, and additional settings. As you build your cluster, Atlas displays the associated costs at the bottom of the page.
3. The default cluster name is Cluster0. If you wish to change the name, do so now, as cluster names cannot be changed once configured.
4. Click the Create Cluster button to save your changes.

### 4. Add a Stitch App

1. In Atlas, click Stitch Apps in the left-hand navigation.
2. Click the Create New Application.
3. In the Create a new application dialog, enter an Application Name for your Stitch app.
4. Select a cluster in your project in your project from the Link to Cluster dropdown. Stitch will automatically create a MongoDB service that is linked to this cluster.
5. Enter a name for the service that Stitch will create in the Stitch Service Name field.
6. Select a deployment model and deployment region for your application.
7. Click Create.

![create-new-app-modal](https://user-images.githubusercontent.com/4650739/72307115-e3721c00-363e-11ea-8638-76098cd01808.png)

Upon creation of your app, you will be redirected to the MongoDB Stitch console. Your app is created with a MongoDB service named mongodb-atlas.

### 5. Expose Data in a Collection

To access data in a MongoDB collection through the GraphQL API, you must [create or generate a schema](https://docs-mongodbcom-staging.corp.mongodb.com/stitch/nick/graphql/mongodb/enforce-a-document-schema.html) for the collection. Stitch uses the collection schema to automatically generate GraphQL types and regenerates types whenever the schema changes.

### 6. Get a Client API Access Token

Stitch enforces collection rules for GraphQL requests, so you must include an authenticated Stitch user access token with each request. To get an access token, you need to authenticate with the Stitch Client HTTP API using the user’s login credentials.

The following authentication request sends the user’s username and password to the client authentication endpoint.

```sh
curl --location --request POST 'https://stitch.mongodb.com/api/client/v2.0/app/<yourappid-abcde>/auth/providers/local-userpass/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{

    "username": "test@example.com",

    "password": "password"

  }'
```

If authentication was successful, the response body includes an access_token value. You’ll need to use this token in your
GraphQL requests.

### 5. Connect the frontend app with your GraphQL API

Change `src/congig_example.js` to `src/config.js` and

Paste the `ACCESS_TOKEN` you got from the previous step into the config file along with your Stitch APP_ID.

### 6. Install dependencies & run locally

```sh
npm install
npm start # open http://localhost:3000 in your browser
```

## Next steps

- [Documentation](#)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/JoeKarlsson/iot-kitty-litter-box/blob/develop/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Contributing TLDR;

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

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

#### [Apache 2.0](./LICENSE)
