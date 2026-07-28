import Policies from '@/components/common/policies';
import { termsAndConditonsData } from '@/overallData/terms-and-conditions';

export default function TermsAndConditionsPage(): JSX.Element {
  return <Policies data={termsAndConditonsData} />;
}
