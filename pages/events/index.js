import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/events-search";
import { useRouter } from "next/router";
function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEventHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }
  return (
    <Fragment>
      <Eventsearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
