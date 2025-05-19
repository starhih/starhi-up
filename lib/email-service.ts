/**
 * Email service for client-side form submissions
 * This uses a third-party email service (EmailJS) to send emails from the client side
 * 
 * To use this service:
 * 1. Sign up for EmailJS (https://www.emailjs.com/)
 * 2. Create a service (e.g., Gmail)
 * 3. Create an email template
 * 4. Add your service ID, template ID, and user ID to the .env file
 */

// Function to send an email using EmailJS
export async function sendEmail(templateParams: Record<string, any>, templateId: string) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  
  if (!serviceId || !userId || !templateId) {
    console.error('EmailJS configuration is missing');
    return { success: false, error: 'Email service configuration is missing' };
  }
  
  try {
    // Load EmailJS dynamically to avoid SSR issues
    const emailjs = await import('@emailjs/browser');
    
    // Initialize EmailJS
    emailjs.init(userId);
    
    // Send the email
    const response = await emailjs.send(serviceId, templateId, templateParams);
    
    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: `Failed to send email: ${response.text}` };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

// Contact form email
export async function sendContactEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  return sendEmail({
    from_name: data.name,
    from_email: data.email,
    company: data.company || 'Not provided',
    phone: data.phone || 'Not provided',
    subject: data.subject,
    message: data.message,
  }, process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '');
}

// Request quote email
export async function sendQuoteRequestEmail(data: Record<string, any>) {
  return sendEmail({
    ...data,
    form_type: 'Quote Request',
  }, process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID || '');
}

// Request sample email
export async function sendSampleRequestEmail(data: Record<string, any>) {
  return sendEmail({
    ...data,
    form_type: 'Sample Request',
  }, process.env.NEXT_PUBLIC_EMAILJS_SAMPLE_TEMPLATE_ID || '');
}

// Download catalogue email
export async function sendCatalogueRequestEmail(data: Record<string, any>) {
  return sendEmail({
    ...data,
    form_type: 'Catalogue Download',
  }, process.env.NEXT_PUBLIC_EMAILJS_CATALOGUE_TEMPLATE_ID || '');
}

// Job application email
export async function sendJobApplicationEmail(data: Record<string, any>) {
  return sendEmail({
    ...data,
    form_type: 'Job Application',
  }, process.env.NEXT_PUBLIC_EMAILJS_JOB_TEMPLATE_ID || '');
}

// General application email
export async function sendGeneralApplicationEmail(data: Record<string, any>) {
  return sendEmail({
    ...data,
    form_type: 'General Application',
  }, process.env.NEXT_PUBLIC_EMAILJS_GENERAL_APP_TEMPLATE_ID || '');
}

// Meeting request email
export async function sendMeetingRequestEmail(data: Record<string, any>) {
  return sendEmail({
    ...data,
    form_type: 'Meeting Request',
  }, process.env.NEXT_PUBLIC_EMAILJS_MEETING_TEMPLATE_ID || '');
}

/**
 * Format form data into a readable text format
 * @param data - Form data object
 * @returns Formatted text
 */
export function formatFormData(data: Record<string, any>): string {
  return Object.entries(data)
    .map(([key, value]) => {
      // Format the key with proper capitalization and spacing
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1') // Add space before capital letters
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
        .replace(/([a-z])([A-Z])/g, '$1 $2'); // Add space between camelCase words
      
      // Handle boolean values
      if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
      }
      
      return `${formattedKey}: ${value}`;
    })
    .join('\n');
}
