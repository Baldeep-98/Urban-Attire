const { MongoClient } = require("mongodb");
let db;
const getNextSequence = async (name) => {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { ReturnDocument: "after" }
    );
  console.log(result);
  return result.current;
};
async function connection() {
  const client = new MongoClient(process.env.DB_URL);
  await client.connect();
  console.log("[Connected to MongoDb]");
  db = client.db("urban-attire");
}
const getDB = () => db;
module.exports = { connection, getDB, getNextSequence };
