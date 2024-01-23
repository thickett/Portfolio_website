import { ReactNode } from "react";
import HiddenNavBar from "./HiddenNavBar";
import "./styles/PageLayout.css";
import "./styles/pageTitle.css";

function GenericLayout({
  pageTitle,
  pageSubTitle,
  children,
}: {
  pageTitle: string;
  pageSubTitle?: string;
  children: ReactNode;
}) {
  return (
    <>
      <HiddenNavBar />
      <div className="horizontal-line-bottom center-text-margin ">
        <p className="title-text-large">{pageTitle}</p>
        {pageSubTitle && <p className="title-text-sub">{pageSubTitle}</p>}
      </div>
      <main>{children}</main>
    </>
  );
}

export default GenericLayout;
