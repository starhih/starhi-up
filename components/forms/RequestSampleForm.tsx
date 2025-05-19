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
import { productCategories, products } from '@/src/data';
import { handleError, logError } from '@/utils/error-handling';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters' }),
  jobTitle: z.string().min(2, { message: 'Job title must be at least 2 characters' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number' }),
  address: z.string().min(10, { message: 'Please enter your complete address' }),
  city: z.string().min(2, { message: 'Please enter your city' }),
  country: z.string().min(2, { message: 'Please enter your country' }),
  productCategory: z.string().min(1, { message: 'Please select a product category' }),
  sampleDetails: z.string().min(10, { message: 'Please provide more details about the samples you need' }),
  intendedUse: z.string().min(10, { message: 'Please describe how you intend to use the samples' }),
  termsAccepted: z.boolean().refine(val => val === true, { message: 'You must accept the terms and conditions' }),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestSampleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

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
      jobTitle: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      productCategory: '',
      sampleDetails: '',
      intendedUse: '',
      termsAccepted: false,
    },
  });

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setValue('productCategory', value);

    // Filter products by category
    if (value) {
      const filtered = products.filter(product => product.categorySlug === value);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Import the email service dynamically to avoid SSR issues
      const { sendSampleRequestEmail } = await import('@/lib/email-service');

      // Send the email
      const result = await sendSampleRequestEmail(data);

      if (result.success) {
        // Success
        setSubmitSuccess(true);
        reset();
        setSelectedCategory('');
        setFilteredProducts([]);

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
      logError(error, 'RequestSampleForm');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success message */}
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          <p>Thank you for your sample request! Our team will review your request and contact you shortly.</p>
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
      </div>

      {/* Shipping Address */}
      <div className="space-y-2">
        <label htmlFor="address" className="text-sm font-medium text-gray-700">
          Shipping Address <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="address"
          {...register('address')}
          placeholder="Street address, apartment, suite, etc."
          className={`min-h-[80px] ${errors.address ? 'border-red-300' : ''}`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* City */}
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </label>
          <Input
            id="city"
            {...register('city')}
            placeholder="New York"
            className={errors.city ? 'border-red-300' : ''}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
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
      </div>

      {/* Product Category */}
      <div className="space-y-2">
        <label htmlFor="productCategory" className="text-sm font-medium text-gray-700">
          Product Category <span className="text-red-500">*</span>
        </label>
        <Select
          onValueChange={handleCategoryChange}
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

      {/* Product List (if category is selected) */}
      {selectedCategory && filteredProducts.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Available Products in This Category
          </label>
          <div className="bg-gray-50 p-3 rounded-md text-sm">
            <ul className="grid grid-cols-2 gap-2">
              {filteredProducts.map((product) => (
                <li key={product.id} className="flex items-center">
                  <span className="w-2 h-2 bg-[#258F67] rounded-full mr-2"></span>
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500">
            You can request any of these products in the Sample Details field below.
          </p>
        </div>
      )}

      {/* Sample Details */}
      <div className="space-y-2">
        <label htmlFor="sampleDetails" className="text-sm font-medium text-gray-700">
          Sample Details <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="sampleDetails"
          {...register('sampleDetails')}
          placeholder="Please specify which products you'd like to sample, including any specific requirements (e.g., standardization, certifications)."
          className={`min-h-[100px] ${errors.sampleDetails ? 'border-red-300' : ''}`}
        />
        {errors.sampleDetails && (
          <p className="text-red-500 text-xs mt-1">{errors.sampleDetails.message}</p>
        )}
      </div>

      {/* Intended Use */}
      <div className="space-y-2">
        <label htmlFor="intendedUse" className="text-sm font-medium text-gray-700">
          Intended Use <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="intendedUse"
          {...register('intendedUse')}
          placeholder="Please describe how you intend to use these samples (e.g., product development, quality testing)."
          className={`min-h-[100px] ${errors.intendedUse ? 'border-red-300' : ''}`}
        />
        {errors.intendedUse && (
          <p className="text-red-500 text-xs mt-1">{errors.intendedUse.message}</p>
        )}
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
        {isSubmitting ? 'Submitting...' : 'Submit Sample Request'}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
        We'll use your information to process your sample request and contact you about our products.
      </p>
    </form>
  );
}
