import React from "react";
import Header from "../components/Header/Header";
import Timeline from "../components/Timeline/Timeline";
import LogTable from "../components/LogTable/LogTable";

const LogViewer: React.FC = () => {

  return (
    <div className="log-viewer">
      <Header />
      <Timeline/>
      <LogTable />
    </div>
  );
};

export default LogViewer;
