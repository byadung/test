import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import '../default_shadcn_theme.css' // 파일 위치에 맞게 경로 확인 (또는 './default_shadcn_theme.css')

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
