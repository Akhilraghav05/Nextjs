// import { getFeaturedEvents, getFilteredEvents } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import Head from "next/head"
function HomePage({ events }) {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="lot of great events allow you to evolve"/>
      </Head>
      <EventList items={events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate:1800
  };
}
export default HomePage;
