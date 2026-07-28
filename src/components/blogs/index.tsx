'use client';
import {
  blogsCategories,
  blogsConstant,
  blogsData,
} from '@/overallData/blogs-constant';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Share2 } from 'lucide-react';
import Link from 'next/link';
import { BlogItem } from '@/types/blogs-types';
import LandingSection from '../common/landing-section';
import NoBlogs from './noBlogs';

export default function Blogs(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All blogs');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>(blogsData);
  const [shareOverlayOpen, setShareOverlayOpen] = useState<number | null>(null);

  useEffect(() => {
    setFilteredBlogs(
      selectedCategory === 'All blogs'
        ? blogsData
        : blogsData.filter(
            (blog) =>
              blog.category.toLowerCase() === selectedCategory.toLowerCase(),
          ),
    );
  }, [selectedCategory]);

  useEffect(() => {
    if (shareOverlayOpen !== null) {
      const handleClickOutside = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        if (
          !target.closest('.share-overlay') &&
          !target.closest('.share-button')
        ) {
          setShareOverlayOpen(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [shareOverlayOpen]);

  const handleShareClick = (index: number, event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    setShareOverlayOpen(shareOverlayOpen === index ? null : index);
  };

  const shareOnTwitter = (blog: BlogItem, event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const blogUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/blogs/${blog.title
            .toLowerCase()
            .replace(/[:\s]+/g, '-')
            .replace(/[^a-z0-9-]/g, '')}`
        : '';

    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      blogUrl,
    )}&text=${encodeURIComponent(blog.title)}`;

    window.open(twitterUrl, '_blank');
    setShareOverlayOpen(null);
  };

  const shareOnFacebook = (blog: BlogItem, event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const blogUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/blogs/${blog.title
            .toLowerCase()
            .replace(/[:\s]+/g, '-')
            .replace(/[^a-z0-9-]/g, '')}`
        : '';

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      blogUrl,
    )}`;

    window.open(facebookUrl, '_blank');
    setShareOverlayOpen(null);
  };

  const shareOnInstagram = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    window.open('https://www.instagram.com', '_blank');
    setShareOverlayOpen(null);
  };

  const handleResetCategory = (): void => {
    setSelectedCategory('All blogs');
  };

  return (
    <>
      <LandingSection
        title={blogsConstant?.title}
        images={blogsConstant?.images}
        text="blogs"
      />
      <div
        id="sectionToScroll"
        className="mx-auto max-w-[1440px] px-5 pb-4 pt-6 md:px-[5.556%] md:pb-12 md:pt-10">
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="borderBottom hideScrollBar w-full overflow-scroll !border-gainsboro pb-6 md:pb-9">
          <TabsList className="flex w-fit items-center justify-center gap-4 border-none bg-transparent md:gap-10 xl:w-full">
            {blogsCategories?.map((category: string) => (
              <TabsTrigger
                key={category}
                value={category}
                className="fontFamily cursor-pointer whitespace-nowrap rounded-full border-none bg-transparent px-4 py-2 text-xs font-normal leading-6 text-darkLow transition-all duration-500 ease-in-out data-[state=active]:bg-ecocrewPrimary data-[state=active]:text-white md:text-base">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredBlogs.length > 0 ? (
          <div className="grid h-full grid-cols-1 gap-5 pt-10 xs:grid-cols-2 md:grid-cols-3">
            {filteredBlogs?.map((item: BlogItem, index: number) => (
              <Link
                key={index}
                href={`/blogs/${item?.title
                  .toLowerCase()
                  .replace(/[:\s]+/g, '-')
                  .replace(/[^a-z0-9-]/g, '')}`}
                className="block h-full no-underline">
                <div className="flex h-full flex-col">
                  <div className="relative aspect-[11/10]">
                    <img
                      src={
                        typeof item?.imgSrc === 'string'
                          ? item?.imgSrc
                          : (item?.imgSrc as { src: string })?.src
                      }
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <Button
                      className="share-button absolute right-[5px] top-3 z-10 cursor-pointer rounded-full border-none bg-white p-[10px]"
                      onClick={(e) => handleShareClick(index, e)}>
                      <Share2
                        fill="black"
                        strokeWidth={1}
                        className="h-4 w-4"
                      />
                    </Button>

                    {shareOverlayOpen === index && (
                      <div
                        className="share-overlay absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShareOverlayOpen(null);
                        }}>
                        <div
                          className="flex items-center justify-center gap-6 p-4"
                          onClick={(e) => e.stopPropagation()}>
                          <Button
                            onClick={(e) => shareOnInstagram(e)}
                            className="cursor-pointer rounded-full border-none bg-white p-2">
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="#459F17"
                              stroke="#459F17"
                              strokeWidth={0}>
                              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                            </svg>
                          </Button>
                          <Button
                            onClick={(e) => shareOnTwitter(item, e)}
                            className="cursor-pointer rounded-full border-none bg-white p-2">
                            <svg
                              viewBox="0 0 512 512"
                              className="h-5 w-5"
                              fill="#459F17"
                              stroke="#459F17"
                              strokeWidth={0}>
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
                            </svg>
                          </Button>
                          <Button
                            onClick={(e) => shareOnFacebook(item, e)}
                            className="cursor-pointer rounded-full border-none bg-white p-2">
                            <svg
                              viewBox="0 0 24 24"
                              className="h-5 w-5"
                              fill="none"
                              stroke="#459F17"
                              strokeWidth={1.7}>
                              <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  {selectedCategory === 'All blogs' && (
                    <p className="mt-5 w-fit rounded-full border border-solid border-gainsboro p-[6px] text-center text-xs font-medium leading-4 text-ecocrewPrimary md:p-2 md:text-[14px] md:leading-[18px]">
                      {item?.category}
                    </p>
                  )}
                  <p
                    className={`truncate ${
                      selectedCategory !== 'All blogs' ? 'pt-5' : 'pt-3'
                    } text-[14px] font-medium leading-[18px] md:text-base md:leading-5`}>
                    {item?.title}
                  </p>

                  <p className="pt-2 text-xs font-medium leading-4 text-darkLow md:text-[14px] md:leading-[18px]">
                    {(
                      (item.contentSections?.find((s) => s.type === 'paragraph')
                        ?.content as string) || ''
                    )
                      .slice(0, 40)
                      .trim() + '…'}
                  </p>
                  <p className="pt-2 text-xs font-medium leading-[13px] text-darkLow md:leading-4">
                    {item?.time}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <NoBlogs onReset={handleResetCategory} />
          </div>
        )}
      </div>
    </>
  );
}
