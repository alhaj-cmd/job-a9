






import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        id: "A1",
        name: "HTML & CSS",
        marks: 50
    },
    {
        id: "A2",
        name: "Framework",
        marks: 60
    },
    {
        id: "A3",
        name: "Responsive",
        marks: 57
    },
    {
        id: " A4",
        name: "Problem Solving",
        marks: 60
    },
    {
        id: "A5",
        name: "JS DOM",
        marks: 48
    },
    {
        id: "A6",
        name: "API",
        marks: 56
    },
    {
        id: "A7",
        name: "Debug",
        marks: 60
    },
    {
        id: "A8",
        name: "React",
        marks: 59
    }
];

export default function App() {
    return (
        <div className="lg:py-20 lg:px-20 justify-items-center">
            <AreaChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
}