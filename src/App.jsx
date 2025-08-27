
import Counter from './components/Counter';
import UsersList from './components/UsersList';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <Counter />
      <h2>Users</h2>
      <UsersList />
    </div>
  );
}

export default App;