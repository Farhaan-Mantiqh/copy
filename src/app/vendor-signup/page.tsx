import CommonForms from '@/components/common/forms';
import { vendor } from '@/overallData/forms-constant';

export default function VendorSignupPage(): JSX.Element {
  return <CommonForms data={vendor} />;
}
