'use client';
import { Dialog, DialogContent } from '../ui/dialog';
import { X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const logo =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo.png';
const app =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/footer/apple_store_icon.png';
const play =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/footer/play_store_icon.png';
const qrCode =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/modal/qr_code1.png';

interface DownloadModalProps {
  modalImage: { src: string } | string;
  heading: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({
  modalImage,
  heading,
  isOpen,
  onClose,
}: DownloadModalProps): JSX.Element {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="commonModalBg grid w-full max-w-[95%] grid-cols-1 gap-0 p-0 md:grid-cols-2 lg99:max-w-[950px]">
        <div className="relative hidden h-full max-h-[439px] md:block">
          <img
            src={
              typeof modalImage === 'string'
                ? modalImage
                : (modalImage as { src: string })?.src
            }
            alt=""
            className="absolute inset-0 h-full w-full rounded-l-[10px] object-cover"
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
        <div className="flex flex-col items-center justify-center p-10">
          <Button
            onClick={onClose}
            className="absolute right-5 top-5 cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent">
            <X strokeWidth={1} />
          </Button>
          <p className="font-medium leading-5 md:text-base">Download the App</p>
          <p className="pb-5 pt-2 text-xs font-normal leading-4 text-darkLow md:text-[14px] md:leading-[18px]">
            Get the app and check our rate card easily
          </p>
          <img
            src={
              typeof qrCode === 'string'
                ? qrCode
                : (qrCode as { src: string })?.src
            }
            alt=""
            className="h-full max-h-[125px] w-full max-w-[125px]"
            width={125}
            height={125}
          />
          <div className="flex gap-3 pt-5">
            <Link
              href="https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969"
              className="h-full max-h-[43px]"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={
                  typeof app === 'string' ? app : (app as { src: string })?.src
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
