const contactItem = () => {
    return (
        <li className={styles.PhoneList_list} key={id}>
              <span className={styles.PhoneList_item}>{name}:</span>
              <span className={styles.PhoneList_item}>{phone}</span>
              <button
                className={styles.PhoneList_button}
                onClick={() => deleteContact(id)}
              >
                {isLoading ? <Watch height={15} width={40}/> : 'Delete'}  
              </button>
            </li>
          ))}

    )
}