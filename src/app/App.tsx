import { useState } from "react";
import Sub1 from "../imports/Sub1/index";
import Sub2 from "../imports/Sub2/index";
import Sub3 from "../imports/Sub3/index";
import Sub4 from "../imports/Sub4/index";
import Sub5 from "../imports/Sub5/index";

type Page = "sub1" | "sub2" | "sub3" | "sub4" | "sub5";

const pages: Record<Page, React.ComponentType<{ onNavigate?: (page: string) => void }>> = {
  sub1: Sub1,
  sub2: Sub2,
  sub3: Sub3,
  sub4: Sub4,
  sub5: Sub5,
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>("sub1");

  const handleNavigate = (page: string) => {
    if (page in pages) {
      setActivePage(page as Page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const PageComponent = pages[activePage];
  return <PageComponent onNavigate={handleNavigate} />;
}
