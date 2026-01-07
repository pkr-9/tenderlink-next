import emailjs from "@emailjs/browser";

export const sendEmail = async (templateParams: Record<string, unknown>) => {
    try {
        // Replace these with your actual EmailJS credentials or use environment variables
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

        if (!serviceId || !templateId || !publicKey) {
            console.warn("EmailJS environment variables are missing.");
        }

        return await emailjs.send(serviceId, templateId, templateParams, publicKey);
    } catch (error) {
        console.error("EmailJS Error:", error);
        throw error;
    }
};