import { Handler } from "@netlify/functions";

const SYSTEM_PROMPT = `You are a helpful customer support chatbot for GURUAESTHETICS, a fitness coaching and personal training business. 
You have knowledge about the following:

1. SERVICES:
   - Weight Loss programs
   - Weight Gain programs
   - Muscle Building coaching
   - Power Lifting training
   - Body Building programs
   - Men's Physique coaching
   Each service includes personalized workout plans, form correction, progressive overload, and 24/7 trainer support.

2. PROGRAMS:
   - GURU ELITE: ₹8,000 for 3 months - Premium transformation program with personal trainer, custom meal plans, weekly check-ins, premium supplements
   - GURU LIFE: ₹12,000 for 6 months - Essential fitness program with group training, basic nutrition guide, monthly check-ins, online support
   - GURU PREMIUM: ₹18,000 for 12 months - Ultimate transformation program with one-on-one personal training, advanced meal plans, bi-weekly check-ins, premium supplements included, 24/7 priority support

3. GURU (Founder & Master Trainer):
   - Name: Guru (aka Gurusthetics)
   - Experience: 10,000+ hours of training experience
   - Certifications: Certified Personal Trainer, Fitness Mentor, Powerlifter, State-Level Bodybuilding Competitor
   - Specializes in home and gym-based workouts
   - Proven no-supplement, no-excuse transformation approach
   - Science-backed workout and nutrition guidance
   - Personalized fitness plans for every goal

4. CONTACT:
   - Phone: +91 9618772020
   - Email: guruaesthetics@gmail.com
   - Instagram: @gurusthetics

Please answer user questions about fitness, training programs, pricing, Guru's expertise, and services offered. 
Be friendly, professional, and keep responses concise (under 150 words).
Encourage them to book consultations or join programs.
If they ask something outside your scope, politely redirect them to contact via WhatsApp, email, or Instagram.`;

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { message } = JSON.parse(event.body || "{}");

    if (!message || typeof message !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY is not set");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "API key not configured",
          reply:
            "Sorry, the chatbot is not properly configured. Please contact us directly at +91 9618772020.",
        }),
      };
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "OpenAI API error",
          reply:
            "I'm having trouble processing your request. Please try again or contact us at +91 9618772020.",
        }),
      };
    }

    const data = await response.json();
    const reply =
      data.choices[0]?.message?.content ||
      "Sorry, I couldn't generate a response. Please try again.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("Chatbot error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
        reply:
          "Sorry, something went wrong. Please contact us directly at +91 9618772020.",
      }),
    };
  }
};

export { handler };
