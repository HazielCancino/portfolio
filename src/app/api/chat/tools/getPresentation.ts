import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Haziel Cancino. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Haziel Cancino, a software developer from México with a passion for AI tools and practical coding solutions. I specialize in Python and JavaScript, and I love working on projects that combine AI with real-world applications.",
    };
  },
});
