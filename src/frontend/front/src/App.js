import React from "react";
import Context from "./Context";
import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";
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
        {title: 'Следующее кнопка', id: 2, picked: false},
        {title: 'Еще одна кнопка', id: 3, picked: false},
        {title: 'Давай-давай', id: 4, picked: false},
        {title: 'Влада', id: 5, picked: false},
        {title: 'Влада2', id: 6, picked: false}
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
