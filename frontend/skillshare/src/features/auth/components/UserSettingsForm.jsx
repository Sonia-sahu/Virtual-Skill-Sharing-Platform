import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSettings, updateSettings } from "../actions/authActions";
import {
  Box,
  FormControlLabel,
  Switch,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function UserSettingsForm() {
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    receive_notifications: false,
    privacy_public_profile: true,
  });

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    if (settings) {
      setForm({
        receive_notifications: settings.receive_notifications ?? false,
        privacy_public_profile: settings.privacy_public_profile ?? true,
      });
    }
  }, [settings]);

  const handleToggle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = () => {
    dispatch(updateSettings(form));
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        User Settings
      </Typography>
      <Stack spacing={2}>
        <FormControlLabel
          control={
            <Switch
              checked={form.receive_notifications}
              onChange={handleToggle}
              name="receive_notifications"
            />
          }
          label="Receive Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={form.privacy_public_profile}
              onChange={handleToggle}
              name="privacy_public_profile"
            />
          }
          label="Public Profile"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Save Settings
        </Button>
      </Stack>
    </Box>
  );
}
