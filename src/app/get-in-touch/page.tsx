import CommonForms from '@/components/common/forms';
import { getInTouch } from '@/overallData/forms-constant';

export default function GetInTouch(): JSX.Element {
  return <CommonForms data={getInTouch} />;
}
