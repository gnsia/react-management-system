import { TableCell, TableRow } from "@mui/material";
import { Component } from "react";

class Customer extends Component {
    render() {
        const { id, image, name, birth, gender, job } = this.props.customer;
        return (
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell><img src={image} alt="profiel" /></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{birth}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>
            </TableRow>
        )
    }
}


export default Customer;