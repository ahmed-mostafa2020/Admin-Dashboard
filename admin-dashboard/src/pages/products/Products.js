import React, { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 180,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 130,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 130,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  // API

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add New Product
        </button>
      </div>
      <DataTable columns={columns} rows={products} slug={"products"} />

      {/* TEST THE API */}

      {open && <Add setOpen={setOpen} columns={columns} slug={"products"} />}
    </div>
  );
};

export default Products;
