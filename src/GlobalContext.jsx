import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [Ddata, setDdata] = useState();
  const [GetUSer, setGetUSer] = useState();
  const [LinkSave, setLinkSave] = useState();
  const [Texts, setTexts] = useState("");
  const [DeleteModel, setDeleteModel] = useState("");
  const [DeleteCar, setDeleteCar] = useState("");
  const [DeleteColor, setDeleteColor] = useState("");
  const [FeaturesDe, setFeaturesDe] = useState("");
  const [DeleteYear, setDeleteYear] = useState("");
  const [EditYear, setEditYear] = useState("");
  const [MainCarDe, setMainCarDe] = useState("");
  const [AcsRej, setAcsRej] = useState("");
  const [VeriFiData, setVeriFiData] = useState("");
  const [UserData, setUserData] = useState("");
  const [BadgeId, setBadgeId] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider
      value={{
        Ddata,
        theme,
        setTheme,
        setDdata,
        GetUSer,
        setGetUSer,
        LinkSave,
        setLinkSave,
        Texts,
        setTexts,
        DeleteCar,
        setDeleteCar,
        DeleteModel,
        setDeleteModel,
        DeleteColor,
        setDeleteColor,
        EditYear,
        setEditYear,
        DeleteYear,
        setDeleteYear,
        FeaturesDe,
        setFeaturesDe,
        MainCarDe,
        setMainCarDe,
        AcsRej,
        setAcsRej,
        VeriFiData,
        setVeriFiData,
        UserData,
        setUserData,
        BadgeId,
        setBadgeId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
