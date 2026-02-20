import emailjs from "@emailjs/browser";

// EmailJS configuration
const SERVICE_ID = "service_ahoobxo";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

export interface EmailParams {
  from_name?: string;
  from_email: string;
  subject: string;
  message: string;
  reply_to?: string;
}

export const sendEmailViaEmailJS = async (
  params: EmailParams,
): Promise<{ success: boolean; error?: string }> => {
  // Validate required environment variables
  if (!PUBLIC_KEY) {
    return {
      success: false,
      error:
        "EmailJS Public Key is not configured. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your environment variables.",
    };
  }

  if (!TEMPLATE_ID) {
    return {
      success: false,
      error:
        "EmailJS Template ID is not configured. Please set NEXT_PUBLIC_EMAILJS_TEMPLATE_ID in your environment variables.",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(params.from_email)) {
    return {
      success: false,
      error: "Invalid email address format.",
    };
  }

  // Validate subject
  if (!params.subject || params.subject.trim().length === 0) {
    return {
      success: false,
      error: "Subject cannot be empty.",
    };
  }

  if (params.subject.length > 200) {
    return {
      success: false,
      error: "Subject is too long. Maximum 200 characters allowed.",
    };
  }

  // Validate message
  if (!params.message || params.message.trim().length === 0) {
    return {
      success: false,
      error: "Message cannot be empty.",
    };
  }

  if (params.message.length > 5000) {
    return {
      success: false,
      error: "Message is too long. Maximum 5000 characters allowed.",
    };
  }

  try {
    // Initialize EmailJS with public key
    emailjs.init(PUBLIC_KEY);

    // Prepare template parameters matching EmailJS template
    // Template variables: {{name}}, {{email}}, {{subject}}, {{message}}, {{time}}, {{year}}
    const now = new Date();
    const currentTime = now.toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    });
    const currentYear = now.getFullYear();

    const templateParams = {
      name: params.from_name || "Portfolio Visitor", // {{name}} in template
      email: params.from_email, // {{email}} in template
      subject: params.subject.trim(), // {{subject}} in template
      message: params.message.trim(), // {{message}} in template
      time: currentTime, // {{time}} in template
      year: currentYear.toString(), // {{year}} in template
      reply_to: params.reply_to || params.from_email, // For reply-to functionality
    };

    // Debug log (remove in production if needed)
    console.log("Sending email with params:", {
      ...templateParams,
      message: templateParams.message.substring(0, 50) + "...",
    });

    // Send email
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }
  } catch (error: unknown) {
    console.error("EmailJS Error:", error);

    // Handle specific EmailJS errors
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message || "An error occurred while sending the email.",
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
};
