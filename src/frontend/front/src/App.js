import axios from "axios";
import React, { useEffect } from "react";
import AllInfo from "./AllInfo";
import Context from "./Context";
import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";
import InfoMenu from "./InfoMenu/InfoMenu";
import Loader from "./Loader";
import PlanOptionMenu from "./OptionsMenu/PlanOptionsMenu";
import VerticalMenu from "./VerticalMenu/VerticalMenu";

function App() {
  const [items, setItems] = React.useState([
    { title: "Панель показателей", id: 0, picked: true },
    { title: "Визуализация плана", id: 1, picked: false },
    { title: "Проблемы", id: 2, picked: false },
  ]);
  const [options, setOptions] = React.useState([
    { title: "Показать более опасные", id: 0, picked: true },
    { title: "Показать все", id: 1, picked: false },
  ]);
  const [planOptions, setPlanOptions] = React.useState([
    { title: "Смотреть выгрузку по...", id: 0, picked: false },
    { title: "Сверить по дате", id: 1, picked: false },
  ]);
  const [infos, setInfos] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [plan, setPlan] = React.useState(false);
  const [problem, setProblem] = React.useState(false);
  const [allInfo, setAllInfo] = React.useState();

  useEffect(() => {
    getDangerInfo()
  }, []);

  function getDangerInfo(){
    setLoading(true);
    sendRequest("http://127.0.0.1:5555/dataProvider/analyzeStock").then(res =>{
      setInfos(res
        .data
        .filter(item => item.dangerTier > 1)
        .sort(function(a, b){return b.dangerTier - a.dangerTier})
        )
    });
  }

  function getAllInfo(){
    setLoading(true);
    sendRequest("http://127.0.0.1:5555/dataProvider/analyzeStock").then(res =>{
      setInfos(res
        .data
        .sort(function(a, b){return b.dangerTier - a.dangerTier})
        )
    });
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
        if(id === 0){
          getDangerInfo();
        }
        if(id === 1){
          getAllInfo();
        }
        return option;
      })
    );
  }

  function pickInfo(info) {
    setAllInfo(info);
  }

  function pickPlanOption(id) {
    setPlanOptions(
      planOptions.map((option) => {
        option.picked = option.id === id;
        return option;
      })
    );
  }

  return (
    <Context.Provider value={{ pickItem, pickOption, pickPlanOption, pickInfo }}>
      <div>
        <HorizontalMenu items={items} />
      </div>
      <div className="wrapper">
        <div className="map">
          <div className='inner-map'>{(problem && allInfo) ? <AllInfo item={allInfo}/> : null}</div>
        </div>
        {problem ? (
          <div className="side-menu">
            <div className="legent">
              <InfoMenu infos={infos} />
            </div>
            <div className="vertical-menu-div">
              <VerticalMenu options={options} />
            </div>
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
