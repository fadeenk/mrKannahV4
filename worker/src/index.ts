import { Resend } from "resend";

export interface Env {
  RESEND_API_KEY: string;
}

const ALLOWED_ORIGINS = [
  "https://mrkannah.com",
  "https://www.mrkannah.com",
  "https://fadeenk.github.io",
  "http://localhost:3000",
  "http://localhost:3001",
];

function getCorsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get("Origin") || "";
  const allowOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0];

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
  };
}

function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return str.replace(/[&<>"']/g, (char) => map[char] || char);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = getCorsHeaders(request);

    // Handle preflight OPTIONS request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    let data: {
      name?: string;
      email?: string;
      message?: string;
    };

    try {
      data = await request.json();
      if (!data || typeof data !== "object") {
        throw new Error("Payload must be a JSON object");
      }
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON payload" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    try {
      const name = (typeof data.name === "string" ? data.name : "").trim();
      const email = (typeof data.email === "string" ? data.email : "").trim();
      const message = (typeof data.message === "string" ? data.message : "").trim();

      // Sanitize name to prevent header injection (remove CRLF and angle brackets)
      const cleanName = name.replace(/[\r\n<>]+/g, " ").trim();

      if (!cleanName || !email || !message) {
        return new Response(
          JSON.stringify({ error: "Name, email, and message are required." }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      // Basic email syntax check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: "Invalid email address format." }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (!env.RESEND_API_KEY) {
        return new Response(
          JSON.stringify({ error: "Server configuration error: missing API key." }),
          {
            status: 500,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      const resend = new Resend(env.RESEND_API_KEY);

      const safeName = escapeHtml(cleanName);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message);

      const htmlContent = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #111; margin-top: 0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${safeMessage}</div>
        </div>
      `;

      const response = await resend.emails.send({
        from: `${cleanName} <contact@consulting.mrkannah.com>`,
        to: ["fadeekannah@gmail.com"],
        replyTo: email,
        subject: `New contact form submission from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: htmlContent,
      });

      if (response.error) {
        return new Response(
          JSON.stringify({ error: response.error.message }),
          {
            status: 500,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new Response(
        JSON.stringify({ success: true, id: response.data?.id }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || "Failed to process request" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};
