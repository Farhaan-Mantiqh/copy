import { PoliciesTypes } from '@/types/policies-types';

type Props = {
  data: PoliciesTypes;
};

export default function Policies({ data }: Props): JSX.Element {
  return (
    <div className="pt-28">
      <div className="bg-commonGradient">
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="heading1 px-5 py-10 md:py-[50px]">{data?.title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: data?.points }}
          className="px-5 md:px-[5.556%]"></div>
      </div>
    </div>
  );
}
