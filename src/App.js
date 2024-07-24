import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/1/64/64',
    'name': 'kidohu',
    'birth': '880705',
    'gender': 'male',
    'job': 'Developer'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/2/64/64',
    'name': 'kidini',
    'birth': '901121',
    'gender': 'female',
    'job': 'Photographer'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/3/64/64',
    'name': 'cashunut',
    'birth': '990909',
    'gender': 'male',
    'job': 'nuts'
  }
];

function App() {
  return (
    <div className="App">
      {customers.map(customer =>
        <Customer
          key={customer.id}
          id={customer.id}
          image={customer.image}
          name={customer.name}
          birth={customer.birth}
          gender={customer.gender}
          job={customer.job}
        />
      )}
    </div>
  );
}

export default App;
