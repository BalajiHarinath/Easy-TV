import { v4 as uuid } from "uuid";
import { createContext, useContext, useState } from "react";
import { Toast } from "../components";
import "../css/main.css";
import "../components/Toast/Toast.css";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prevToasts) => [...prevToasts, { _id: uuid(), ...toast }]);
  };

  const removeToast = (toastId) => {
    setToasts((prevToasts) =>
      prevToasts.filter(({ _id: prevId }) => prevId !== toastId)
    );
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ul className="container-toast flex flex-column">
        {toasts.map((toast) => (
          <Toast
            key={toast._id}
            toast={toast}
            handleToastClose={() => {
              removeToast(toast._id);
            }}
          />
        ))}
      </ul>
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
