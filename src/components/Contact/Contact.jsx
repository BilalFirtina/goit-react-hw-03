import styles from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ person, deletePerson }) => {
  return (
    <div className={styles.card}>
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
  );
};

export default Contact;
