const { MongoClient } = require('mongodb');


async function main() {
    const url = `mongodb://127.0.0.1:27017`;

    const dbName = 'webapps';
    let db;

    client = await MongoClient.connect(url);

    // Storing a reference to the database so you can use it later
    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);

    let collection = db.collection("users");

    // var user1 = { name: "Tom", email: "tom@gmail.com" };
    // let result = await collection.insertOne(user1);
    // console.log(result);

    // var user2 = { name: "Jane", email: "jane@gmail.com" };
    // result = await collection.insertOne(user2);
    // console.log(result);

    result = await collection.findOne({});
    console.log(result);

    // result = await collection.find({ name: "Jane" })
    // await result.forEach(console.dir);

    client.close();

}

main().catch(console.error);
