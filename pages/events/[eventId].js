import {useRouter} from 'next/router'
import { getEventById } from '../../dummy-data';

function EvnetDetailPage() {
  const router=  useRouter();
  const eventId = router.query.eventId;
  const  event = getEventById(eventId);
  if(!eventId) return <p>No event found!</p>
  return (
    <div>
      <h1>Event detail page</h1>
    </div>
  );
}

export default EvnetDetailPage;
