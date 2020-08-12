import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./gql/schema";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
