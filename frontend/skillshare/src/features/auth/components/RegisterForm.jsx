import { useDispatch } from "react-redux";

import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../actions/authActions";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => dispatch(registerUser(form));

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <TextField
        fullWidth
        label="Username"
        name="username"
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        margin="normal"
      />
      <Button fullWidth variant="contained" onClick={handleSubmit}>
        Register
      </Button>
    </Box>
  );
}
