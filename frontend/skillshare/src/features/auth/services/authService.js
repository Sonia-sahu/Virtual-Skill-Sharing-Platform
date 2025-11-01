import API from "../../../services/api";

export const login = (credentials) => API.post("/users/login/", credentials);
export const register = (data) => API.post("/users/register/", data);
export const getProfile = () => API.get("/users/profile/");
export const updateProfileData = (data) => API.put("/users/profile/", data);
export const getSettings = () => API.get("/users/settings/");
export const updateSettingsData = (data) => API.put("/users/settings/", data);
