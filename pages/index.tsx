import type { NextPage } from 'next';
import Layout from '../components/layout';
import FilterDates from '@/components/filters/filter-dates';
import CardPulso, { CardPulsoProps } from '@/components/card-pulso';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="w-full flex flex-row gap-2">
        <div className="w-full md:w-3/4">
          <FilterDates />
        </div>
        <div className="hidden md:flex md:flex-col gap-4 w-1/4">
          {(['Noviembre', 'Octubre', 'Septiembre'] as CardPulsoProps['month'][]).map((month) => (
            <CardPulso key={month} month={month} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
