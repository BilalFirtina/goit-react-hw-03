import styles from "./ContactList.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const ContactList = ({ people, deletePerson }) => {
  return (
    <div className={styles.container}>
      {people.map((person) => (
        <div key={person.id} className={styles.card}>
          <div className={styles.personInfo}>
            <span>
              <IoPerson className={styles.personSpan} />
              {person.name}
            </span>
            <span>
              <FaPhone className={styles.personSpan} />
              {person.number}
            </span>
          </div>
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
