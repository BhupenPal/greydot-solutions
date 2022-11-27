/* eslint-disable */
import HomeStyles from '../styles/Home.module.scss';

const HomeBlock = (props: any) => {
  return (
    <div className={HomeStyles['home-block']}>
      <h3>{props.heading}</h3>
      <ul>
        {props.list.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeBlock;
