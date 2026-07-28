'use client';
export const prerender = false;

export default function AppRedirectPage(): null {
  if (typeof window !== 'undefined') {
    const ua = navigator.userAgent.toLowerCase();

    const isAndroid = ua.includes('android');
    const isIOS = ua.includes('iphone') || ua.includes('ipad');

    if (isAndroid) {
      window.location.href =
        'https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN';
      return null;
    }

    if (isIOS) {
      window.location.href =
        'https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969';
      return null;
    }

    window.location.href = 'https://ecocrew.in';
    return null;
  }

  return null;
}
