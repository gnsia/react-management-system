import './App.css';
import Customer from './components/Customer';
import { Table, TableBody, TableRow, TableCell, TableHead, Paper } from '@mui/material';


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
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer =>
            <Customer customer={customer} />
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
