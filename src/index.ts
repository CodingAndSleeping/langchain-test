import dotenv from 'dotenv'
import { ChatDeepSeek } from '@langchain/deepseek'
const env = dotenv.config().parsed

const process = {
  env,
}

const model = new ChatDeepSeek({
  model: 'deepseek-chat',
  apiKey: process.env.API_KEY,
})

console.log(model)

const a = await model.invoke('nihao')
console.log(a)
