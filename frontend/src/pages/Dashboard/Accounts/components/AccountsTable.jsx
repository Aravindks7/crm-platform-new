import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";
import { accountsData, accountColumnDefs } from "../../../../data/AccountsData";
import AccountsActionBar from "./AccountsActionBar";
import { useNavigate } from "react-router-dom";

const AccountsTable = () => {
  const [rowData, setRowData] = useState(() => {
    const savedData = localStorage.getItem("userInfo");
    return savedData ? JSON.parse(savedData) : accountsData;
  });

  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const newData = [...rowData, data];
    setRowData(newData);
    localStorage.setItem("userInfo", JSON.stringify(newData));
  };

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
    };
  }, []);

  const handleRowClick = (event) => {
    const accountId = event.data.id; 
    navigate(`accounts/${accountId}`);
  };

  return (
    <div>
      <div>
        <AccountsActionBar onFormSubmit={handleFormSubmit} />
      </div>
      <div className="m-4">
        <div className="ag-theme-quartz" style={{ height: 500 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={accountColumnDefs}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20]}
            rowSelection={"multiple"}
            defaultColDef={defaultColDef}
            onRowClicked={handleRowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountsTable;
