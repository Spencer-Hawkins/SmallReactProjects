import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          address={meetup.address}
          image={meetup.image}
          description={meetup.description}
          title={meetup.title}
          key={meetup.id}
          id={meetup.id}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
