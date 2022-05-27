import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import Section from './ContactsPage.styled';

function ContactsPage(){
    return (
        <Section>
            <h1>Phonebook</h1>
                <ContactForm />
            <h2>Contacts</h2>
                <Filter />
                <ContactList />
        </Section>
    )
};

export default ContactsPage;
