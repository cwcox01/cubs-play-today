import React from "react";
import { useState, useEffect } from "react";

// importing MLB module css
import styles from "/styles/Mlb.module.css";

const todayDate = new Date().toLocaleDateString("en-US");

export default function Mlbschedule() {
  // setting a space variable for Away/Home Record between the string home/away record and the actual record
  const spaceRecord = " ";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const scheduleUrl =
    "https://statsapi.mlb.com/api/v1/schedule?lang=en&sportId=1&hydrate=team(venue(timezone)),venue(timezone),game(seriesStatus,seriesSummary,tickets,promotions,sponsorships,content(summary,media(epg))),seriesStatus,seriesSummary,linescore,tickets,event(tickets),radioBroadcasts,broadcasts(all)&season=2023&startDate=2023-02-25&endDate=2023-10-01&teamId=112&eventTypes=primary&scheduleTypes=games,events,xref";

  useEffect(() => {
    fetch(scheduleUrl)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  var date = new Date();
  var year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  // Generate yyyy-mm-dd date string
  const today = year + "-" + month + "-" + day;

  // Find the first game involving the Cubs that is being played today
  const cubsGameToday = data?.dates
    .flatMap((date) => date.games)
    .find((game) => {
      const isCubsGame =
        game.teams.away.team.id === 112 || game.teams.home.team.id === 112;
      const isToday = game.officialDate === today;
      return isCubsGame && isToday;
    });

  const cubsTimeToday = {
    gameDate: new Date(cubsGameToday?.gameDate),
    // Other game information...
  };

  const gameTime = cubsTimeToday.gameDate.toLocaleTimeString("en-US", {
    localeMatcher: "best fit",
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateOfGame = cubsTimeToday.gameDate.toLocaleDateString("en-US", {
    localeMatcher: "best fit",
    timeZone: "America/New_York",
  });

  const cubsAtHome = cubsGameToday?.teams.home.team.id === 112;

  const cubsResults = cubsAtHome
    ? cubsGameToday?.teams.home
    : cubsGameToday?.teams.away;

  const cubsWon = cubsResults?.isWinner;

  return (
    <div className="pt-3">
      <div className="pt-3">
        {!loading && cubsGameToday ? (
          <div className={`white-text-color ${styles["chi-game"]}`}>
            <div>
              <p className="schedule-standings-header ">
                Game Date: {dateOfGame}{" "}
              </p>
              <p>Game Time: {gameTime} EST</p>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <p>Home</p>
                <p>{cubsGameToday.teams.home.team.name}</p>
                <p>
                  Record:{spaceRecord}
                  {cubsGameToday.teams.home.leagueRecord.wins}-
                  {cubsGameToday.teams.home.leagueRecord.losses}
                </p>
                <p>Score: {cubsGameToday.teams.home.score}</p>
              </div>
              <div className="d-flex flex-column ps-5">
                <p>Away</p>
                <p>{cubsGameToday.teams.away.team.name}</p>
                <p>
                  Record:{spaceRecord}
                  {cubsGameToday.teams.away.leagueRecord.wins}-
                  {cubsGameToday.teams.away.leagueRecord.losses}
                </p>
                <p>Score: {cubsGameToday.teams.away.score}</p>
              </div>
            </div>
            <div className="pt-1">
              <p>Game Status: {cubsGameToday.status.detailedState}</p>
              <div>
                <table className="schedule-standings-header innings-table">
                  <tr>
                    <th className="w-25">Teams</th>
                    <th className="pe-0">R</th>
                    <th className="pe-0">H</th>
                    <th className="pe-0">E</th>
                    <th className="pe-0">LOB</th>
                  </tr>
                  <tr>
                    <td className="ps-2">
                      {cubsGameToday.teams.away.team.teamName}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.away.runs}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.away.hits}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.away.errors}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.away.leftOnBase}
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-2">
                      {cubsGameToday.teams.home.team.teamName}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.home.runs}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.home.hits}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.home.errors}
                    </td>
                    <td className="ps-2">
                      {cubsGameToday.linescore.teams.home.leftOnBase}
                    </td>
                  </tr>
                </table>
              </div>
              {cubsWon && (
                <div
                  className={`white-background-color cubs-flag mt-3 d-flex justify-content-center ${styles["cubs-flag-mlb"]}`}
                >
                  <h1 className="mb-0">W</h1>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p className="white-text-color">Todays Date: {todayDate}</p>
            <p className="white-text-color">No cubs game today.</p>
          </div>
        )}
      </div>
    </div>
  );
}
