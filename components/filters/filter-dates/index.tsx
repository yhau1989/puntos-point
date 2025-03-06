import { useState } from 'react';

const ITEM_SELECTED = 'bg-point-purple-light rounded-md font-semibold px-2 py-1 cursor-pointer text-[#48454E]';
const ITEM = 'hover:bg-point-purple-light rounded-md font-semibold px-2 py-1 cursor-pointer text-[#48454E]';
const WEEK = ['Todo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const MONTH = ['Todo', 'Octubre', 'Noviembre', 'Dociembre', 'Enero', 'Febrero', 'Marzo'];
const YEAR = [
  'Todo',
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export default function FilterDates() {
  const [optionsSelected, setOptionsSelected] = useState({
    itemSelected: 'HOY',
    weekSelected: 'Todo',
    monthSelected: 'Todo',
    yearSelected: 'Todo',
  });

  const changeSelected = (option: string) => {
    if (['7D', '6M', '1A'].includes(option)) {
      setOptionsSelected({ itemSelected: option, weekSelected: 'Todo', monthSelected: 'Todo', yearSelected: 'Todo' });
    } else {
      setOptionsSelected({ ...optionsSelected, itemSelected: option });
    }
  };
  const changeCssByItemSelected = (item: string) => (optionsSelected.itemSelected === item ? ITEM_SELECTED : ITEM);

  const changeWeekSelected = (option: string) => setOptionsSelected({ ...optionsSelected, weekSelected: option });
  const changeWeekCssByItemSelected = (item: string) => (optionsSelected.weekSelected === item ? ITEM_SELECTED : ITEM);

  const changeMonthSelected = (option: string) => setOptionsSelected({ ...optionsSelected, monthSelected: option });
  const changeMonthCssByItemSelected = (item: string) =>
    optionsSelected.monthSelected === item ? ITEM_SELECTED : ITEM;

  const changeYearSelected = (option: string) => setOptionsSelected({ ...optionsSelected, yearSelected: option });
  const changeYearCssByItemSelected = (item: string) => (optionsSelected.yearSelected === item ? ITEM_SELECTED : ITEM);

  return (
    <div>
      <div className="flex md:gap-8 justify-between md:justify-start items-center text-sm">
        <div className={changeCssByItemSelected('HOY')} onClick={() => changeSelected('HOY')}>
          HOY
        </div>
        <div className={changeCssByItemSelected('7D')} onClick={() => changeSelected('7D')}>
          7D
        </div>
        <div className={changeCssByItemSelected('Este mes')} onClick={() => changeSelected('Este mes')}>
          Este mes
        </div>
        <div className={changeCssByItemSelected('6M')} onClick={() => changeSelected('6M')}>
          6M
        </div>
        <div className={changeCssByItemSelected('YTD / YTG')} onClick={() => changeSelected('YTD / YTG')}>
          YTD / YTG
        </div>
        <div className={changeCssByItemSelected('1A')} onClick={() => changeSelected('1A')}>
          1A
        </div>
        <div className={changeCssByItemSelected('MÁX')} onClick={() => changeSelected('MÁX')}>
          MÁX
        </div>
      </div>
      <div className="mt-4">
        {optionsSelected.itemSelected === '7D' && (
          <div className="flex flex-wrap md:gap-x-8 justify-between md:justify-start gap-y-2 items-center text-sm">
            {WEEK.map((item) => (
              <div key={item} className={changeWeekCssByItemSelected(item)} onClick={() => changeWeekSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}

        {optionsSelected.itemSelected === '6M' && (
          <div className="flex flex-wrap md:gap-x-8 justify-between md:justify-start items-center text-sm">
            {MONTH.map((item) => (
              <div key={item} className={changeMonthCssByItemSelected(item)} onClick={() => changeMonthSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}

        {optionsSelected.itemSelected === '1A' && (
          <div className="flex flex-wrap md:gap-x-8 justify-start items-center text-sm">
            {YEAR.map((item) => (
              <div key={item} className={changeYearCssByItemSelected(item)} onClick={() => changeYearSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
