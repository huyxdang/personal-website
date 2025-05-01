import React, { useEffect, useState } from "react";

const Progress = () => {
  const [totalHours, setTotalHours] = useState(null);

  useEffect(() => {
    const sheetId = '19LiUceHbFpiuuNgaGCONlaPZSCtsYm6xy1CW6vBMyj0/edit?gid=1785954546#gid=1785954546';
    const apiKey = 'AIzaSyArWB2UcjE1wHJPWQfnzqMhO-1NMyjrlYw';
    const range = 'Sheet1!B2:B';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let total = 0;
        data.values.forEach(row => {
          const hours = parseFloat(row[0]);
          if (!isNaN(hours)) total += hours;
        });
        setTotalHours(total);
      })
      .catch(err => {
        console.error("Failed to fetch hours:", err);
        setTotalHours("Error");
      });
  }, []);

  return (
    <div style={{ fontFamily: "Lexend Deca, sans-serif", padding: "20px" }}>
      <h2>🧠 10,000 Hours Challenge</h2>
      <p>Total Hours Logged: {totalHours !== null ? totalHours : "Loading..."}</p>
    </div>
  );
};

export default Progress;
