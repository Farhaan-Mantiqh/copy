'use client';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import CommonModal, { FormSchemaType } from '../common/common-modal';
import { registerBusinessData } from '@/overallData/registerBusiness-constant';

const registerImg =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/modal/register-modal.png';
import { RegisterBusinessItem } from '@/types/registerBusiness-types';
import { toast } from 'sonner';
import { SubmitHandler } from 'react-hook-form';
import axios from 'axios';

export default function RegisterBusiness(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_FORM_BASE_URL;

  const modalConfig = {
    modalImage: registerImg,
    heading: 'Register Your Business Empowering an ecofriendly Future.',
    buttonText: 'Register',
  };

  const handleFormSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setIsLoading(true);

    const payload = {
      title: 'business-registration',
      email: data.email,
      name: data.name,
      location: data.location,
    };

    try {
      const response = await axios.post(
        `${baseURL}send-eco-store-email`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status >= 200 && response.status < 300) {
        setShouldResetForm(true);
        toast.success('Thank you! Your form has been submitted successfully.');
        setIsModalOpen(false);
        setTimeout(() => {
          setShouldResetForm(false);
        }, 300);
      }
    } catch (error) {
      console.error('Rate card submission error:', error);
      toast.error('Submission failed. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-[1440px]">
        <div className="px-4 pt-[72px] md:px-[5.556%]">
          <div className="flex flex-col items-center pt-8 md:pt-16">
            <h2 className="heading1 leading-8 md:leading-[3.9rem]">
              Unlock the
              <span className="text-ecocrewPrimary"> benefits </span>of
              registering your business with
              <span className="text-ecocrewPrimary"> ecocrew</span>
            </h2>
            <p className="conSection pt-3 text-center leading-5 text-darkLow md:pt-10 md:leading-8">
              Register your business today and join the movement towards making
              a positive impact on the planet!
            </p>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="insightsButton mt-4 w-fit cursor-pointer gap-1 md:mt-9 md:px-4 md:py-3 md:tracking-wider">
              Register Now
              <ChevronRight strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-commonGradient">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-4 py-10 md:px-[5.556%] xl:px-[11.5%]">
            <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg99:grid-cols-3 xl:gap-16">
              {registerBusinessData.map(
                (item: RegisterBusinessItem, index: number) => {
                  const Icon = item?.icon;
                  return (
                    <div
                      key={index}
                      className={`duration-400 group relative flex h-full min-h-[325px] cursor-pointer flex-col items-center justify-center rounded-[20px] border border-solid border-gainsboro bg-white transition-transform ease-in-out md:min-h-[370px] md:hover:scale-105 md:hover:bg-dark ${
                        index === 2
                          ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-1.25rem)] lg99:col-span-1 lg99:w-full'
                          : ''
                      }`}>
                      <div className="flex flex-col items-center justify-center gap-7 p-3">
                        <Icon />
                        <div>
                          <p className="text-center text-xl font-medium leading-[26px] text-dark md:group-hover:text-white">
                            {item?.title}
                          </p>
                          <p className="pt-3 text-center text-[14px] font-normal leading-[18px] text-darkLow md:hidden md:group-hover:block md:group-hover:text-white">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        modalImage={modalConfig.modalImage}
        heading={modalConfig.heading}
        buttonText={modalConfig.buttonText}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        isLoading={isLoading}
        shouldResetForm={shouldResetForm}
      />
    </>
  );
}
