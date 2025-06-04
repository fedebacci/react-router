import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

const alertInitialData = {
    type: "",
    text: "",
    show: false,
};

function AlertProvider ({ children }) {

    const [ alertData, setAlertData ] = useState(alertInitialData);
    // console.debug("alertInitialData dentro AlertProvider", alertInitialData);
    // console.debug("alertData dentro AlertProvider", alertData);
    
    const showAlert = (text, type = "info") => {
        if (!text) return;
        setAlertData({ text, type, show: true});
    };
    
    const hideAlert = () => {
        setAlertData(alertInitialData);
    };

    const alertHandler = {
        data: alertData,
        showAlert,
        hideAlert,
    };
    // console.debug("alertHandler dentro AlertProvider", alertHandler);

    return (
        <AlertContext.Provider value={alertHandler}>
            {children}
        </AlertContext.Provider>
    );
};


function useAlert() {
    return useContext(AlertContext);
};


export { AlertProvider, useAlert };