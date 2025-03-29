import { auth } from "../Firebase"; // Ensure correct import
import axios from "axios";

const uploadToCloudinary = async (file) => {
    if (!file) {
        alert("No file selected.");
        return;
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    
    const user = auth.currentUser; // Get the logged-in user
    if (!user) {
        alert("Please sign in to upload files.");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("public_id", `user_files/${user.uid}/${file.name}`); // Store in user-specific folder

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } } // Ensure proper formatting
        );

        console.log("✅ Upload Successful:", response.data);
        alert("✅ File uploaded successfully!");
        return response.data;
    } catch (error) {
        console.error("❌ Upload Error:", error);
        alert("❌ Upload failed. Please try again.");
    }
};

export default uploadToCloudinary;
