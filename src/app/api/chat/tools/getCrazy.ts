
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo i took of the inside of the stadium of our local football team, the best soccer football team in Mexico that year. I made it with a couple of friends of mine in the middle of the night, it was a great experience! we had to climb some really high fences and do some improvised parkour!";
  },
});