import React from "react";
import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const DataTable = ({ rows, columns, slug }) => {
  const handleDelete = (id) => {
    // console.log(id + " deleted");
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 147,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="view.svg" alt="icon" />
          </Link>

          <div
            className="delete"
            onClick={() => {
              handleDelete(params.row.id);
            }}
          >
            <img src="delete.svg" alt="icon" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
