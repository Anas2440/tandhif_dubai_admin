import React, { useContext, useEffect, useState } from "react";
import "../DashBoard/DashBoard.css";
import { useNavigate } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";
import axios from "../../Schemas/Api";
import { RiUserSettingsLine } from "react-icons/ri";
import Loder from "../Loder/Loder";
import { axisClasses } from "@mui/x-charts";
import { GlobalContext } from "../../GlobalContext";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import MissionModal from "../../Modals/MissionModal/MissionModal";


const DashBoard = () => {
  const [Count, setCount] = useState("");
  const [loading, setloading] = useState(false);
    const [Delete, setDelete] = useState(false);
  console.log(Count, "Count");
  const { theme, setTheme } = useContext(GlobalContext);

  const MyToken = localStorage.getItem("TOKEN");

  const getDashboard = async () => {
    setloading(true);
    try {
      const res = await axios.get("/admin-home-screen", {
        headers: {
          "Content-Type": "application/json",
          Authorization: MyToken,
        },
      });

      console.log(res, "ress");
      setCount(res?.data?.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);


  const handlOpen = () => {
    setDelete(true);
  };


  const chartSetting = {
    width: 1000,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };

  const chartS = {
    width: 1000,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const valueFormatter = (value) => value.toLocaleString();
  const customColors = ["#d1a3ff", "rgb(103, 103, 247)", "#cc65fe", "#431A35"];
  const transformedData =
    Count?.monthly_booking_counts?.map((item) => ({
      MonthYear: item.monthYear,
      // month: item.month,
      count: item.count,
    })) || [];

  const MonthlyUserData =
    Count?.monthly_user_counts?.map((item) => ({
      MonthYear: item.monthYear,
      // month: item.month,
      count: item.count,
    })) || [];

  // const monthLabels = Count?.monthly_booking_counts?.map((item) =>
  //   new Date(item.year, item.month - 1).toLocaleString("default", {
  //     month: "long",
  //   })
  // );

  // Extract counts

  // useEffect(() => {
  //   const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const updateTheme = (e) => setTheme(e.matches ? "dark" : "light");

  //   setTheme(darkModeQuery.matches ? "dark" : "light");
  //   darkModeQuery.addEventListener("change", updateTheme);
  //   return () => darkModeQuery.removeEventListener("change", updateTheme);
  // }, []);
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const goToPrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonth);
  };

  const today = () => {
    setCurrentDate(new Date());
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayIndex = () => {
    let index = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    return index === 0 ? 6 : index - 1; // adjust for Monday start
  };

  const generateCalendarCells = () => {
    const totalDays = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const blanks = Array(firstDayIndex()).fill(null);
    const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
    return [...blanks, ...daysArray];
  };

  const cells = generateCalendarCells();

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };
  const navigate = useNavigate();

  return (
    <>

      <MissionModal
            Delete={Delete}
            onHide={() => setDelete(false)}
            setDelete={setDelete}
      
          />
    <div className="table_main_Divv">
    <div className="Interventions-Admin-profile-div">
    <span className="Mian-Interventions">Interventions</span>
    <span className="current-text">
          {currentDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </span>
          </div>
    <div className="calendar-header mb-3">
        {/* <span className="Mian-Interventions">Interventions</span> */}
        <div className="Main-div-in-today">
          <div className="Main-dii"></div>
        <div className="calendar-actions">
          <div className="main-div-cel">
          <button onClick={goToPrevMonth}>{'<'}</button>
          <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
          <button onClick={goToNextMonth}>{'>'}</button>
          </div>
        </div>
        <button className="Main-div-btn" onClick={today}>Aujourd'hui</button>
        </div>
        <div className="calendar-legend">
          <span className="badge blue">Attribuée</span>
          <span className="badge yellow">En attente d’attribution</span>
          <span className="badge green">Mission Terminée</span>
        </div>
      </div>
    <div className="calendar-wrapper">
    

      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}

        {cells.map((day, idx) =>
          day ? (
            <div key={idx} className={`calendar-cell ${isToday(day) ? 'today' : ''}`}>
              <span>{day}</span>
              <span onClick={handlOpen} className="add-btn">+</span>
            </div>
          ) : (
            <div key={idx} className="calendar-cell empty"></div>
          )
        )}
      </div>
    </div>

    </div>

      {/* <div style={{ display: "contents" }} className={`app ${theme}`}>
        <div className="table_main_Divv">
          <div className="four-card-product">
            <div className="Total-Main-user-list-an">
              <div className="Total-Main-user-list-and">
                <div onClick={() => navigate("/Users")} className="boss-div">
               
                  <div className="main-item-div">
                    <span className="title-products">Users</span>
                    <FaUserGroup className="Main-ico-in" />
                  </div>
                  <div className="Main-box-small">
                    <div className="Main-count">
                      <span className="Main-totel-count"> Total User</span>
                    </div>
                    <div className="Main-count">
                      <span className="totel-userCount">
                        {Count?.userCount ? Count?.userCount : "0"}
                      </span>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* {!loading && <div></div>}
      {loading && (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <div className="Main-lodaer">
              <Loder />
            </div>
          </Backdrop>
        </div>
      )} */}
    </>
  );
};

export default DashBoard;
