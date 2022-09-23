import { MdOutlineContacts } from 'react-icons/md';

const HomePage = () => {
  return (
    <main
      style={{
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '600px',
        padding: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '10px',
      }}
    >
      <p>
        <MdOutlineContacts size={70} />
      </p>
      <h1>Welcome to Phonebook App</h1>
    </main>
  );
};

export default HomePage;
