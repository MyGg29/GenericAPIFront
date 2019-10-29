/* tslint:disable no-console */
import { createClient, print } from 'redis'
import { promisify } from 'util'

//const client = createClient(6379, 'localhost')
//
//client.on('connect', () => {
//  console.log('Connected to Redis')
//})
//
//client.on('error', (err) => {
//  console.error(`Something went wrong with Redis: ${err}`)
//})

//const getAsync = promisify(client.get).bind(client)
//const setAsync = promisify(client.set).bind(client)
//const delAsync = promisify(client.del).bind(client)

import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/isen-backend', {useNewUrlParser:true, useUnifiedTopology:true});
const connection = mongoose.connection;

export {
  connection,
 // getAsync,
 // setAsync,
 // delAsync
}
