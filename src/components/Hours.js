import React, { useEffect, useState } from "react";
import Container from "../styles/Container";
import BrownLink from "../styles/BrownLink";

function Hours() {
  const [totalHours, setTotalHours] = useState(null);
  const [lastLogged, setLastLogged] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);
  const [avgWeek, setAvgWeek] = useState(null);

  useEffect(() => {
    const sheetId = "19LiUceHbFpiuuNgaGCONlaPZSCtsYm6xy1CW6vBMyj0";
    const apiKey = "AIzaSyArWB2UcjE1wHJPWQfnzqMhO-1NMyjrlYw";
    const totalHoursRange = "Summary!B2";
    const lastLoggedRange = "Summary!B3";
    const totalLoggedDaysRange = "Summary!B4";
    const avgWeekRange = "Summary!B5";

    const fetchData = async () => {
      try {
        const [hoursRes, dateRes, totalRes, avgRes] = await Promise.all([
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${totalHoursRange}?key=${apiKey}`
          ),
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${lastLoggedRange}?key=${apiKey}`
          ),
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${totalLoggedDaysRange}?key=${apiKey}`
          ),
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${avgWeekRange}?key=${apiKey}`
          ),
        ]);

        const hoursData = await hoursRes.json(); // Total Hours
        const dateData = await dateRes.json(); // Latest Update
        const totaldaysData = await totalRes.json(); // Total Days
        const avgweekData = await avgRes.json(); // Average hours for last 7 days

        const totalH = parseFloat(hoursData?.values?.[0]?.[0]);
        const last = dateData?.values?.[0]?.[0];
        const totalD = parseFloat(totaldaysData?.values?.[0]?.[0]);
        const rawAvg = avgweekData?.values?.[0]?.[0];
        const avgW =
          rawAvg !== undefined && !isNaN(parseFloat(rawAvg))
            ? parseFloat(parseFloat(rawAvg).toFixed(2))
            : "N/A";

        // average hr perday, rounded to 2 d.p.
        const averageHoursPerDay =
          totalD > 0 ? parseFloat((totalH / totalD).toFixed(2)) : "N/A";

        // # of days till 10k
        const GOAL_HOURS = 10000;
        const daysUntilFinish =
          totalD != "N/A" ? Math.round(GOAL_HOURS / averageHoursPerDay) : "N/A";

        if (!isNaN(totalH)) setTotalHours(totalH);
        if (last) setLastLogged(last);
        if (daysUntilFinish !== "N/A") setDaysLeft(daysUntilFinish);
        if (avgW) setAvgWeek(avgW);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setTotalHours("Error");
        setLastLogged("N/A");
        setDaysLeft("N/A");
        setAvgWeek("N/A");
      }
    };

    fetchData();
  }, []);

  return (
    <section id="hours" className="page-section">
      <Container>
        {/* Intro Section */}
        <div className="intro-block">
          <h1>10K AI Challenge</h1>
          <h3>
            A public commitment to invest 10,000 hours into learning and
            building with AI.
          </h3>
          <p>
            I've always been fascinated by how technology enables people to
            create meaningful impact with just a laptop and an internet
            connection. Now, with AI, the possibilities for dreaming and
            building have expanded even more. I believe in technology’s power to
            inspire and transform lives— and to maximize the impact I can make,
            I want to be at the forefront of it all.
          </p>
          <p>
            My undergrad ML courses gave me a strong theoretical foundation, but
            I realized that knowledge without practice comes and goes. This
            challenge is my way of staying committed to deep, hands-on learning
            — reimplementing models, building tools, contributing to OS
            projects.
          </p>
          <p>
            If you're reading this and the metrics below look suspiciously
            stagnant, feel free to call me out. Soon, I’ll add a “nag me” button
            where you can ping my inbox when progress stalls 😅.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="metrics-block">
          <div>
            <h2>⏱ Hours Logged</h2>
            <p
              className="metric-value"
              style={{ textAlign: "center", fontSize: "1.4rem" }}
            >
              {totalHours !== null ? totalHours : "Loading..."}
            </p>
          </div>
          <div>
            <h2>🗓 Last Logged</h2>
            <p
              className="metric-value"
              style={{ textAlign: "center", fontSize: "1.4rem" }}
            >
              {lastLogged || "Loading..."}
            </p>
          </div>
          <div>
            <h2>⛰️ Avg. Hours (last 7 days)</h2>
            <p
              className="metric-value"
              style={{ textAlign: "center", fontSize: "1.4rem" }}
            >
              {avgWeek || "Loading..."}
            </p>
          </div>
        </div>

        <p>
          Got other metrics I should (or shouldn't) track?{" "}
          <BrownLink href="mailto:xhuydng@gmail.com">Let me know!</BrownLink>
        </p>

        {/* Learning Section */}
        <div>
          <h2>📚 My Learning</h2>
          <p>
            This section documents what I’ve learned — through teaching,
            writing, and building. While I’ll occasionally link external
            resources, the focus is on materials I’ve created to deepen and
            share my understanding of AI.
          </p>
          <ul>
            <li>
              YouTube –{" "}
              <a
                href="https://www.youtube.com/watch?v=rqddGo22b0U"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explaining Logistic Regression [First Video]
              </a>
            </li>
            {/* Add more entries as you go */}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Hours;
