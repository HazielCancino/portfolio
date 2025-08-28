import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: 6-month internship starting **September 2025**
- 🌍 *🌍 **Location**: Open to opportunities in **Mexico**, **United States**, or **Remote**
- 🧑‍💻 **Focus**: Full-stack development, AI integration, software engineering, technical support
- 🛠️ **Stack**: Python, JavaScript/React, Node.js, SQL, Electron, Tailwind CSS, GPT, RAG, etc.
- 💼 **Visa**: Based in México 🇲🇽 - open to J-1 sponsorship for US opportunities
- ✅ **What I bring**: Real experience with secure on-prem GPTs (Lighton), deepsearch engines, custom RAG tools, **Bilingual** communication skills.
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: hazcancino@gmail.com
- LinkedIn: [linkedin.com/in/haziel-cancino](www.linkedin.com/in/haziel-cancino-)
- GitHub: [github.com/hazielcancino](https://github.com/HazielCancino)

Let's build cool shit together ✌️
    `;
  },
});