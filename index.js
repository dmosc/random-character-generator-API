import "dotenv/config";
const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
import schema from "./db/schema";
import resolvers from "./db/resolvers";

//env
const PORT = process.env.PORT || 4000;
const MONGO_END_POINT = process.env.MONGO_END_POINT || "";

//middleware setup
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

//connection to db
mongoose
  .connect(MONGO_END_POINT, { useNewUrlParser: true, autoIndex: false })
  .then(() => console.log(`Connected to mongodb endpoint: ${MONGO_END_POINT}`))
  .catch(err => console.error("Connection failed..."));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/graphql ... 🚀`);
});
