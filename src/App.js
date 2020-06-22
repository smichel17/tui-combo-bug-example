import React from 'react';

import { ComboChart } from "@toast-ui/react-chart";
import 'tui-chart/dist/tui-chart.css'

function App() {
  let data = {
    categories: [ 1, 2, 3, 4, 5 ],
    series: {
      area: [
        {
          name: "Goal",
          data: [ 3, 3, 3, 3, 3 ],
        },
      ],
      line: [
        {
          name: "Data",
          data: [ 5, 4, 3, 2, 1 ],
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
