import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title/results-title";
// import { getFilteredEvents } from "../../dummy-data";
import { getFilteredEvents } from "../../helpers/api-util";
function FilteredEventPage(props) {
  const router = useRouter();
  // const urlParams = router.query.slug;
  // if (!urlParams) return <p className="center">loading .....</p>;
  // const [year, month] = urlParams;
  // const numYear = +year;
  // const numMonth = +month;
  // const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!props.events || props.events.length === 0)
    return <h2>No events found</h2>;
  const date = new Date(props.date.year, props.date.month - 1);
  console.log(date);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </Fragment>
  );
}
export async function getServerSideProps(context){
  const {params} = context;
  const urlParams = params.slug;
  const [year, month] = urlParams;
  const numYear = +year;
  const numMonth = +month;
  const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });
  return {
    props:{
      events:filteredEvents,
      date:{
        year:numYear,
        month:numMonth
      }
    },

  };
}
export default FilteredEventPage;
