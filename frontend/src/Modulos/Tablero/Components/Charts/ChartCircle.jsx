import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const ChartCircle = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Venta de farmaco por Proovedor"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 18, label: "INTI" },
        { y: 49, label: "TECNOFARMA" },
        { y: 9, label: "ABD" },
        { y: 5, label: "ALCOS" },
        { y: 19, label: "SAN FERNANDO SRL" }
      ]
    }]
  }

  return (
    <div>
      <CanvasJSChart options={options}
      /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
