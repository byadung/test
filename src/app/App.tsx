import { useState } from "react";
import Sub1 from "../imports/Sub1/index";
import Sub2 from "../imports/Sub2/index";

export default function App() {
  const [activePage, setActivePage] = useState<"인사말" | "약력">("인사말");

  const handleTabChange = (tab: string) => {
    if (tab === "인사말" || tab === "약력") {
      setActivePage(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return activePage === "인사말" ? (
    <Sub1 onTabChange={handleTabChange} />
  ) : (
    <Sub2 onTabChange={handleTabChange} />
  );
}
