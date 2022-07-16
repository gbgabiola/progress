import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
};

export default App;
