import React, { Component } from "react";

class Orders extends Component {
  render() {
    const orders = [
      { id: "789", date: "2018-06-15T16:00:00Z", status: "Processing" },
      { id: "456", date: "2018-06-10T15:55:00Z", status: "Shipped" },
      { id: "123", date: "2018-06-01T16:00:00Z", status: "Delivered" }
    ];
    return (
      <div>
        <div className="row mt-3 ml-1">
          <div className="col-12">
            <h4>
              <strong>Orders:</strong>
            </h4>
          </div>
          <div className="row col-12" style={{ backgroundColor: "white" }}>
            <div className="col-md-2">
              <div className="mb-3 mt-1">
                <strong>#</strong>
              </div>
              {orders.map((order, index) => (
                <div className="order-item" key={index}>
                  <a href={`/order/${order.id}`}>{order.id}</a>
                </div>
              ))}
            </div>

            <div className="col-md-3">
              <div className="mb-3 mt-1">
                <strong>Date</strong>
              </div>
              {orders.map((order, index) => (
                <div className="order-item" key={index}>
                  {order.date}
                </div>
              ))}
            </div>
            <div className="col-md-3">
              <div className="mb-3 mt-1">
                <strong>Status</strong>
              </div>
              {orders.map((order, index) => (
                <div
                  className={`order-item ${order.status.toLowerCase()}`}
                  key={index}
                >
                  {order.status}
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <div className="mb-3 mt-1">
                <strong>Actions</strong>
              </div>

              {orders.map((order, index) => (
                <div className="order-item" key={index}>
                  <button
                    type="button"
                    className="btn btn-outline-primary mb-1"
                    onClick={() => {
                      window.location.href = `/order/${order.id}`;
                    }}
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
