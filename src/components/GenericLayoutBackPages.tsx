import React from "react";
import GenericLayout from "./GenericLayout";
import "./styles/pageTitle.css";
interface GenericLayoutProp {
  pageTitle: string;
  pageSubTitle?: string;
  children: React.ReactNode;
}

export default function GenericLayoutBackPages({
  pageTitle,
  pageSubTitle,
  children,
}: GenericLayoutProp) {
  return (
    <>
      <GenericLayout pageTitle={pageTitle} pageSubTitle={pageSubTitle}>
        {children}
      </GenericLayout>
    </>
  );
}
