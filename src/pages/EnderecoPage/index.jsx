import Stack  from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField  from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";


const EnderecoPage = () => {
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("")
    const {estado, setEstado} = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    return (
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop={2}
        gap={3}
        >
        <Stack widht="70vw" alignItems="center" gap={1}>
            <Typography variant="h2"> Consulte seu CEP </Typography>
            <Link target="_blank" href="https://brasilapi.com.br/" underline="always"> VIA BRASIL API </Link>
        </Stack>

        <Stack alignItems="center" gap={1}>
            <TextField placeholder="50012007" 
            required
            inputProps={{maxLength: 8}} 
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            />
            <Button variant="contained">Buscar</Button>
        </Stack>
            
            
        <Stack width="70vh" gap={2} marginTop={4}>
            <TextField label="Rua" fullWidth readOnly value={rua}/>
            <TextField label="Cidade" fullWidth readOnly value={cidade} />
            <TextField label="Estado" fullWidth readOnly value={estado} />
            <TextField label="Latitude" fullWidth readOnly value={latitude} />
            <TextField label="Longitude" fullWidth readOnly value={longitude} />
        </Stack>


        </Box>
    );

};

export default EnderecoPage;