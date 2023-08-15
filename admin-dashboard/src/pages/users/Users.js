import React from "react";
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "noavater.png"} alt="user" />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    editable: true,
  },
  {
    field: "lastName",
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
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable columns={columns} rows={userRows} slug={"users"} />
    </div>
  );
};

export default Users;
