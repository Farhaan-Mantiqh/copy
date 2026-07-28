'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent } from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { ChevronLeft, X } from 'lucide-react';
import Link from 'next/link';

const logo =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo.png';
const app =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/footer/apple_store_icon.png';
const play =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/footer/play_store_icon.png';
const qrCode =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/modal/qr_code1.png';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Spinner } from '../ui/spinner';

export const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
});

export type FormSchemaType = z.infer<typeof formSchema>;

interface CommonModalProps {
  modalImage: StaticImageData | string;
  heading: string;
  buttonText: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<FormSchemaType>;
  isLoading?: boolean;
  shouldResetForm?: boolean;
}

export default function CommonModal({
  modalImage,
  heading,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
  shouldResetForm = false,
}: CommonModalProps): JSX.Element {
  const [showFullForm, setShowFullForm] = useState(false);
  const [previousShouldReset, setPreviousShouldReset] =
    useState(shouldResetForm);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', name: '', location: '' },
  });

  useEffect(() => {
    if (shouldResetForm && !previousShouldReset) {
      form.reset();
      setShowFullForm(false);
      setPreviousShouldReset(true);
    } else if (!shouldResetForm && previousShouldReset) {
      setPreviousShouldReset(false);
    }
  }, [shouldResetForm, previousShouldReset, form]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="commonModalBg grid h-full max-h-[385px] w-full max-w-[95%] grid-cols-1 gap-0 p-0 md:max-h-[439px] md:grid-cols-2 lg99:max-w-[950px]">
        <div className="relative hidden h-full max-h-[439px] overflow-hidden rounded-l-[6px] md:block">
          <img
            src={
              typeof modalImage === 'string'
                ? modalImage
                : (modalImage as { src: string })?.src
            }
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex h-full w-full flex-col justify-between bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 md:pb-[60px]">
            <img
              src={
                typeof logo === 'string' ? logo : (logo as { src: string })?.src
              }
              alt="Logo"
              className="h-full max-h-[43px] max-w-[113px]"
              width={113}
              height={43}
            />
            <p className="text-large text-white">{heading}</p>
          </div>
        </div>

        <div
          className={`relative flex flex-col items-center p-10 ${
            showFullForm ? 'justify-center' : ''
          }`}>
          <Button
            onClick={onClose}
            className="absolute right-5 top-5 cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
            <X strokeWidth={1} />
          </Button>

          {showFullForm && (
            <Button
              className="absolute left-5 top-5 border-none bg-transparent p-0 shadow-none hover:bg-transparent"
              onClick={() => setShowFullForm(false)}>
              <ChevronLeft className="h-6 w-6" strokeWidth={1} />
            </Button>
          )}

          {!showFullForm && (
            <div className="flex flex-col items-center transition-all duration-700 ease-in-out">
              <p className="font-medium leading-5 md:text-base">
                Download The App
              </p>
              <p className="pb-3 pt-2 text-xs font-normal leading-4 text-darkLow md:text-[14px] md:leading-[18px]">
                Get the app and check our Rate card easily
              </p>
              <img
                src={
                  typeof qrCode === 'string'
                    ? qrCode
                    : (qrCode as { src: string })?.src
                }
                alt=""
                className="hidden h-full max-h-[93px] w-full max-w-[93px] md:block"
                width={93}
                height={93}
              />
              <div className="flex gap-3 pt-3">
                <Link
                  href="https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969"
                  className="h-full max-h-[43px]"
                  rel="noopener noreferrer"
                  target="_blank">
                  <img
                    src={
                      typeof app === 'string'
                        ? app
                        : (app as { src: string })?.src
                    }
                    alt="App Store"
                    className="h-full w-full max-w-[135px]"
                    width={135}
                    height={43}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN"
                  className="h-full max-h-[43px]"
                  rel="noopener noreferrer"
                  target="_blank">
                  <img
                    src={
                      typeof play === 'string'
                        ? play
                        : (play as { src: string })?.src
                    }
                    alt="Play Store"
                    className="h-full w-full max-w-[135px]"
                    width={135}
                    height={43}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center pt-2">
                <div className="h-[1px] w-[126px] bg-darkLow"></div>
                <span className="px-4 text-[14px] leading-[18px] text-darkLow">
                  or
                </span>
                <div className="h-[1px] w-[126px] bg-darkLow"></div>
              </div>
            </div>
          )}

          <div
            className={`w-full max-w-[290px] transition-all duration-500 ease-in-out ${
              showFullForm ? 'translate-y-0' : 'translate-y-4'
            }`}>
            <Form {...form}>
              <form
                onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
                className={`${showFullForm ? 'space-y-6' : 'space-y-4'}`}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className="border border-solid border-gainsboro bg-white"
                          onFocus={() => !showFullForm && setShowFullForm(true)}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {showFullForm && (
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              className="border border-solid border-gainsboro"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your location"
                              className="border border-solid border-gainsboro"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="fontFamily w-full cursor-pointer rounded-full border-none bg-buttonGradient py-3 text-base font-normal leading-6 tracking-wide">
                  {isLoading ? <Spinner /> : buttonText}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
