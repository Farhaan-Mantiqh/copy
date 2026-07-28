'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { navLinks } from '@/overallData/navbar-constant';
import { NavbarLinkType } from '@/types/navbar-types';
import { usePathname } from 'next/navigation';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@/hooks/useDevice';

const logo =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo1.png';
gsap.registerPlugin(ScrollTrigger);

export default function Navbar(): JSX.Element {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const shouldShowBorder = isAtTop ? isLargeScreen || pathname !== '/' : false;

  const notHighlightingPages = [
    '/privacy-policy',
    '/terms-of-use',
    '/terms-and-condition',
    '/vendor-signup',
    '/pickup-executive',
    '/register-business',
  ];
  const getActiveNavFromPath = (currentPath: string): string => {
    if (currentPath === '/') return 'home';

    const nonHomeNavLinks = navLinks.filter((link) => link.path !== '/');
    const activeLink = nonHomeNavLinks.find((link) =>
      currentPath.startsWith(link.path),
    );
    return activeLink?.id || 'home';
  };

  const [navActive, setNavActive] = useState<string>(
    getActiveNavFromPath(pathname),
  );

  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  useEffect(() => {
    setNavActive(getActiveNavFromPath(pathname));
  }, [pathname]);

  const handleNavClick = (id: string): void => {
    setNavActive(id);
    setIsSheetOpen(false);
  };

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { yPercent: 0 });
    }

    const showAnim = gsap.to(navRef.current, {
      yPercent: -100,
      duration: 0.4,
      ease: 'power2.inOut',
      paused: true,
    });

    const handleScroll = (): void => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollTop;
      const scrollDelta = Math.abs(currentScroll - lastScrollTop);

      setIsAtTop(currentScroll === 0);
      setIsScrollingUp(!scrollingDown && currentScroll > 0);

      if (scrollDelta > 10) {
        if (scrollingDown) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
        lastScrollTop = currentScroll;
      }
    };

    let lastScrollTop = 0;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      showAnim.kill();
    };
  }, []);

  const NavLink = ({
    id,
    label,
    path,
    isMobile = false,
  }: NavbarLinkType): JSX.Element => (
    <Link
      onClick={() => handleNavClick(id)}
      href={path}
      className="no-underline">
      <p
        className={`${
          navActive === id && !notHighlightingPages.includes(pathname)
            ? 'text-ecocrewPrimary'
            : 'text-dark'
        } text-sm font-normal`}>
        {label}
      </p>
      {!isMobile && !notHighlightingPages.includes(pathname) && (
        <span
          className={`mx-auto ${navActive === id ? 'block' : 'hidden'} h-[1px] w-[6px] rounded-full bg-ecocrewPrimary`}
        />
      )}
    </Link>
  );

  return (
    <div
      ref={navRef}
      className={`fixed z-50 w-full bg-white transition-all ${isScrollingUp ? 'shadow-sm' : ''}`}>
      {shouldShowBorder && (
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-black/10" />
      )}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[5.556%] pb-3 pt-5">
        <Link href="/" className="-mb-2">
          <img
            src="https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo1.png"
            alt="Ecocrew logo"
            className="h-[43px] w-full max-w-28 object-contain"
            width={112}
            height={43}
          />
        </Link>
        <div className="hidden gap-8 leading-5 lg99:flex">
          {navLinks?.map((link) => <NavLink key={link?.id} {...link} />)}
        </div>

        {/* Mobile Navbar */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="border-none bg-transparent lg99:hidden">
            <svg
              aria-label="Mobile hamburger menu"
              className="flex cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24">
              <path
                fill={'black'}
                stroke={'black'}
                strokeWidth="1.5"
                d="M5 17h8m-8-5h14m-8-5h8"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="top" className="p-0">
            <SheetHeader className="space-y-0">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex justify-center px-5">
                <div className="borderBottom flex w-full justify-between gap-8 pb-3 pt-4">
                  <img
                    src="https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo1.png"
                    alt="Ecocrew logo"
                    className="h-[43px] w-full max-w-28 object-contain"
                    width={112}
                    height={43}
                  />
                  <SheetTrigger className="border-none bg-transparent">
                    <svg
                      className="flex cursor-pointer"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                      />
                    </svg>
                  </SheetTrigger>
                </div>
              </div>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-5">
              {navLinks?.map((link: NavbarLinkType) => (
                <NavLink key={link?.id} {...link} isMobile={true} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    //   </div >
    // </div >
    // </div>
  );
}
