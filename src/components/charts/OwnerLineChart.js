import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";

export const OwnerLineChart = ({OfferConsommees}) => {

     
  return (
    <React.Fragment>
        <div className="">
          <Chart 
          series = {[{
            name: "Offres consommées",
            // data: offersConsommes
            data: [120, 130, 158, 100, 168, 132, 118, 220, 210, 111, 230, 235]
          }]}
            options = 
            {{
              colors:["#0079ff"],
              markers: {
                size: 5,
                colors: ["#0079ff"]
              },
              
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Offres Consommées Par Mois',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ["Jan", "Fev", "Mars", "Avril", "Mai", "Juin", "Juill", "Août", "Sept", "Oct", "Nov", "Dec"],
              },
              noData: {
                text: 'Loading...'
              }
            }}

            type="line" 
            height={350}
             
          >
          </Chart>
        </div>
    </React.Fragment>
  )
}
