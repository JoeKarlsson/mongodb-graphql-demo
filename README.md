# GraphQL, React & Apollo Demo

- [GraphQl Slides](https://speakerdeck.com/joekarlsson/getting-started-with-graphql-and-atlas-mongodb-local-sf-2020): Slides that accompany this demo
- [MongoDB GraphQL API Docs ](https://docs.mongodb.com/stitch/graphql): The Stitch GraphQL API allows client applications to access data in a linked MongoDB cluster using any standard GraphQL client.
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

To access data in a MongoDB collection through the GraphQL API, you must [create or generate a schema](https://docs.mongodb.com/stitch/graphql/expose-data/) for the collection. Stitch uses the collection schema to automatically generate GraphQL types and regenerates types whenever the schema changes.

For this demo, here is what a sample document look like:

```
{
    _id: 5e2dcfda1c9d440000ca22a3, [OBJECT_ID]
    imageUrl:"https://media.giphy.com/media/CLnmxQqmk6X16/giphy.gif", [STRING]
    description:"Happy" [STRING]
}
```

My GraphQL Schema looks like this:

``` JSON
{
  "title": "Instapost",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "description": {
      "bsonType": "string"
    },
    "imageUrl": {
      "bsonType": "string"
    }
  }
}
```

### 6. Connect the frontend app with your GraphQL API

Change `src/congig_example.js` to `src/config.js` and

Paste your Stitch App ID in the `APP_ID` feild.

### 7. Install dependencies & run locally

```sh
npm install
npm start # open http://localhost:3000 in your browser
```

## Related Links

- [MongoDB GraphQL API Docs ](https://docs.mongodb.com/stitch/graphql): The Stitch GraphQL API allows client applications to access data in a linked MongoDB cluster using any standard GraphQL client.
- [\$200 in FREE MongoDB Atlas Credits](https://www.joekarlsson.com/2019/12/how-to-activate-your-mongodb-atlas-credits/)
- [All resources](https://www.joekarlsson.com/2020/01/getting-started-with-graphql-and-atlas/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/JoeKarlsson/mongodb-graphql-demo/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

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

### Follow Joe Karlsson on Social

- Twitter - [@JoeKarlsson1](https://twitter.com/JoeKarlsson1)
- GitHub - [@JoeKarlsson](https://github.com/joekarlsson/)
- LinkedIn - [/in/joekarlsson](https://www.linkedin.com/in/joekarlsson/)
- Website - [joekarlsson.com](https://www.joekarlsson.com/)
