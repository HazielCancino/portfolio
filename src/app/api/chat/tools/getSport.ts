
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Haziel hobbies ",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some pictures of the hobbies i enjoy";
  },
});