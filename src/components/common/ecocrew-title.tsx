'use client';

const logo =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo1.png';

type Props = {
  title: string;
};

export default function EcocrewTitle({ title }: Props): JSX.Element {
  return (
    <div className="borderBottom flex items-center justify-between pb-3 md:pb-5">
      <p className="sectionTitle leading-[.94rem] md:leading-7">{title}</p>
      <img
        src={typeof logo === 'string' ? logo : (logo as { src: string })?.src}
        alt="ecocrew-logo"
        className="h-full max-h-10 w-full max-w-5 md:max-w-10"
        width={40}
        height={40}
      />{' '}
    </div>
  );
}
