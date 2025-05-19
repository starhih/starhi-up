'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { events } from '@/src/data';
import { handleError, logError } from '@/utils/error-handling';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters' }),
  jobTitle: z.string().min(2, { message: 'Job title must be at least 2 characters' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number' }),
  eventId: z.string().min(1, { message: 'Please select an event' }),
  preferredDate: z.string().min(1, { message: 'Please specify your preferred meeting date' }),
  preferredTime: z.string().min(1, { message: 'Please specify your preferred meeting time' }),
  meetingTopics: z.string().min(10, { message: 'Please provide details about what you would like to discuss' }),
  additionalInfo: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, { message: 'You must accept the terms and conditions' }),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestMeetingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string>('');

  // Filter only upcoming events
  const upcomingEvents = events.filter(event => event.upcoming);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      eventId: '',
      preferredDate: '',
      preferredTime: '',
      meetingTopics: '',
      additionalInfo: '',
      termsAccepted: false,
    },
  });

  // Watch the eventId field to update the selected event
  const watchEventId = watch('eventId');

  // Handle event selection
  const handleEventChange = (value: string) => {
    setValue('eventId', value);
    setSelectedEvent(value);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Get the selected event details for the email
      const selectedEventDetails = upcomingEvents.find(event => event.id.toString() === data.eventId);

      // Prepare data for email with event details
      const emailData = {
        ...data,
        eventName: selectedEventDetails?.name || 'Unknown Event',
        eventLocation: selectedEventDetails?.location || 'Unknown Location',
        eventDates: selectedEventDetails ?
          `${new Date(selectedEventDetails.startDate).toLocaleDateString()} - ${new Date(selectedEventDetails.endDate).toLocaleDateString()}` :
          'Unknown Dates'
      };

      // Import the email service dynamically to avoid SSR issues
      const { sendMeetingRequestEmail } = await import('@/lib/email-service');

      // Send the email
      const result = await sendMeetingRequestEmail(emailData);

      if (result.success) {
        // Success
        setSubmitSuccess(true);
        reset();
        setSelectedEvent('');

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to submit the form');
      }
    } catch (error) {
      const errorMessage = handleError(error, 'Failed to submit the form. Please try again.');
      setSubmitError(errorMessage);
      logError(error, 'RequestMeetingForm');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the selected event details
  const selectedEventDetails = upcomingEvents.find(event => event.id.toString() === watchEventId);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success message */}
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          <p>Thank you for your meeting request! Our team will contact you shortly to confirm the details.</p>
        </div>
      )}

      {/* Error message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          <p>{submitError}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="fullName"
            {...register('fullName')}
            placeholder="John Doe"
            className={errors.fullName ? 'border-red-300' : ''}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john@example.com"
            className={errors.email ? 'border-red-300' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company <span className="text-red-500">*</span>
          </label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Your Company"
            className={errors.company ? 'border-red-300' : ''}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
          )}
        </div>

        {/* Job Title */}
        <div className="space-y-2">
          <label htmlFor="jobTitle" className="text-sm font-medium text-gray-700">
            Job Title <span className="text-red-500">*</span>
          </label>
          <Input
            id="jobTitle"
            {...register('jobTitle')}
            placeholder="Product Manager"
            className={errors.jobTitle ? 'border-red-300' : ''}
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+1 (555) 123-4567"
            className={errors.phone ? 'border-red-300' : ''}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Event Selection */}
        <div className="space-y-2">
          <label htmlFor="eventId" className="text-sm font-medium text-gray-700">
            Select Event <span className="text-red-500">*</span>
          </label>
          <Select onValueChange={handleEventChange} value={selectedEvent}>
            <SelectTrigger className={errors.eventId ? 'border-red-300' : ''}>
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              {upcomingEvents.map((event) => (
                <SelectItem key={event.id} value={event.id.toString()}>
                  {event.name} ({new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.eventId && (
            <p className="text-red-500 text-xs mt-1">{errors.eventId.message}</p>
          )}
        </div>
      </div>

      {selectedEventDetails && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium text-[#214842] mb-2">Event Details</h4>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Location:</span> {selectedEventDetails.location}, {selectedEventDetails.city}, {selectedEventDetails.country}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Dates:</span> {new Date(selectedEventDetails.startDate).toLocaleDateString()} - {new Date(selectedEventDetails.endDate).toLocaleDateString()}
          </p>
          {selectedEventDetails.boothNumber && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Booth Number:</span> {selectedEventDetails.boothNumber}
            </p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Preferred Date */}
        <div className="space-y-2">
          <label htmlFor="preferredDate" className="text-sm font-medium text-gray-700">
            Preferred Meeting Date <span className="text-red-500">*</span>
          </label>
          <Input
            id="preferredDate"
            type="date"
            {...register('preferredDate')}
            className={errors.preferredDate ? 'border-red-300' : ''}
            min={selectedEventDetails?.startDate}
            max={selectedEventDetails?.endDate}
          />
          {errors.preferredDate && (
            <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>
          )}
        </div>

        {/* Preferred Time */}
        <div className="space-y-2">
          <label htmlFor="preferredTime" className="text-sm font-medium text-gray-700">
            Preferred Meeting Time <span className="text-red-500">*</span>
          </label>
          <Select onValueChange={(value) => setValue('preferredTime', value)}>
            <SelectTrigger className={errors.preferredTime ? 'border-red-300' : ''}>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9:00 AM">9:00 AM</SelectItem>
              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
              <SelectItem value="11:00 AM">11:00 AM</SelectItem>
              <SelectItem value="12:00 PM">12:00 PM</SelectItem>
              <SelectItem value="1:00 PM">1:00 PM</SelectItem>
              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
              <SelectItem value="3:00 PM">3:00 PM</SelectItem>
              <SelectItem value="4:00 PM">4:00 PM</SelectItem>
              <SelectItem value="5:00 PM">5:00 PM</SelectItem>
            </SelectContent>
          </Select>
          {errors.preferredTime && (
            <p className="text-red-500 text-xs mt-1">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Meeting Topics */}
      <div className="space-y-2">
        <label htmlFor="meetingTopics" className="text-sm font-medium text-gray-700">
          Meeting Topics <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="meetingTopics"
          {...register('meetingTopics')}
          placeholder="Please describe what you would like to discuss during the meeting."
          className={`min-h-[100px] ${errors.meetingTopics ? 'border-red-300' : ''}`}
        />
        {errors.meetingTopics && (
          <p className="text-red-500 text-xs mt-1">{errors.meetingTopics.message}</p>
        )}
      </div>

      {/* Additional Information */}
      <div className="space-y-2">
        <label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
          Additional Information
        </label>
        <Textarea
          id="additionalInfo"
          {...register('additionalInfo')}
          placeholder="Any additional information or special requests."
          className="min-h-[80px]"
        />
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="termsAccepted"
          onCheckedChange={(checked) => setValue('termsAccepted', checked as boolean)}
          className={errors.termsAccepted ? 'border-red-300' : ''}
        />
        <div className="space-y-1">
          <label
            htmlFor="termsAccepted"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the terms and conditions <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
          {errors.termsAccepted && (
            <p className="text-red-500 text-xs">{errors.termsAccepted.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-[#214842] hover:bg-[#1a3a35] text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        We'll review your request and contact you to confirm the meeting details.
        Please note that meeting slots are subject to availability.
      </p>
    </form>
  );
}
