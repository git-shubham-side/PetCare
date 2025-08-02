import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = "sk-d15f4652958c4ec494d0902b4d3c96d2";

async function callDeepSeek() {
  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${'sk-d15f4652958c4ec494d0902b4d3c96d2'}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Hello, DeepSeek!" }
      ]
    })
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
}

callDeepSeek();
