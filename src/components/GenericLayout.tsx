import { ReactNode } from "react";
import HiddenNavBar from "./HiddenNavBar";
import "./styles/PageLayout.css";
function GenericLayout({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <HiddenNavBar />
      <div
        className="pageTitle"
        style={{ textAlign: "center", marginTop: "60px" }}
      >
        {pageTitle}
      </div>
      <main>{children}</main>
    </>
  );
}

export default GenericLayout;
