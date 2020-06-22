import React from 'react';

import { ComboChart } from "@toast-ui/react-chart";
import 'tui-chart/dist/tui-chart.css'

function App() {
  let data = {
    series: {
      area: [
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
      line: [
        {
          name: "Data",
          data: [
            { x: 1, y: 5, },
            { x: 2, y: 4, },
            { x: 3, y: 3, },
            { x: 3, y: 2, },
            { x: 3, y: 1, },
          ],
        },
      ],
    },
  };

  return (
    <div>
      <ComboChart data={data} />
    </div>
  );
}

export default App;
