import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title/results-title";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventPage() {
  const router = useRouter();
  const urlParams = router.query.slug;
  console.log(urlParams);
  if (!urlParams) return <p className="center">loading .....</p>;
  const [year, month] = urlParams;
  console.log(year, month);
  const numYear = +year;
  const numMonth = +month;
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  console.log(filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0)
    return <h2>No events found</h2>;
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventPage;
