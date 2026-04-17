import React, { useState, useEffect } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const RealTimeAreaChart = () => {
  const [data, setData] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      value: Math.floor(Math.random() * 100),
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const nextValue =
          prev[prev.length - 1].value + (Math.random() * 10 - 5);

        const newPoint = {
          value: Math.max(10, Math.min(100, nextValue)), // keep in range
        };

        const updated = [...prev, newPoint];

        // keep fixed length (like trading charts)
        if (updated.length > 20) updated.shift();

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // trend color (green/red)
  const isUp = data[data.length - 1].value > data[0].value;
  const color = isUp ? "#22c55e" : "#ef4444";

  return (
    <div className="bg-white rounded-2xl p-4 w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          
          {/* Dynamic Gradient */}
          <defs>
            <linearGradient id="liveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4}/>
              <stop offset="100%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill="url(#liveGradient)"
            dot={false}
            activeDot={false}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeAreaChart;