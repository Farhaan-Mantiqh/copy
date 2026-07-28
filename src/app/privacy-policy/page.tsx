import Policies from '@/components/common/policies';
import { privacyPolicyData } from '@/overallData/privacy-policy';

export default function PrivacyPolicyPage(): JSX.Element {
  return <Policies data={privacyPolicyData} />;
}
