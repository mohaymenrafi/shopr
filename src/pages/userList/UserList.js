import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { userTableData } from '../../Data/userData';

export default function UserList() {
  const [data, setData] = useState(userTableData);
  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'Username',
      width: 200,
      renderCell: (params) => (
        <div className="userTableUser">
          <img src="https://picsum.photos/200" alt="" />
          <span>{params.row.username}</span>
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => (
        <>
          <Link to={`/users/${params.row.id}`}>
            <button type="button" className="userTableEditButton">
              Edit
            </button>
          </Link>
          <DeleteOutline
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />{' '}
    </div>
  );
}
