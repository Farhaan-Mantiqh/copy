import Policies from '@/components/common/policies';
import { termsOfUseData } from '@/overallData/terms-of-use';

export default function TermsOfUsePage(): JSX.Element {
  return <Policies data={termsOfUseData} />;
}
