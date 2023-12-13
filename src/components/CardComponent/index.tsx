import { Button, Divider, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ data }: any) {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={3}
      sx={{
        margin: 2,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "20%",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Última medição
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Typography
        variant="h6"
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
      >
        {data?.value}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ marginTop: 1, display: "flex", justifyContent: "center" }}
      >
        {data?.timestamp}
      </Typography>
      <Button sx={{ marginTop: 1 }} onClick={() => navigate(`/historico`)}>
        Histórico
      </Button>
    </Paper>
  );
}
