const { Client } = require('..')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({
  key: process.env.KEY,
  sender: process.env.SENDER,
  user_id: process.env.USER_ID,
})

client.sendMessages({
  msg: 'test',
  receiver: '01055446082',
  msg_type: 'SMS'
}).then(console.log)
