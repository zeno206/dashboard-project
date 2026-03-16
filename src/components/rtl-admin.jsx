import React from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  XAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

function Rtladmin() {
  const lineData = [
    { name: "1", value: 5 },
    { name: "2", value: 10 },
    { name: "3", value: 7 },
    { name: "4", value: 20 },
    { name: "5", value: 8 },
    { name: "6", value: 25 },
    { name: "7", value: 18 },
    { name: "8", value: 30 },
  ];

  const data = [
    { month: "Jan", transactions: 120 },
    { month: "Feb", transactions: 90 },
    { month: "Mar", transactions: 140 },
    { month: "Apr", transactions: 70 },
    { month: "May", transactions: 160 },
    { month: "Jun", transactions: 130 },
    { month: "Jul", transactions: 180 },
    { month: "Aug", transactions: 150 },
  ];

  const pieData = [
    { name: "balance", value: 70 },
    { name: "left", value: 30 },
  ];

  const COLORS = ["#3b48e7", "#eee"];

  return (
    <div className="rtl-admin">
      <div className="search-bar">
        <div className="sbar-1">
          <i class="ri-search-2-line"></i>
          <input className="brinput" type="text" placeholder="Explore data" />
        </div>
        <div className="sbar-2">
          <img
            className="sbar-img-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI97lBrpfjG7wo0zytKSKSStwS29FfYYL4Q&s"
            alt=""
          />
          <i class="ri-mail-unread-line"></i>
          <i class="ri-notification-3-line"></i>
          <img
            className="sbar-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvHS-NMRe8w_o02cBNPe-O6byM08hxO2FdW8kYIOZVg&s"
            alt=""
          />
          <i class="ri-align-justify"></i>
        </div>
      </div>
      <div className="rtl-bar">
        <div className="rtlbox-1">
          <h3>Current Balance</h3>

          <div className="circle-chart">
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={90}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>

            <div className="center-text">$10k</div>
          </div>

          <h2>$50,150.00</h2>
        </div>
        <div className="rtlbox-2">
          <h3>Total Transaction</h3>

          <div className="line-chart">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />
                <Line
                  type="monotone"
                  dataKey="transactions"
                  stroke="#8e2de2"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="lst-stn">
        <div className="trsbox-1">
          <div className="cardd">
            <div className="left">
              <h4>Transaction</h4>

              <h1>13,921$</h1>

              <div className="line"></div>

              <p>…se in 28 Days 50%</p>
            </div>

            <div className="right">
              <div className="icon">
                <i class="ri-exchange-dollar-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="salebx-1">
          <div className="cardd-2">
            <div className="left">
              <h4>Data</h4>

              <h1>75%</h1>

              <div className="line"></div>

              <p>…se in 28 Days 50%</p>
            </div>

            <div className="right">
              <div className="icon">
                <i class="ri-database-2-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="userbx-1">
          <div className="cardd-3">
            <div className="left">
              <h4>User</h4>

              <h1>17,879</h1>

              <div className="line"></div>

              <p>…se in 28 Days 50%</p>
            </div>

            <div className="right">
              <div className="icon">
                <i class="ri-user-3-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rtladmin;
