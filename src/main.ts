import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const chatModel = new ChatOpenAI({
    openAIApiKey: '',//你的OpenAI API Key
    streaming: true,
});
const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer."],
    ["user", "{input}"],
  ]);
  const chain = prompt.pipe(chatModel);


const main = async () => {
    const response = await chain.invoke("what is LangSmith?");

    console.log(response);
}
main()