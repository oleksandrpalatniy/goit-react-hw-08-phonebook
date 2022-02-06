import styles from './phonebook.module.css';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contacts';

const AddPhoneList = () => {
  const { data } = useGetAllContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filter = useSelector(
    state => state.contactReducer.contacts.contacts.filter,
  );
  const getVisibleContact = () => {
    const normFilter = filter.toLowerCase();
    return data.filter(con => con.name.toLowerCase().includes(normFilter));
  };

  return (
    <>
      <Filter />
      <ul className={styles.PhoneList}>
        {data &&
          getVisibleContact().map(({ id, name, number }) => (
            <li className={styles.PhoneList_list} key={id}>
              <span className={styles.PhoneList_item}>{name}:</span>
              <span className={styles.PhoneList_item}>{number}</span>
              <button
                className={styles.PhoneList_button}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default AddPhoneList;
