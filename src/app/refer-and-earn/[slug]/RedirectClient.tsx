'use client';

export default function RedirectClient(): JSX.Element {
  const handleInteraction = (): void => {
    // 1. Copy the current URL to the clipboard
    const currentUrl = window.location.href;

    // Since this is triggered by a user click, the browser will allow the copy!
    navigator.clipboard
      .writeText(currentUrl)
      .catch((err) => {
        console.error('Failed to copy url: ', err);
      })
      .finally(() => {
        // 2. Redirect logic
        const ua = navigator.userAgent.toLowerCase();
        const isAndroid = ua.includes('android');
        const isIOS = ua.includes('iphone') || ua.includes('ipad');

        if (isAndroid) {
          window.location.href =
            'https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN';
          return;
        }

        if (isIOS) {
          window.location.href =
            'https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969';
          return;
        }

        window.location.href = 'https://ecocrew.in';
      });
  };

  return (
    <div
      onClick={handleInteraction}
      className="fixed inset-0 flex cursor-pointer select-none flex-col items-center justify-center bg-white">
      <div className="space-y-4 p-6 text-center">
        <h1 className="text-2xl font-bold text-green-700">Almost there!</h1>
        <p className="text-lg text-gray-600">
          Tap anywhere on the screen to continue to the App.
        </p>
        <div className="mt-8 animate-bounce text-green-600">
          <svg
            className="mx-auto h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
