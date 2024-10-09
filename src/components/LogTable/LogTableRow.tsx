import React, { useEffect, useRef } from "react";
import LogEntry from "../LogEntry/LogEntry";
import { LogType } from "../../hooks/useFetchLogs";

interface LogTableRowProps {
  index: number;
  log: LogType;
  style: React.CSSProperties;
  isExpanded: boolean;
  onToggle: () => void;
  setRowHeight: (index: number, height: number) => void;
}

const LogTableRow: React.FC<LogTableRowProps> = ({
  index,
  log,
  style,
  isExpanded,
  onToggle,
  setRowHeight,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRowRef = rowRef.current; // Store the current value of rowRef.current
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setRowHeight(index, entry.contentRect.height);
      }
    });

    if (currentRowRef) {
      observer.observe(currentRowRef);
    }

    return () => {
      if (currentRowRef) {
        observer.unobserve(currentRowRef); // Use the stored ref value in the cleanup
      }
    };
  }, [index, setRowHeight]);

  const isEven = index % 2 === 0;

  return (
    <div style={style}>
      <div ref={rowRef}>
        <LogEntry
          key={index}
          log={log}
          isExpanded={isExpanded}
          onToggle={onToggle}
          isEven={isEven}
        />
      </div>
    </div>
  );
};

export default LogTableRow;
