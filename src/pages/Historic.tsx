import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { DataItem, getAllData } from "../service/GetAllData";
import { useMediaQuery } from "react-responsive";

const columns: GridColDef<DataItem>[] = [
  {
    field: "value",
    headerName: "Valor",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "timestamp",
    headerName: "Data",
    flex: 1,
    align: "right",
    headerAlign: "right",
  },
];

export default function Historic() {
  const [data, setData] = useState<DataItem[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  async function getData() {
    const allData = await getAllData();
    setData(allData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <style>
        {`
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: ${isMobile ? "auto" : "hidden"};
      }
    `}
      </style>
      <Header />
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "whitesmoke",
        }}
      >
        <h3>Histórico de medições</h3>
        <div
          style={{
            maxHeight: "70%",
            minHeight: "70%",
            width: isMobile ? "90%" : "30%",
          }}
        >
          {}
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: isMobile ? 8 : 10 },
              },
            }}
            disableColumnMenu
          />
        </div>
      </div>
    </>
  );
}
