import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const chatModel = new ChatOpenAI({
    openAIApiKey: '', //你的OpenAI API Key
    streaming: true,
});

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a world class technical documentation writer."],
  ["user", "{input}"],
]);
const chain = prompt.pipe(chatModel);
const main = async () => {
    const response = await chain.invoke({
        input: "什么是鸡蛋呢?",
      });
    console.log(response);
};
main();
