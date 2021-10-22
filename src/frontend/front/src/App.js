import React from "react";
import Context from "./Context";
import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";
import InfoMenu from "./InfoMenu/InfoMenu";
import Loader from "./Loader";
import VerticalMenu from "./VerticalMenu/VerticalMenu";

function App() {
  const [items, setItems] = React.useState(
    [
      {title: 'Панель показателей', id: 0, picked: true},
      {title: 'Визуализация плана', id: 1, picked: false},
      {title: 'Проблемы', id: 2, picked: false},
    ]);
  const [options, setOptions] = React.useState(
      [
        {title: 'Сделать хорошо', id: 0, picked: false},
        {title: 'Сделать плохо', id: 1, picked: false},
      ]);
  const [infos, setInfos] = React.useState(
    [
      {disk: 'Тест0', id: 0, data: 0, dangerTear: 'normal'},
      {disk: 'Тест0', id: 0, data: 0, dangerTear: 'normal'},
      {disk: 'Тест5', id: 15, data: 5, dangerTear: 'warning'},
      {disk: 'Тест5', id: 25, data: 5, dangerTear: 'danger'},
    ]);

  const [loading, setLoading] = React.useState(true);

  function pickItem(id){
    setItems(
      items.map(item =>{
        item.picked = (item.id === id);
        return item;
      })
    )
  }

  function pickOption(id){
    setOptions(
      options.map(option =>{
        option.picked = (option.id === id);
        return option;
      })
    )
  }

  return (
    <Context.Provider value={{pickItem, pickOption}}>
      <div>
        <HorizontalMenu items={items}/>
      </div>
      <div className='wrapper'>
        <div className='map'>
          {loading && <Loader/>}
        </div>
        <div className='side-menu'>
          <div className='legent'>
            <InfoMenu infos={infos}/>
          </div>
          <div className='vertical-menu-div'>
            <VerticalMenu options={options}/>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
