import { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Table, TableBody, TableRow, TableCell, TableHead, Paper } from '@mui/material';
import { CircularProgress } from '@mui/material';

function App() {
  const [customers, setCustomers] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const progress = () => {
      setCompleted(completed => completed < 100 ? completed + 1 : 0);
    }
    const progressInterval = setInterval(progress, 20);
    const getCustomers = async () => {
      const response = await fetch('/api/customers');
      const jsonData = await response.json();
      setCustomers(jsonData);
      clearInterval(progressInterval);
    }
    getCustomers();
  }, [customers.length]);

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
          {customers.length ? customers.map((v, i) =>
            <Customer key={i} customer={v} />
          ) :
            <TableRow>
              <TableCell colSpan={6} align='center'>
                <CircularProgress variant='determinate' value={completed} />
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
