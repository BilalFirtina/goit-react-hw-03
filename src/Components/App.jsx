import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const storagedContacts = JSON.parse(localStorage.getItem("contacts"));
  const [people, setPeople] = useState(
    storagedContacts
      ? storagedContacts
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ]
  );
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(people));
  }, [people]);
  const handleSubmit = (v, a) => {
    const isDuplicate = people.some((person) => {
      return person.name.toLowerCase() === v.name.toLowerCase();
    });
    if (isDuplicate) {
      alert(`${v.name} is already in contacts`);
      return;
    }
    const newPerson = {
      id: nanoid(),
      name: v.name,
      number: v.number,
    };
    setPeople([...people, newPerson]);
    a.resetForm();
  };

  const [searchedTerm, setSearchedTerm] = useState("");
  const searchFunction = (e) => {
    setSearchedTerm(e.target.value.trim().toLowerCase());
  };
  const filteredPeople =
    searchedTerm === ""
      ? people
      : people.filter(
          (person) =>
            person.name.toLowerCase().includes(searchedTerm) ||
            person.number.includes(searchedTerm)
        );
  const deletePerson = (id) => {
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox searchFunction={searchFunction} />
      <ContactList people={filteredPeople} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
