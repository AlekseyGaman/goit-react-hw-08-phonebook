import { Link } from 'react-router-dom';
import { HomeContainer, HomeImg } from './Home.styled';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <h2>Welcome to your Phonebook</h2>
        <HomeImg></HomeImg>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <p item>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </HomeContainer>
    </>
  );
};

export default Home;
