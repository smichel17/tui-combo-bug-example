import React from 'react';

import { AreaChart } from "@toast-ui/react-chart";
import 'tui-chart/dist/tui-chart.css'

function App() {
  let data = {
    series: [
      {
        name: "Goal",
        data: [
          { x: 1, y: 3, },
          { x: 2, y: 3, },
          { x: 3, y: 3, },
          { x: 4, y: 3, },
          { x: 5, y: 3, },
        ],
      },
    ],
  };

  return <AreaChart data={data} />;
}

export default App;
