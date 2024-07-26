import { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Table, TableBody, TableRow, TableCell, TableHead, Paper } from '@mui/material';


function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/customers');
      const jsonData = await response.json();
      console.log(jsonData);
      setCustomers(jsonData);
    }
    fetchData();
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
          {customers.map((v, i) =>
            <Customer key={i} customer={v} />
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
