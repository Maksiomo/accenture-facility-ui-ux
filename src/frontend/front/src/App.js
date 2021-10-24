import axios from "axios";
import React, { useEffect } from "react";
import AllInfo from "./AllInfo";
import BarGraphics from "./BarGraphics";
import Context from "./Context";
import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";
import InfoMenu from "./InfoMenu/InfoMenu";
import PlanOptionMenu from "./OptionsMenu/PlanOptionsMenu";
import VerticalMenu from "./VerticalMenu/VerticalMenu";
import LocalMenuTwo from "./LocalMenuTwo/LocalMenuTwo";
import LocalMenuThree from "./LocalMenuThree/LocalMenuThree";
import AllInfoLoad from "./AllInfoLoad";
import InfoMenuLoad from "./InfoMenuLoad/InfoMenuLoad";

function App() {
  const [items, setItems] = React.useState([
    { title: "Панель показателей", id: 0, picked: true },
    { title: "Визуализация плана", id: 1, picked: false },
    { title: "Проблемы", id: 2, picked: false },
  ]);
  const [localItemsTwo, setLocalItemsTwo] = React.useState([
    { title: "Визуализация загрузки агрегатов", id: 0, picked: false },
    { title: "Визуализация загрузки складов", id: 1, picked: true },
  ]);
  const [localItemsThree, setLocalItemsThree] = React.useState([
    { title: "Проблемы загрузки агрегатов", id: 0, picked: false },
    { title: "Проблемы загрузки складов", id: 1, picked: true },
  ]);
  const [options, setOptions] = React.useState([
    { title: "Показать более опасные", id: 0, picked: true },
    { title: "Показать все", id: 1, picked: false },
  ]);
  const [planOptions, setPlanOptions] = React.useState([
    { title: "Смотреть выгрузку по...", id: 0, picked: false },
    { title: "Сверить по дате", id: 1, picked: false },
  ]);
  const [graphs, setGraphs] = React.useState([]);
  const [infos, setInfos] = React.useState([]);
  const [infosLoad, setInfosLoad] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [plan, setPlan] = React.useState(false);
  const [problem, setProblem] = React.useState(false);
  const [two, setTwo] = React.useState(true);
  const [three, setThree] = React.useState(true);
  const [allInfo, setAllInfo] = React.useState();
  const [allInfoLoad, setAllInfoLoad] = React.useState();

  useEffect(() => {
    getDangerInfo();
    getAllLoad();
    getKPEInfo();
  }, []);

  function getAllLoad() {
    sendRequest("http://127.0.0.1:5555/dataProvider/analyzeLoad").then(
      (res) => {
        setInfosLoad(
          res.data.sort(function (a, b) {
            return b.averageDangerTier - a.averageDangerTier;
          })
        );
      }
    );
  }

  function getDangerInfo() {
    sendRequest("http://127.0.0.1:5555/dataProvider/analyzeStock").then(
      (res) => {
        setInfos(
          res.data
            .filter((item) => item.averageDangerTier > 1)
            .sort(function (a, b) {
              return b.averageDangerTier - a.averageDangerTier;
            })
        );
      }
    );
  }

  function getAllInfo() {
    sendRequest("http://127.0.0.1:5555/dataProvider/analyzeStock").then(
      (res) => {
        setInfos(
          res.data.sort(function (a, b) {
            return b.averageDangerTier - a.averageDangerTier;
          })
        );
      }
    );
  }

  function getKPEInfo() {
    sendRequest("http://127.0.0.1:5555/dataProvider/КПЭ/getTableData").then(
      (res) => {
        let result = [];
        for (const data of res.data) {
          let flag = false;
          const dataArr = [
            data.date1value,
            data.date2value,
            data.date3value,
            data.date4value,
            data.date5value,
          ];
          const dateArr = [
            "30.09.2021",
            "01.10.2021",
            "04.10.2021",
            "05.10.2021",
            "06.10.2021",
          ];
          for (const final of result) {
            if (data.administrativeMetric === final.parentMetric) {
              final.paramMetrics.push({
                metricName: data.metricParam,
                data: dataArr,
                date: dateArr,
              });
              flag = true;
            }
          }
          if (!flag) {
            result.push({
              parentMetric: data.administrativeMetric,
              paramMetrics: [
                {
                  metricName: data.metricParam,
                  data: dataArr,
                  date: dateArr,
                },
              ],
            });
          }
        }
        setGraphs(result);
      }
    );
  }

  async function sendRequest(url) {
    return await axios.get(url);
  }

  function showPanel() {
    setPanel(true);
    setPlan(false);
    setProblem(false);
  }

  function showPlan() {
    setPanel(false);
    setPlan(true);
    setProblem(false);
    setPlanOptions(
      planOptions.map((option) => {
        option.picked = false;
        return option;
      })
    );
  }

  function showProblem() {
    setPanel(false);
    setPlan(false);
    setProblem(true);
    setOptions(
      options.map((option) => {
        option.picked = false;
        return option;
      })
    );
  }

  function pickItem(id) {
    setItems(
      items.map((item) => {
        item.picked = item.id === id;
        if (id === 0) {
          showPanel();
        }
        if (id === 1) {
          showPlan();
        }
        if (id === 2) {
          showProblem();
        }
        return item;
      })
    );
  }

  function pickOption(id) {
    setOptions(
      options.map((option) => {
        option.picked = option.id === id;
        if (id === 0) {
          getDangerInfo();
        }
        if (id === 1) {
          getAllInfo();
        }
        return option;
      })
    );
  }

  function pickInfo(info) {
    setAllInfo(info);
  }

  function pickInfoLoad(info) {
    setAllInfoLoad(info);
  }

  function pickLocalItemTwo(id) {
    setLocalItemsTwo(
      localItemsTwo.map((item) => {
        item.picked = item.id === id;
        if (id === 0) {
          setTwo(false);
        }
        if (id === 1) {
          setTwo(true);
        }
        return item;
      })
    );
  }

  function pickLocalItemThree(id) {
    setLocalItemsThree(
      localItemsThree.map((item) => {
        item.picked = item.id === id;
        if (id === 0) {
          setThree(false);
        }
        if (id === 1) {
          setThree(true);
        }
        return item;
      })
    );
  }

  function pickPlanOption(id) {
    setPlanOptions(
      planOptions.map((option) => {
        option.picked = option.id === id;
        return option;
      })
    );
  }

  function updateInfo(id) {
    setInfos(infos);
  }

  const [graph, setGraph] = React.useState(true);

  function showGraph() {
    setPanel(false);
    setPlan(false);
    setProblem(false);
    setGraph(true);
    setGraphs(
      graphs.map((gr) => {
        return gr;
      })
    );
  }

  function pickGraph(id) {}

  return (
    <Context.Provider
      value={{
        pickItem,
        pickOption,
        pickPlanOption,
        pickInfo,
        pickGraph,
        pickLocalItemTwo,
        pickLocalItemThree,
        updateInfo,
        pickInfoLoad,
      }}
    >
      <div>
        <HorizontalMenu items={items} />
        {plan ? <LocalMenuTwo items={localItemsTwo} /> : null}
        {problem ? <LocalMenuThree items={localItemsThree} /> : null}
      </div>
      <div className="wrapper">
        <div className="map">
          {panel && graph ? <BarGraphics data={graph} /> : null}
          {problem ? (
            <div className="inner-map">
              {three && allInfo ? <AllInfo item={allInfo} /> : null}
              {!three && allInfoLoad ? (
                <AllInfoLoad item={allInfoLoad} />
              ) : null}
            </div>
          ) : null}
        </div>
        {problem ? (
          <div className="side-menu">
            <div className="legent">
              {three ? (
                <InfoMenu infos={infos} />
              ) : (
                <InfoMenuLoad infos={infosLoad} />
              )}
            </div>
            <div className="vertical-menu-div">
              {three ? (
                <VerticalMenu options={options} />
              ) : (
                <div className="dark-block"></div>
              )}
              
            </div>
            {three ? (
              <div className="search-bar">
              <input type="text" placeholder="Поиск..." />
              </div>
              ) : (
              <div className="search-bar">
              <input type="text" placeholder="Поиск..." />
              </div>
            )}
          </div>
        ) : null}
        
        {plan ? (
          <div className="side-menu">
            <div className="vertical-menu-div">
              <PlanOptionMenu options={planOptions} />
            </div>
          </div>
        ) : null}
      </div>
    </Context.Provider>
  );
}

export default App;
