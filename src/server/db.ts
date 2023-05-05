import { MongoClient } from "mongodb";

import {MANGODB_URI, DATABASE_NAME} from "./config"


// create a cached client in order to not create a new one every time 
let connectedClient;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME)
    }

    const client = new MongoClient(MANGODB_URI)
    await client.connect() //async call  
    await client.db(DATABASE_NAME).command({ ping: 1 }) 
    console.info ("Connect to MongoDB")  ;

    connectedClient = client;

    return client.db(DATABASE_NAME)

}

export const stopClient = async () => {
    await connectedClient?.close();

};

