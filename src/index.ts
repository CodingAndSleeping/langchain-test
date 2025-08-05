import dotenv from 'dotenv'
import { ChatDeepSeek } from '@langchain/deepseek'
import { HumanMessage } from '@langchain/core/messages'
const env = dotenv.config().parsed

const process = {
  env,
}

const model = new ChatDeepSeek({
  model: 'deepseek-chat',
  apiKey: process.env.API_KEY,
})

const message = new HumanMessage('你好')
console.log(message)

const res = await model.invoke([message])
console.log(res)
