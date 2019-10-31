import React, { Component } from 'react';
//import BarChart from 'react-bar-chart';
import { Chart } from "react-google-charts";

 
 class ChartComponent extends Component {
     constructor(props) {
        super(props);
        this.state = {"testdata" : "testData","width":500,"chartData":[]}
        console.log("Props in constructor :: "+JSON.stringify(props));
       }
       componentWillMount()
       {
          console.log('Charts props :: '+JSON.stringify(this.props.chartProps.data));
          let chrtDataArr = [];
          for(let i=0;i<this.props.chartProps.data.lchrtData.length;i++)
          {
            let inArr = []
            inArr.push(this.props.chartProps.data.lchrtData[i].Year);
            inArr.push(this.props.chartProps.data.lchrtData[i].Purchase);
            inArr.push(this.props.chartProps.data.lchrtData[i].Sales);
            chrtDataArr.push(inArr);
          }
          console.log("Chart Data Arr :: "+chrtDataArr)
          this.setState({"chartData":chrtDataArr})
       }
       componentDidMount()
       {
          window.onresize = () => {
           this.setState({width: this.refs.root.offsetWidth}); 
          };
       }
       handleBarClick(element, id){ 
          console.log(`The bin ${element.text} with id ${id} was clicked`);
        }
        render() {
          return (
              <div ref='root' className={this.props.chartProps.chartParentDivCls}>

              <Chart
                width={this.props.chartProps.width}
                height={this.props.chartProps.height}
                chartType={this.props.chartProps.chartType}
                loader={<div>Loading Chart</div>}
                data={this.state.chartData}
                options={
                    this.props.chartProps.options
                }
                // For tests
                //rootProps={{ 'data-testid': '2' }}
              />
              </div>


                  
          );
        }
 }
 export default ChartComponent