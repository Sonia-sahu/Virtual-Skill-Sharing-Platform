import { useDispatch } from "react-redux";

import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../actions/authActions";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => dispatch(loginUser(form));

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
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        margin="normal"
      />
      <Button fullWidth variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
}
