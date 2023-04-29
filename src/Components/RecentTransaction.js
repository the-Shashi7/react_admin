import React from "react";
import "./RecentTransaction.css";
import { DataGrid } from "@mui/x-data-grid";
import export_p from "../Icons/export.png";

const columns = [
  { field: "id", headerName: "Invoice ID", width: 180, },
  { field: "date", headerName: "Date", width: 180 },
  { field: "description", headerName: "Description", width: 180 },
  {
    field: "status",
    headerName: "Status",
    width: 180,
  },
  {
    field: "descriptions",
    headerName: "Descriptions",
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 'MO63592DR2', date: "08.04.2021", description: "Code 5928MD01", status:'completed',descriptions:"$2500.00" },
  { id: 'MO63592DR3', date: "08.04.2021", description: "Code 5928MD01", status:'completed' ,descriptions:"$2500.00" },
  { id: 'MO63592DR4', date: "08.04.2011", description: "Code 5928MD01", status:'completed',descriptions:"$2500.00"  },
  { id: 'MO63592DR5', date: "08.04.2021", description: "Code 5928MD01", status:'completed' ,descriptions:"$2500.00" },
  { id: 'MO63592DR6', date: "08.04.2021", description: "Code 5928MD01", status: 'completed' ,descriptions:"$2500.00" },
];

export default function RecentTransaction() {
  return (
    <div className="trasaction-container">
      <div className="sub-container">
        <div className="top-div">
          <h3 style={{margin:'10px'}} >Recent Transactions</h3>
          <button className="btn" ><img className="icons" src={export_p} alt="export" /> Export</button>
        </div>
        <div className="tran-table">
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
