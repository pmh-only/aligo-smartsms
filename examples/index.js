const { Client } = require('..')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({
  key: process.env.KEY,
  sender: process.env.SENDER,
  user_id: process.env.USER_ID,
})

client.bulkSendMessages({
  cnt: 1,
  msg: [{
    receiver: '01055446082',
    content: 'test'
  }],
  msg_type: 'SMS'
}).then(console.log)
