import React from "react";
import { Sidebar } from "./Sidebar";
import {Tasks} from '../Tasks'

export const Content = () => {
  return (
    <section>
      <Tasks />
      <Sidebar />
    </section>
  );
};
