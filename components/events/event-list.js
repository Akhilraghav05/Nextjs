import EventItem from "./event-item";
import classes from "./event-list.module.css";
function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          location={event.location}
          image={event.image}
          key={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
