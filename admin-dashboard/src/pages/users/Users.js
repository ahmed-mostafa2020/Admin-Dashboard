import React, { useState } from "react";
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import Add from "../../components/add/Add";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "noavater.png"} alt="user" />;
    },
  },

  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 130,
    editable: true,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 130,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 180,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created At",
    width: 100,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add New User
        </button>
      </div>
      <DataTable columns={columns} rows={userRows} slug={"users"} />
      {open && <Add setOpen={setOpen} columns={columns} slug={"users"} />}
    </div>
  );
};

export default Users;
