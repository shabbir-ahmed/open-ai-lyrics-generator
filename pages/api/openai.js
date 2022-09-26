import OpenAI from "openai-api";
const openaiapi = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
	// console.log(req);
	let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
	const gptResponse = await openaiapi.complete({
		engine: "davinci",
		prompt: prompt,
		maxTokens: 50,
		temperature: 0.7,
		topP: 1,
		presencePenalty: 0,
		frequencyPenalty: 0.5,
		bestOf: 1,
		n: 1,
	});

	// console.log(gptResponse.data);

	res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
};
