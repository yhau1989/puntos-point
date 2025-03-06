import { getRandomFloat, getRandomInt } from '@/utils/random';
import { FC } from 'react';

export type CardPulsoProps = {
  month:
    | 'Enero'
    | 'Febrero'
    | 'Marzo'
    | 'Abril'
    | 'Mayo'
    | 'Junio'
    | 'Julio'
    | 'Agosto'
    | 'Septiembre'
    | 'Octubre'
    | 'Noviembre'
    | 'Diciembre';
};

const CardPulso: FC<CardPulsoProps> = ({ month }) => {
  const clients = getRandomInt(20000, 99999);
  const sells = getRandomFloat(5000, 99999);
  const totals = getRandomFloat(110, 999);

  const ITEMS = [
    { label: 'Clientes', value: clients },
    { label: 'Ventas totales', value: sells },
    { label: 'Monto total', value: `$${totals}M` },
    { label: 'Cashback', value: '' },
    { label: 'Acumulado', value: `$${getRandomFloat(11000, 99999)}` },
    { label: 'Facturado 01/11', value: `$${getRandomFloat(0, 99999)}` },
    { label: 'Facturado 10/11', value: `$${getRandomFloat(0, 99999)}` },
    { label: 'Facturado 20/11', value: `$${getRandomFloat(0, 99999)}` },
  ];

  return (
    <div className=" bg-[#ffffff] shadow-md rounded-2xl p-4 text-sm">
      <div className="w-full text-center font-semibold">{month}</div>
      <div className="mt-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <div className={item.label === 'Cashback' ? 'font-semibold my-2' : 'text-sm'}>{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPulso;
