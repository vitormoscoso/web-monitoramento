import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DataItem, getAllData } from "../service/GetAllData";

export default function Historic() {
  const [data, setData] = useState<DataItem[]>([]);

  async function getData() {
    const allData = await getAllData();
    setData(allData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "40%", margin: "auto", marginTop: 4 }}
    >
      <Typography variant="h6" sx={{ padding: 2 }}>
        Histórico de Medições
      </Typography>
      <Table aria-label="tabela de medições">
        <TableHead>
          <TableRow>
            <TableCell>Valor</TableCell>    
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((el: any) => (
            <TableRow key={el?.id}>
              <TableCell component="th" scope="row">
                {el?.value}
              </TableCell>
              <TableCell align="right">{el?.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
