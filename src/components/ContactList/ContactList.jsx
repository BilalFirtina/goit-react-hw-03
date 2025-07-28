import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ people, deletePerson }) => {
  return (
    <div className={styles.container}>
      {people.map((person) => (
        <Contact key={person.id} person={person} deletePerson={deletePerson} />
      ))}
    </div>
  );
};

export default ContactList;
