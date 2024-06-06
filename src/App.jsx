import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}
