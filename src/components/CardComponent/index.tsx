import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
export default function CardComponent({ data }: any) {
  console.log("card: ", data);

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {data?.value}
        </Typography>
        <Typography variant="body2">{data?.timestamp}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Histórico</Button>
      </CardActions>
    </Card>
  );
}
