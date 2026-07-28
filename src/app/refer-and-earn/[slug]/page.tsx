import RedirectClient from './RedirectClient';

export function generateStaticParams(): { slug: string }[] {
  return [
    { slug: "referal-code" }
  ]
}


export default function AppRedirectPage(): JSX.Element {
  return <RedirectClient />;
}
