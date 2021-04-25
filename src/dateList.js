import React, { Component } from "react";
import PostData from "./data/posts.json";
  
class DateList extends Component {
  render() {
    return (
      <div>
        {PostData.map(postDetail => {
          return (
            <div>
            
              <p>{postDetail.orderStage==="   "?<div>
              <p>{postDetail.orderStage}</p>
              <p>{postDetail.orderName}</p>
              <p>{postDetail.orderId}</p>
              <p>{postDetail.orderDate}</p></div>
  
              :""

              }</p>
              
              
            </div>
          );
        })}
      </div>
    );
  }
}

export default DateList;
