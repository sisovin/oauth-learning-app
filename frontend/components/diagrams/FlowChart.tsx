import React, { useState } from 'react';
import { FlowChartWithState } from '@mrblenny/react-flow-chart';
import { chartSimple } from './chart-simple';

const FlowChart = () => {
  const [chart, setChart] = useState(chartSimple);

  const handleNodeClick = (nodeId) => {
    alert(`Node clicked: ${nodeId}`);
  };

  return (
    <div className="flowchart-container">
      <FlowChartWithState
        initialValue={chart}
        onChange={setChart}
        callbacks={{
          onNodeClick: handleNodeClick,
        }}
      />
    </div>
  );
};

export default FlowChart;
