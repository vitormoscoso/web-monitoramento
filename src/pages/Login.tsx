import {
  Box,
  Button,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useMediaQuery } from "react-responsive";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleLogin = async () => {
    try {
      // const userCredential = await signInWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // );
      await signInWithEmailAndPassword(auth, email, password);
      navigate(`/home`);
    } catch (error) {
      if (error instanceof Error && "code" in error) {
        let message;
        switch (error.code) {
          case AuthErrorCodes.INVALID_EMAIL:
            message = "Formato de e-mail inválido.";
            break;
          case AuthErrorCodes.USER_DELETED:
            message =
              "Não existe conta para esse e-mail. Por favor, crie uma conta.";
            break;
          case AuthErrorCodes.INVALID_PASSWORD:
            message = "Senha incorreta. Por favor, tente novamente.";
            break;
          default:
            message =
              "Ocorreu um erro ao fazer login. Por favor, tente novamente.";
        }
        setError(message);
      } else {
        // Erro desconhecido
        setError("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
      }
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: isMobile ? "10px" : "0", // Ajuste de padding para celular
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            width: isMobile ? "90%" : "30%", // Ajuste de largura para celular
            maxWidth: "500px", // Máximo para telas maiores
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={3} sx={{ width: "100%", padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "100%" },
              }}
            >
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
              {error && <Typography color="error">{error}</Typography>}
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                style={{ fontSize: "1rem" }} // Ajuste de tamanho da fonte para celular
              >
                Entrar
              </Button>
            </Box>
          </Paper>
        </Box>
      </div>
    </>
  );
}
