import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useEdit = () => {
    const formikRef = useRef();
    const navigate = useNavigate();

    const location = useLocation();
    const taskId = location.state.id;

    useEffect(() => {
        //filter value from redux
        setState((prev) => ({ ...prev, formData: {} }));
    }, [taskId]);
    const [{ formData }, setState] = useState({
        formData: {
            title: "",
            description: "",
            status: "",
        },
    });

    const handleSubmit = (value) => {
        // dispatch value
    };
    const onCancel = () => {
        navigate("/");
    };
    const handelSelect = (value) => {
        formikRef?.current?.setFieldValue("status", value);
    };
    return [
        { formData, formikRef },
        { handleSubmit, onCancel, handelSelect },
    ];
};
export default useEdit;
