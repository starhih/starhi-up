"use client";

import { useState } from 'react';
import Image from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      const formValues = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        company: formData.get('company') as string,
        phone: formData.get('phone') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      // Import the email service dynamically to avoid SSR issues
      const { sendContactEmail } = await import('@/lib/email-service');

      // Send the email
      const result = await sendContactEmail(formValues);

      if (result.success) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you soon!",
        });

        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image src="/images/hero/contact-us.jpeg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/30"></div>
        <div className="relative z-10 container-custom text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-shadow-sm">Contact Us</h1>
            <p className="text-xl text-white text-shadow-sm">
              Get in touch with our team for inquiries, support, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Corporate Headquarters',
                content: 'Plot #50, 3rd Road, 1st Phase\nK.I.A.D.B. Industrial Area, Jigani\nBangalore - 560105, Karnataka, India',
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91 98 8642 2452 (Main)\n+91 89 7179 3584 (Sales)',
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'info@starhiherbs.com (General)\nstarhi@starhiherbs.com (Sales)',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Monday - Friday: 9:30 AM - 6:00 PM (IST)\nSaturday: 9:30 AM - 3:00 PM (IST)\nSunday: Closed',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#214842]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#214842]" />
                </div>
                <h3 className="text-lg font-semibold text-[#214842] mb-2">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#214842] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      className="w-full"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="w-full"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cta-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-[#214842] mb-6">Our Location</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9759341434!2d77.63233!3d12.8233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ5JzIzLjkiTiA3N8KwMzcnNTYuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Facilities</h6>
            <h2 className="text-[#214842] mb-4">Manufacturing Facilities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: 'Bangalore Unit',
                country: 'Karnataka, India',
                address: '#50, 3rd Road, 1st Phase, KIADB Industrial Area\nBangalore - 560105, Karnataka, India',
                phone: '+91 98 8642 2452',
                email: 'starhi@starhiherbs.com',
              },
              {
                city: 'Hassan Unit',
                country: 'Karnataka, India',
                address: 'Plot No 105-B, Pharma SEZ KIADB Industrial Area Hassan\nHassan - 573201, Karnataka, India',
                phone: '+91 93 4257 5028',
                email: 'research@starhiherbs.com',
              },
            ].map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-[#214842] mb-1">{office.city}</h3>
                <div className="text-[#258F67] font-medium mb-4">{office.country}</div>
                <div className="space-y-3 text-gray-600">
                  <p className="whitespace-pre-line">{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}