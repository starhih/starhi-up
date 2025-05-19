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
import { productCategories } from '@/src/data';
import { handleError, logError } from '@/utils/error-handling';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number' }),
  country: z.string().min(2, { message: 'Please select your country' }),
  productCategory: z.string().min(1, { message: 'Please select a product category' }),
  productDetails: z.string().min(10, { message: 'Please provide more details about your requirements' }),
  quantity: z.string().min(1, { message: 'Please specify the quantity needed' }),
  timeframe: z.string().min(1, { message: 'Please specify your timeframe' }),
  additionalInfo: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, { message: 'You must accept the terms and conditions' }),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      productCategory: '',
      productDetails: '',
      quantity: '',
      timeframe: '',
      additionalInfo: '',
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Import the email service dynamically to avoid SSR issues
      const { sendQuoteRequestEmail } = await import('@/lib/email-service');

      // Send the email
      const result = await sendQuoteRequestEmail(data);

      if (result.success) {
        // Success
        setSubmitSuccess(true);
        reset();

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
      logError(error, 'RequestQuoteForm');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success message */}
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          <p>Thank you for your request! Our team will contact you shortly with a customized quote.</p>
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
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john.doe@example.com"
            className={errors.email ? 'border-red-300' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

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

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
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

        {/* Country */}
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-gray-700">
            Country <span className="text-red-500">*</span>
          </label>
          <Input
            id="country"
            {...register('country')}
            placeholder="United States"
            className={errors.country ? 'border-red-300' : ''}
          />
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
          )}
        </div>

        {/* Product Category */}
        <div className="space-y-2">
          <label htmlFor="productCategory" className="text-sm font-medium text-gray-700">
            Product Category <span className="text-red-500">*</span>
          </label>
          <Select
            onValueChange={(value) => setValue('productCategory', value)}
            defaultValue=""
          >
            <SelectTrigger className={errors.productCategory ? 'border-red-300' : ''}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {productCategories.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.productCategory && (
            <p className="text-red-500 text-xs mt-1">{errors.productCategory.message}</p>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-2">
        <label htmlFor="productDetails" className="text-sm font-medium text-gray-700">
          Product Details <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="productDetails"
          {...register('productDetails')}
          placeholder="Please specify the products you're interested in, including any specific requirements (e.g., standardization, certifications)."
          className={`min-h-[100px] ${errors.productDetails ? 'border-red-300' : ''}`}
        />
        {errors.productDetails && (
          <p className="text-red-500 text-xs mt-1">{errors.productDetails.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Quantity */}
        <div className="space-y-2">
          <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
            Estimated Quantity <span className="text-red-500">*</span>
          </label>
          <Input
            id="quantity"
            {...register('quantity')}
            placeholder="e.g., 100 kg, 500 units"
            className={errors.quantity ? 'border-red-300' : ''}
          />
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
          )}
        </div>

        {/* Timeframe */}
        <div className="space-y-2">
          <label htmlFor="timeframe" className="text-sm font-medium text-gray-700">
            Timeframe <span className="text-red-500">*</span>
          </label>
          <Select
            onValueChange={(value) => setValue('timeframe', value)}
            defaultValue=""
          >
            <SelectTrigger className={errors.timeframe ? 'border-red-300' : ''}>
              <SelectValue placeholder="Select a timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
              <SelectItem value="short">Short-term (1-2 months)</SelectItem>
              <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
              <SelectItem value="long">Long-term (6+ months)</SelectItem>
            </SelectContent>
          </Select>
          {errors.timeframe && (
            <p className="text-red-500 text-xs mt-1">{errors.timeframe.message}</p>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-2">
        <label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
          Additional Information
        </label>
        <Textarea
          id="additionalInfo"
          {...register('additionalInfo')}
          placeholder="Any other details that might help us prepare your quote (optional)."
          className="min-h-[100px]"
        />
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="termsAccepted"
          onCheckedChange={(checked) => setValue('termsAccepted', checked as boolean)}
          className={errors.termsAccepted ? 'border-red-300' : ''}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="termsAccepted"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the terms and conditions <span className="text-red-500">*</span>
          </label>
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
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
        We'll use your information to process your request and contact you about our products.
      </p>
    </form>
  );
}
