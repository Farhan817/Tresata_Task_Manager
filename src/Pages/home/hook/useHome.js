import { useState } from "react";
import { useNavigate } from "react-router-dom";


const useHome = () => {
    const navigate = useNavigate()
    const [expandedSections, setExpandedSections] = useState({
        inProgress: true,
        pending: false,
        completed: false,
    });
    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };
    const handelEdit = (id) => {
        navigate("/edit", { state: { id: id } })
    }
    const handelDelete = (id) => { }
    return [{ expandedSections }, { toggleSection, handelEdit, handelDelete }]
}
export default useHome;