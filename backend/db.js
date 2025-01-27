import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI; // Your MongoDB URI from environment variables
const client = new MongoClient(uri);

await client.connect(); // Ensure the connection is established
export { client };
