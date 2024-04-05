import React from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";

const Datatable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: "status",
            headerName: "Status",
            width: 160,
            renderCell: (params) => {
                return <div className={`cell-status ${params.row.status}`}>{params.row.status}</div>
            }
        }
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'active' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'pending' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'passive' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: 'active' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , status: 'active'},
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: 'pending' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'passive' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,status: 'active'},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,status: 'passive' },
      ];

      const actionColumn = [
        {field:"action", headerName:"Action", width: 100, renderCell:()=> {
            return (
                <div className="cell-action">
                    <div className="update-button">Update</div>
                    <div className="delete-button">Delete</div>
                </div>
            )
        }}
      ];
    return (
        
        <div className="datatable"> 
        <div className="datatable-title">
          Available Items
          <Link to={`${useLocation().pathname}/new`} style={{textDecoration: "none",
          color: "green",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer"
             }} className="new-input">New</Link>
        </div>
        <DataGrid 
            rows={rows}
            columns={columns.concat(actionColumn)}
            pageSizeOptions={[5, 10]}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5},
                }
            }}
            checkboxSelection
            />
        </div>
    );
}

export default Datatable;