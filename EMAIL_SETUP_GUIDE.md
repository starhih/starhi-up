# Email Setup Guide for Star Hi Herbs Website

This guide explains how to set up the email functionality for all forms on the Star Hi Herbs website.

## Overview

The website uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client side without requiring a server. This approach is compatible with static site generation and allows the forms to work with the current Next.js configuration.

## Step 1: Create an EmailJS Account

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## Step 2: Set Up an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail" (or another email provider you prefer)
4. Follow the instructions to connect your email account
   - For Gmail, you'll need to allow "Less secure app access" or use an app password if you have 2FA enabled
5. Give your service a name (e.g., "StarHiHerbs")
6. Save the service

## Step 3: Create Email Templates

You'll need to create a template for each form on the website:

### 1. Contact Form Template

1. Go to "Email Templates" in the EmailJS dashboard
2. Click "Create New Template"
3. Set a name (e.g., "contact_form")
4. Design your template with the following variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: New Contact Form: {{subject}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Phone: {{phone}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
5. Save the template and note the Template ID

### 2. Quote Request Template

1. Create a new template named "quote_request"
2. Design with variables:
   ```
   From: {{fullName}} <{{email}}>
   Subject: New Quote Request
   
   Name: {{fullName}}
   Email: {{email}}
   Company: {{company}}
   Phone: {{phone}}
   Country: {{country}}
   
   Product Category: {{productCategory}}
   Product Details: {{productDetails}}
   Quantity: {{quantity}}
   Timeframe: {{timeframe}}
   Additional Info: {{additionalInfo}}
   ```
3. Save and note the Template ID

### 3. Sample Request Template

1. Create a new template named "sample_request"
2. Design with variables:
   ```
   From: {{fullName}} <{{email}}>
   Subject: New Sample Request
   
   Name: {{fullName}}
   Email: {{email}}
   Company: {{company}}
   Job Title: {{jobTitle}}
   Phone: {{phone}}
   
   Shipping Address:
   {{address}}
   {{city}}, {{country}}
   
   Product Category: {{productCategory}}
   Sample Details: {{sampleDetails}}
   Intended Use: {{intendedUse}}
   ```
3. Save and note the Template ID

### 4. Catalogue Download Template

1. Create a new template named "catalogue_download"
2. Design with variables:
   ```
   From: {{fullName}} <{{email}}>
   Subject: New Catalogue Download Request
   
   Name: {{fullName}}
   Email: {{email}}
   Company: {{company}}
   Job Title: {{jobTitle}}
   Industry: {{industry}}
   Market Interest: {{marketInterest}}
   Subscribe to Newsletter: {{subscribeNewsletter}}
   ```
3. Save and note the Template ID

### 5. Job Application Template

1. Create a new template named "job_application"
2. Design with variables:
   ```
   From: {{firstName}} {{lastName}} <{{email}}>
   Subject: New Job Application: {{jobTitle}}
   
   Name: {{firstName}} {{lastName}}
   Email: {{email}}
   Phone: {{phone}}
   Experience: {{experience}}
   Position: {{jobTitle}}
   
   Cover Letter:
   {{coverLetter}}
   
   Resume: {{resumeFileName}} ({{resumeFileSize}})
   ```
3. Save and note the Template ID

### 6. General Application Template

1. Create a new template named "general_application"
2. Design with variables:
   ```
   From: {{firstName}} {{lastName}} <{{email}}>
   Subject: New General Application for {{department}} Department
   
   Name: {{firstName}} {{lastName}}
   Email: {{email}}
   Phone: {{phone}}
   Department: {{department}}
   Experience: {{experience}}
   
   Message:
   {{message}}
   
   Resume: {{resumeFileName}} ({{resumeFileSize}})
   ```
3. Save and note the Template ID

### 7. Meeting Request Template

1. Create a new template named "meeting_request"
2. Design with variables:
   ```
   From: {{fullName}} <{{email}}>
   Subject: New Meeting Request
   
   Name: {{fullName}}
   Email: {{email}}
   Company: {{company}}
   Job Title: {{jobTitle}}
   Phone: {{phone}}
   
   Event: {{eventName}}
   Location: {{eventLocation}}
   Dates: {{eventDates}}
   
   Preferred Meeting Date: {{preferredDate}}
   Preferred Meeting Time: {{preferredTime}}
   
   Meeting Topics:
   {{meetingTopics}}
   
   Additional Information:
   {{additionalInfo}}
   ```
3. Save and note the Template ID

## Step 4: Update Environment Variables

1. Open the `.env` file in your project
2. Update the following variables with your EmailJS information:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
   NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id
   NEXT_PUBLIC_EMAILJS_SAMPLE_TEMPLATE_ID=your_sample_template_id
   NEXT_PUBLIC_EMAILJS_CATALOGUE_TEMPLATE_ID=your_catalogue_template_id
   NEXT_PUBLIC_EMAILJS_JOB_TEMPLATE_ID=your_job_template_id
   NEXT_PUBLIC_EMAILJS_GENERAL_APP_TEMPLATE_ID=your_general_app_template_id
   NEXT_PUBLIC_EMAILJS_MEETING_TEMPLATE_ID=your_meeting_template_id
   ```

## Step 5: Test the Forms

1. Run your website locally with `npm run dev`
2. Fill out each form and submit it
3. Check your email to make sure you're receiving the form submissions
4. Check the EmailJS dashboard to see if the emails are being sent successfully

## Troubleshooting

If you encounter any issues:

1. Check the browser console for errors
2. Verify your EmailJS credentials in the `.env` file
3. Make sure your email templates are set up correctly
4. Check the EmailJS dashboard for any failed email attempts
5. Ensure your email service is connected properly

## EmailJS Free Plan Limitations

The free plan of EmailJS has some limitations:

- 200 emails per month
- 2 email templates
- 1 email service

If you need more, consider upgrading to a paid plan.

## Security Considerations

Since the email sending is done client-side, your EmailJS User ID is exposed in the frontend code. This is normal for EmailJS, but be aware that someone could potentially use your account to send emails if they extract this ID.

To mitigate this:

1. Set up email sending limits in your EmailJS account
2. Monitor your email sending activity
3. Consider implementing server-side email sending for production if security is a major concern
