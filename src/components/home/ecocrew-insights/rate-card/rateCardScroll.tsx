// components/RateCardScroll.tsx
'use client';

import { useState } from 'react';
import CommonModal, { FormSchemaType } from '@/components/common/common-modal';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import rateModImg from '@/img/modal/rate-modal.png';
import axios from 'axios';
import { toast } from 'sonner';
import type { SubmitHandler } from 'react-hook-form';

interface RateCardScrollProps {
  section1Ref: React.RefObject<HTMLDivElement>;
  scrollSectionClass: string;
}

const RateCardScroll: React.FC<RateCardScrollProps> = ({
  section1Ref,
  scrollSectionClass,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_FORM_BASE_URL;

  const modalConfig = {
    modalImage: rateModImg,
    heading: 'Unlock clear and affordable pricing, get our rate card.',
    buttonText: 'Get our rate card',
  };

  const handleFormSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setIsLoading(true);

    const payload = {
      email: data.email,
      name: data.name,
      location: data.location,
    };

    try {
      const response = await axios.post(`${baseURL}rate-card-email`, payload);

      if (response.status >= 200 && response.status < 300) {
        setShouldResetForm(true);
        toast.success('Thank you! Your rate card request has been submitted.');
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
    <div ref={section1Ref} className={scrollSectionClass}>
      <div className="borderLeft md:pl-7 md:pr-7 lg:pl-10 lg:pr-7">
        <p className="conSection pt-5 !font-medium leading-4 tracking-wider text-darkLow md:leading-[20px] lg:pt-0 lg:leading-[30px]">
          RATE CARD
        </p>

        <h2 className="main-heading pb-4 pt-4 leading-9 sm:leading-[4rem] md:pb-10 md:pt-6 md:leading-[4.2rem] lg:pb-12 lg:pt-8 lg:leading-[5.2rem]">
          <span className="text-ecocrewPrimary">Transparent</span>
          <span className="inline sm:block"> pricing for</span> a sustainable
          <span className="inline sm:block"> future</span>
        </h2>

        <Button
          variant="outline"
          onClick={() => setIsModalOpen(true)}
          className="insightsButton mb-4 max-w-[180px] cursor-pointer gap-0 lg99:max-w-[250px] lg99:gap-1 lg:px-4 lg:py-3 lg:tracking-wider">
          Get our rate card
          <ChevronRight
            strokeWidth={1}
            className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
          />
        </Button>
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
    </div>
  );
};

export default RateCardScroll;
