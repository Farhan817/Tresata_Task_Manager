import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAdd = () => {
    const navigate = useNavigate();
    const [{ formData }, setState] = useState({
        formData: {
            title: "",
            description: "",
        },
    });
    const handleSubmit = (value) => {
        // dispatch value  
    }
    const onCancel = () => {
        navigate("/")
    }
    return [{ formData }, { handleSubmit, onCancel }];
};
export default useAdd;
