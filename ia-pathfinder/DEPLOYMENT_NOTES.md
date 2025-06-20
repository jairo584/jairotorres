# IA Pathfinder - Deployment Notes

This document provides basic instructions and considerations for deploying the IA Pathfinder application.

## Recommended Platforms

-   **Vercel:** Offers seamless deployment for Next.js applications. It automatically handles build processes and environment variables.
-   **Netlify:** Another excellent platform for deploying Next.js sites with good CI/CD integration.

## Environment Variables

You **MUST** set the following environment variable in your deployment platform's settings:

-   `OPENAI_API_KEY`: Your actual API key from OpenAI. This is required for the AI recommendations to function.

    Example: `OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"`

## Switching to Real OpenAI API

The application is currently configured to use a **mocked OpenAI API call** for development and testing purposes. To use the real OpenAI API in your deployed version:

1.  **Edit the API Route File:**
    Open `ia-pathfinder/src/app/api/recommendations/route.js`.

2.  **Modify the Code:**
    *   **Comment out or delete** the `mockOpenAICall` function and its usage. Specifically, find this line and comment it out:
        ```javascript
        const mockCompletion = await mockOpenAICall(prompt);
        const aiResponseContent = mockCompletion.choices[0].message.content;
        ```
    *   **Uncomment the real OpenAI API call section.** This involves:
        *   Ensuring the OpenAI client is instantiated correctly (it's typically done at the top of the file or within the handler if you prefer, but ensure it uses `process.env.OPENAI_API_KEY`):
            ```javascript
            // const openai = new OpenAI({
            //   apiKey: process.env.OPENAI_API_KEY,
            // });
            ```
            (Note: In the current `route.js` structure, the instantiation of `openai` is inside the commented-out "REAL OPENAI API CALL" block. Make sure it's active when you uncomment that block.)
        *   Uncommenting the lines that make the actual API call:
            ```javascript
            /*
            console.log("--- ATTEMPTING REAL OPENAI CALL ---");
            // ... (ensure OPENAI_API_KEY check and client instantiation) ...
            const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
            const completion = await openai.chat.completions.create({
              model: "gpt-4o", // Or your preferred model
              messages: [{ role: "user", content: prompt }],
              response_format: { type: "json_object" },
            });
            const aiResponseContent = completion.choices[0].message.content;
            */
            ```
            Make this section active by removing the `/*` and `*/`.

3.  **Deploy:**
    Commit these changes and deploy your application. The deployed version will now attempt to make real calls to the OpenAI API using the key you provided in your environment variables.

## Build Command

The standard build command is `next build`. Most platforms like Vercel and Netlify will detect this automatically.

## Important Notes

-   **Cost:** Be mindful of OpenAI API usage costs when using a real API key.
-   **Error Handling:** The current error handling for the OpenAI API call is basic. You might want to enhance it for a production environment.
-   **Security:** Ensure your `.env.local` file (if used locally) is in your `.gitignore` and that API keys are never committed to your repository.
-   **Model Choice:** The code is set to use `gpt-4o`. You can change this to other models like `gpt-3.5-turbo` if needed, which might affect cost and response quality.
