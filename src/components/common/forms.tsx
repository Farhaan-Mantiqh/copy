'use client';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { FormTypes } from '@/types/form-types';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from '../ui/spinner';
import { toast } from 'sonner';

type Props = {
  data: FormTypes;
};

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .regex(/^[A-Za-z\s]+$/, 'Please enter a valid name '),

  number: z
    .string()
    .regex(/^[0-9]{10,15}$/, 'Please enter a valid contact number'),

  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .min(10, 'Minimum 10 characters required'),
});

const vendorFormSchema = z.object({
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters')
    .regex(
      /^(?=.*[A-Za-z])[A-Za-z0-9\s]+$/,
      'Business name must contain at least one letter and can contain numbers and spaces, but cannot be only numbers',
    ),
  businessContact: z
    .string()
    .regex(/^[0-9]{10,15}$/, 'Please enter a valid contact number'),

  city: z
    .string()
    .min(2, 'Please enter your city name')
    .regex(/^[A-Za-z\s]+$/, 'City should contain only letters'),

  state: z
    .string()
    .min(2, 'Please enter your state name')
    .regex(/^[A-Za-z\s]+$/, 'State should contain only letters'),

  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .min(10, 'Minimum 10 characters required'),
});

const pickupFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .regex(/^[A-Za-z\s]+$/, 'Please enter a valid name '),

  city: z
    .string()
    .min(2, 'Please enter your city name')
    .regex(/^[A-Za-z\s]+$/, 'City should contain only letters'),

  state: z
    .string()
    .min(2, 'Please enter your state name')
    .regex(/^[A-Za-z\s]+$/, 'State should contain only letters'),

  comments: z
    .string()
    .min(1, 'Comments cannot be empty')
    .min(10, 'Minimum 10 characters required'),
});

type ContactFormType = z.infer<typeof contactFormSchema>;
type VendorFormType = z.infer<typeof vendorFormSchema>;
type PickupFormType = z.infer<typeof pickupFormSchema>;

type ContactFormPayload = {
  title: string;
  email: string;
  name: string;
  phone: number;
  message: string;
};

type VendorFormPayload = {
  title: string;
  name: string;
  phone: number;
  city: string;
  state: string;
  message: string;
};

type PickupFormPayload = {
  title: string;
  name: string;
  city: string;
  state: string;
  message: string;
};

type FormPayload = ContactFormPayload | VendorFormPayload | PickupFormPayload;

export default function CommonForms({ data }: Props): JSX.Element {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_FORM_BASE_URL;

  const contactForm = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      number: '',
      email: '',
      message: '',
    },
  });

  const vendorForm = useForm<VendorFormType>({
    resolver: zodResolver(vendorFormSchema),
    defaultValues: {
      businessName: '',
      businessContact: '',
      city: '',
      state: '',
      message: '',
    },
  });

  const pickupForm = useForm<PickupFormType>({
    resolver: zodResolver(pickupFormSchema),
    defaultValues: {
      fullName: '',
      city: '',
      state: '',
      comments: '',
    },
  });

  const submitForm = async <T extends FormPayload>(
    formData: T,
    resetForm: () => void,
    e?: React.BaseSyntheticEvent,
  ): Promise<void> => {
    e?.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${baseURL}send-eco-store-email`,
        formData,
      );

      if (response.status >= 200 && response.status < 300) {
        resetForm();
        toast.success('Thank you! Your form has been submitted successfully.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(
        'Some information is missing. Please fill out all fields to continue.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (
    data: ContactFormType,
    e?: React.BaseSyntheticEvent,
  ): Promise<void> => {
    const contactPayload: ContactFormPayload = {
      title: 'get-in-touch',
      name: data.name,
      email: data.email,
      phone: parseInt(data.number) || 0,
      message: data.message || '',
    };

    await submitForm(contactPayload, contactForm.reset, e);
  };

  const handleVendorSubmit = async (
    data: VendorFormType,
    e?: React.BaseSyntheticEvent,
  ): Promise<void> => {
    const vendorPayload: VendorFormPayload = {
      title: 'eco-store-vendor-registration',
      name: data.businessName,
      phone: parseInt(data.businessContact) || 0,
      city: data.city,
      state: data.state,
      message: data.message || '',
    };

    await submitForm(vendorPayload, vendorForm.reset, e);
  };

  const handlePickupSubmit = async (
    data: PickupFormType,
    e?: React.BaseSyntheticEvent,
  ): Promise<void> => {
    const pickupPayload: PickupFormPayload = {
      title: 'executive-sign-up',
      name: data.fullName,
      city: data.city,
      state: data.state,
      message: data.comments || '',
    };

    await submitForm(pickupPayload, pickupForm.reset, e);
  };

  return (
    <section className="mx-auto max-w-screen-2xl pt-[72px]">
      <div className="grid px-5 pt-6 md:px-[5.556%] md:pt-10 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-3 pb-6 lg:hidden">
          <h2 className="recTitle">{data?.title}</h2>
          <p className="recDescription text-darkLow">{data?.description}</p>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
          <img
            src={
              typeof data?.image === 'string'
                ? data.image
                : (data?.image as { src: string })?.src || ''
            }
            alt={data?.title || 'Form background'}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute bottom-[50px] left-6 right-6">
            <h3 className="heading2 text-white">{data?.title}</h3>
            <p className="text-medium pt-3 !font-normal text-white">
              {data?.description}
            </p>
          </div>
        </div>
        <div className="formsGradient flex flex-col justify-between rounded-tl-[20px] rounded-tr-[20px] px-[22px] pb-6 pt-10 md:px-16 md:pt-16 lg:rounded-tl-none">
          {pathname === '/get-in-touch' && (
            <>
              <Form {...contactForm}>
                <form
                  onSubmit={(e) =>
                    void contactForm.handleSubmit(handleContactSubmit)(e)
                  }
                  className="flex flex-col items-center justify-center gap-5 border-b border-l-0 border-r-0 border-t-0 border-solid border-gainsboro">
                  <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            required
                            placeholder="Enter your full name"
                            className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            required
                            placeholder="Enter your contact number"
                            className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email"
                            className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Type your message"
                            className="fontFamily min-h-40 resize-none bg-white p-5"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="mb-10 w-full max-w-72 cursor-pointer rounded-full border-0 bg-buttonGradient text-center text-base font-normal">
                    {loading ? <Spinner /> : 'Send Message'}
                  </Button>
                </form>
              </Form>
              <p className="text-ecoStore text-center font-normal text-darkLow">
                Alternatively email us on{'   '}
                <span className="pl-1 text-dark">support@ecocrew.in</span>
              </p>
            </>
          )}
          {pathname === '/vendor-signup' && (
            <Form {...vendorForm}>
              <form
                onSubmit={(e) =>
                  void vendorForm.handleSubmit(handleVendorSubmit)(e)
                }
                className="flex flex-col items-center justify-center gap-5">
                <FormField
                  control={vendorForm.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your business name"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={vendorForm.control}
                  name="businessContact"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your business contact number"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={vendorForm.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="City"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={vendorForm.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="State"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={vendorForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Type your message"
                          className="fontFamily min-h-40 resize-none bg-white p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="mb-10 mt-3 w-full max-w-72 cursor-pointer rounded-full border-0 bg-buttonGradient text-center text-base font-normal">
                  {loading ? <Spinner /> : 'Send Message'}
                </Button>
              </form>
            </Form>
          )}
          {pathname === '/pickup-executive' && (
            <Form {...pickupForm}>
              <form
                onSubmit={(e) =>
                  void pickupForm.handleSubmit(handlePickupSubmit)(e)
                }
                className="flex flex-col items-center justify-center gap-5">
                <FormField
                  control={pickupForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          required
                          placeholder="Enter your full name"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={pickupForm.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          required
                          placeholder="City"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={pickupForm.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="State"
                          className="min-h-[60px] border border-solid border-gainsboro bg-white !p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={pickupForm.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Any additional comments"
                          className="fontFamily min-h-40 resize-none bg-white p-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="mb-10 mt-3 w-full max-w-72 cursor-pointer rounded-full border-0 bg-buttonGradient text-center text-base font-normal">
                  {loading ? <Spinner /> : 'Send Message'}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
