'use client';
import type { StaticImageData } from 'next/image';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import NavigationButtons from '../common/navigation-button';
import { Button } from '../ui/button';
import { blogsData } from '@/overallData/blogs-constant';
import { useMediaQuery } from '@/hooks/useDevice';

interface BlogContentSection {
  type: 'paragraph' | 'heading' | 'image' | 'bulletList';
  content?: string | string[];
}

interface BlogItemProps {
  title: string;
  imgSrc: string | StaticImageData;
  category: string;
  time?: string;
  contentSections?: BlogContentSection[];
  shortDescription?: string;
}

interface BlogDetailPageProps {
  blog: BlogItemProps;
}

export default function BlogInner({ blog }: BlogDetailPageProps): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [activeSlideGroup, setActiveSlideGroup] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  useEffect(() => setIsClient(true), []);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const filteredBlogs = blogsData.filter((item) => item.title !== blog.title);
  const totalItems = filteredBlogs.length;

  const getNumberOfSlides = (): number => Math.ceil(totalItems / itemsPerPage);

  interface ShareData {
    url: string;
    title: string;
    text: string;
    image: string;
  }

  const getShareData = (): ShareData => {
    const title = blog.title ?? '';
    const allContent: string =
      blog.contentSections
        ?.map((section) => {
          if (!section?.content) return '';
          return typeof section.content === 'string'
            ? section.content
            : Array.isArray(section.content)
              ? section.content.join(' ')
              : '';
        })
        .join(' ') ?? '';
    const description = allContent.split(' ').slice(0, 15).join(' ') + '…';

    const fullText = `${title}\n${description}`;

    return {
      url: currentUrl,
      title,
      text: fullText,
      image: typeof blog.imgSrc === 'string' ? blog.imgSrc : '', // pass image URL
    };
  };

  const shareBlog = async (): Promise<void> => {
    const { url, text, image } = getShareData();

    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text,
          url,
        });
      } catch (err) {
        console.error('Share failed:', err);
        toast.error('Sharing failed');
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${text}\n${url}\n${image}`);
        toast.success('Link copied');
      } catch {
        toast.success(`Copy this link: ${url}`);
      }
    }
  };

  const copyLink = async (): Promise<void> => {
    const { url } = getShareData();
    try {
      await navigator.clipboard.writeText(`${url}`);
      toast.success('Blog link copied!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to copy link');
    }
  };

  const shareOnTwitter = (): void => {
    const { url, title, text } = getShareData();
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=${encodeURIComponent(title + ' - ' + text)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnFacebook = (): void => {
    const { url, title, text } = getShareData();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}&quote=${encodeURIComponent(title + ' - ' + text)}`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnInstagram = async (): Promise<void> => {
    const { url, title, text } = getShareData();

    const cleanText = text.replace(title, '').trim();

    const shareMessage = `${title}\n${cleanText}\n${url}`;

    try {
      await navigator.clipboard.writeText(shareMessage);

      toast.success('Link copied — paste into Instagram story or DM.');
      window.open('https://www.instagram.com', '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error(err);
      toast.error('Failed to copy link for Instagram');
    }
  };

  useEffect(() => {
    const newItemsPerPage = isMediumScreen ? 2 : 1;
    setItemsPerPage((prev) => {
      if (newItemsPerPage !== prev && api) {
        api.scrollTo(0);
        setCurrent(0);
        setActiveSlideGroup(0);
      }
      return newItemsPerPage;
    });
  }, [api, isMediumScreen]);

  const handleNavigation = (direction: 'prev' | 'next'): void => {
    if (!api) return;
    const totalGroups = getNumberOfSlides();
    let newActiveGroup = activeSlideGroup;

    if (direction === 'prev')
      newActiveGroup = Math.max(0, activeSlideGroup - 1);
    else newActiveGroup = Math.min(totalGroups - 1, activeSlideGroup + 1);

    const targetPosition = newActiveGroup * itemsPerPage;
    setActiveSlideGroup(newActiveGroup);
    setCurrent(targetPosition);
    api.scrollTo(targetPosition);
  };

  const renderContentSections = (): React.ReactNode => {
    if (!blog.contentSections) return null;

    return blog.contentSections.map((section, idx) => {
      const contentText: string =
        typeof section.content === 'string'
          ? section.content
          : Array.isArray(section.content)
            ? section.content.join('\n')
            : '';

      switch (section.type) {
        case 'paragraph':
          return (
            <p
              key={idx}
              className="pt-4 text-base leading-6 md:text-lg md:leading-7">
              {contentText}
            </p>
          );
        case 'heading':
          return (
            <h3 key={idx} className="pt-6 text-xl font-semibold md:text-2xl">
              {contentText}
            </h3>
          );
        case 'image':
          // Only use string content for image src
          return typeof section.content === 'string' ? (
            <img
              src={
                typeof section.content === 'string'
                  ? section.content
                  : (section.content as { src: string })?.src
              }
              alt={blog.title}
              className="my-4 object-cover"
              key={idx}
              width={800}
              height={600}
            />
          ) : null;
        case 'bulletList':
          return (
            <ul key={idx} className="list-disc pl-5 pt-4">
              {Array.isArray(section.content) ? (
                section.content.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                <li>{contentText}</li>
              )}
            </ul>
          );
        default:
          return <p key={idx}>{contentText}</p>;
      }
    });
  };

  return (
    <div className="pt-[76px]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-[20.5%]">
        <div className="flex items-center justify-between pt-6 md:pt-20">
          <div className="flex items-center gap-3">
            <span
              className="text-ecoStore rounded-full border border-solid border-gainsboro px-[10px] py-2 font-medium text-ecocrewPrimary"
              aria-hidden>
              {blog.category ?? 'Blog'}
            </span>
            <p className="text-xs text-darkLow md:text-sm">{blog.time ?? ''}</p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => void shareOnInstagram()}
              aria-label="Share on Instagram"
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#459F17">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
              </svg>
            </Button>

            <Button
              onClick={() => void shareOnTwitter()}
              aria-label="Share on Twitter"
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
              <svg viewBox="0 0 512 512" className="h-6 w-6" fill="#459F17">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
              </svg>
            </Button>

            <Button
              onClick={shareOnFacebook}
              aria-label="Share on Facebook"
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="#459F17"
                strokeWidth={1.7}>
                <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Button>

            <Button
              onClick={() => {
                void copyLink();
              }}
              aria-label="Copy link"
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 1H4C2.89543 1 2 1.89543 2 3V15H4V3H16V1Z"
                  fill="#459F17"
                />
                <path
                  d="M20 5H8C6.89543 5 6 5.89543 6 7V21C6 22.1046 6.89543 23 8 23H20C21.1046 23 22 22.1046 22 21V7C22 5.89543 21.1046 5 20 5ZM20 21H8V7H20V21Z"
                  fill="#28a745"
                />
              </svg>
            </Button>

            <Button
              onClick={() => void shareBlog()}
              aria-label="Share"
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-6 w-6 fill-[#459f17]">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M23,3c-2.20914,0 -4,1.79086 -4,4c0.00178,0.28117 0.03321,0.56136 0.09375,0.83594l-9.08203,4.54102c-0.75785,-0.87251 -1.85604,-1.3746 -3.01172,-1.37695c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c1.15606,-0.0013 2.25501,-0.5027 3.01367,-1.375l9.07617,4.53906c-0.05923,0.27472 -0.08934,0.55491 -0.08984,0.83594c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4c-1.15606,0.0013 -2.25501,0.5027 -3.01367,1.375l-9.07617,-4.53906c0.05923,-0.27472 0.08934,-0.55491 0.08984,-0.83594c-0.00192,-0.28051 -0.03334,-0.56005 -0.09375,-0.83398l9.08203,-4.54102c0.75821,0.87178 1.85635,1.37313 3.01172,1.375c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z" />
                </g>
              </svg>
            </Button>
          </div>
        </div>

        <h2 className="recTitle pt-4 !font-semibold leading-8 md:pt-8 md:leading-[3.25rem]">
          {blog.title}
        </h2>

        <div className="grid grid-cols-1 pt-5 md:pt-10">
          <img
            src={
              typeof blog.imgSrc === 'string'
                ? blog.imgSrc
                : (blog.imgSrc as { src: string })?.src
            }
            alt={blog.title}
            className="aspect-[9/8] h-full w-full object-cover md:aspect-[7/5]"
            width={800}
            height={800}
          />

          {isClient && <div className="my-6">{renderContentSections()}</div>}

          <div className="flex flex-col pt-6 md:pt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-large leading-5 md:leading-[26px]">
                Similar Blogs
              </h3>
              <div className="hidden lg:block">
                <NavigationButtons
                  index={current}
                  count={totalItems}
                  loop={false}
                  isLastSlide={(index, count) => index + itemsPerPage >= count}
                  onPrevClick={() => handleNavigation('prev')}
                  onNextClick={() => handleNavigation('next')}
                />
              </div>
            </div>

            <Carousel
              className="w-full pt-5"
              setApi={setApi}
              opts={{ align: 'start', loop: false }}>
              <CarouselContent>
                {filteredBlogs.map((item) => (
                  <CarouselItem
                    key={item.title}
                    className="!shrink-0 !grow-0 basis-[80%] sm:basis-[45%] md:basis-[45%] lg:basis-1/2">
                    <Link
                      href={`/blogs/${item.title
                        .toLowerCase()
                        .replace(/[:\s]+/g, '-')
                        .replace(/[^a-z0-9-]/g, '')}`}>
                      <div className="overflow-hidden">
                        <div className="relative aspect-[9/8] w-full md:aspect-[19/10]">
                          <img
                            src={
                              typeof item.imgSrc === 'string'
                                ? item.imgSrc
                                : (item.imgSrc as { src: string })?.src
                            }
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        <p className="mt-3 w-full max-w-[100px] rounded-full border border-solid border-gainsboro p-[6px] text-center text-xs font-medium leading-4 text-ecocrewPrimary md:mt-4">
                          {item.category}
                        </p>
                        <p className="pt-2 text-[14px] font-medium leading-[18px]">
                          {item.title}
                        </p>
                        <p className="pt-2 text-xs font-medium leading-3 text-darkLow">
                          {item.time ?? ''}
                        </p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
