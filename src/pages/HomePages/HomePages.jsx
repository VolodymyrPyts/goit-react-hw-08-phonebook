import { MdOutlineMenuBook } from 'react-icons/md';
import { Welcome } from './HomePage.styled';

const HomePage = () => {
  return (
    <Welcome>
      <div>
        <MdOutlineMenuBook size={56} />
        <h2>Welcome!</h2>
      </div>
    </Welcome>
  );
};
export default HomePage;
