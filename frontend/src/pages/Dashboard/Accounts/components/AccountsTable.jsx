import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { accountColumnDefs } from "../../../../data/AccountsData";
import AccountsActionBar from "./AccountsActionBar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AccountsTable = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:3011/accounts");
        const data = response.data;
        if (Array.isArray(data.accounts)) {
          setRowData(data.accounts);
        } else {
          throw new Error("Data format is incorrect");
        }
      } catch (error) {
        toast.error(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    getAllAccounts();
  }, []);

  const handleRowClick = async (event) => {
    console.log("Event Data:", event.data);

    const accountId = event.data._id;
    console.log("Extracted Account ID:", accountId);

    if (!accountId) {
      console.error("Account ID is undefined");
      toast.error("Account ID is missing");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3011/accounts/${accountId}`
      );
      const account = response.data;
      console.log("Fetched Account:", account);
      navigate(`/accounts/${accountId}`);
    } catch (error) {
      console.error(
        "Error fetching account:",
        error.response?.data?.message || error.message
      );
      toast.error(`Error fetching account: ${error.message}`);
    }
  };

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

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-72">
        <p>Loading...</p>
      </div>
    );
  }

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
