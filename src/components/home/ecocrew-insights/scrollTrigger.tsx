'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RateCardScroll from './rate-card/rateCardScroll';
import OfferForYouScroll from './offer-for-you/offerForYouScroll';
import RateCardPinned from './rate-card/rateCardPinned';
import OfferForYouPinned from './offer-for-you/offerForYouPinned';
import EcoMapScroll from './eco-maps/ecoMapScroll';
import EcoMapPinned from './eco-maps/ecoMapPinned';
import BusinessScroll from './register-business/businessScroll';
import BusinessPinned from './register-business/businessPinned';
import ImpactScroll from './eco-impact/impactScroll';
import ImpactPinned from './eco-impact/impactPinned';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from '@/hooks/useDevice';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CombinedSections(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const rightContent1Ref = useRef<HTMLDivElement>(null);
  const rightContent2Ref = useRef<HTMLDivElement>(null);
  const rightContent3Ref = useRef<HTMLDivElement>(null);
  const rightContent4Ref = useRef<HTMLDivElement>(null);
  const rightContent5Ref = useRef<HTMLDivElement>(null);

  // const isTablet = useMediaQuery('(min-width: 992px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  useGSAP(() => {
    if (isTablet) {
      const sections = gsap.utils.toArray<HTMLElement>('.scroll-section');
      const rightContents = gsap.utils.toArray<HTMLElement>('.pinned-content');
      rightContents.forEach((content, i) => {
        if (i === 0) {
          gsap.set(content, { opacity: 1, y: 0, display: 'flex' });
        } else {
          gsap.set(content, { opacity: 0, y: 20, display: 'none' });
        }
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: rightColumnRef.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 30%',
          end: 'bottom 70%',
          onEnter: () => updateRightContent(i),
          onEnterBack: () => updateRightContent(i),
          markers: false,
        });
      });

      const updateRightContent = (index: number): void => {
        rightContents.forEach((content, i) => {
          if (i === index) {
            gsap.to(content, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              display: 'flex',
            });
          } else {
            gsap.to(content, {
              opacity: 0,
              y: 20,
              duration: 0.3,
              display: 'none',
              delay: 0.2,
            });
          }
        });
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isTablet]);

  if (!isTablet) {
    return (
      <div className="mobile-combined-container">
        <div className="mobile-section">
          <div className="px-5">
            <RateCardScroll
              section1Ref={section1Ref}
              scrollSectionClass="mobile-scroll-section"
            />
          </div>
          <RateCardPinned
            rightContent1Ref={rightContent1Ref}
            pinnedSectionClass="mobile-pinned-content"
          />
        </div>

        <div className="mobile-section">
          <div className="px-5">
            <OfferForYouScroll
              section2Ref={section2Ref}
              scrollSectionClass="mobile-scroll-section"
            />
          </div>
          <OfferForYouPinned
            rightContent2Ref={rightContent2Ref}
            pinnedSectionClass="mobile-pinned-content"
          />
        </div>

        <div className="mobile-section">
          <div className="px-5">
            <EcoMapScroll
              section3Ref={section3Ref}
              scrollSectionClass="mobile-scroll-section"
            />
          </div>
          <EcoMapPinned
            rightContent3Ref={rightContent3Ref}
            pinnedSectionClass="mobile-pinned-content"
          />
        </div>

        <div className="mobile-section">
          <div className="px-5">
            <BusinessScroll
              section4Ref={section4Ref}
              scrollSectionClass="mobile-scroll-section"
            />
          </div>
          <div className="border-1 flex justify-center">
            <BusinessPinned
              rightContent4Ref={rightContent4Ref}
              pinnedSectionClass="mobile-pinned-content"
            />
          </div>
        </div>

        <div className="mobile-section">
          <div className="px-5">
            <ImpactScroll
              section5Ref={section5Ref}
              scrollSectionClass="mobile-scroll-section"
            />
          </div>
          <ImpactPinned
            rightContent5Ref={rightContent5Ref}
            pinnedSectionClass="mobile-pinned-content"
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="combined-container">
      <div ref={leftColumnRef} className="left-column">
        <RateCardScroll
          section1Ref={section1Ref}
          scrollSectionClass="scroll-section"
        />
        <OfferForYouScroll
          section2Ref={section2Ref}
          scrollSectionClass="scroll-section"
        />
        <EcoMapScroll
          section3Ref={section3Ref}
          scrollSectionClass="scroll-section"
        />
        <BusinessScroll
          section4Ref={section4Ref}
          scrollSectionClass="scroll-section"
        />
        <ImpactScroll
          section5Ref={section5Ref}
          scrollSectionClass="scroll-section"
        />
      </div>
      <div ref={rightColumnRef} className="right-column">
        <RateCardPinned
          rightContent1Ref={rightContent1Ref}
          pinnedSectionClass="pinned-content"
        />
        <OfferForYouPinned
          rightContent2Ref={rightContent2Ref}
          pinnedSectionClass="pinned-content"
        />
        <EcoMapPinned
          rightContent3Ref={rightContent3Ref}
          pinnedSectionClass="pinned-content"
        />
        <BusinessPinned
          rightContent4Ref={rightContent4Ref}
          pinnedSectionClass="pinned-content"
        />
        <ImpactPinned
          rightContent5Ref={rightContent5Ref}
          pinnedSectionClass="pinned-content"
        />
      </div>
    </div>
  );
}
