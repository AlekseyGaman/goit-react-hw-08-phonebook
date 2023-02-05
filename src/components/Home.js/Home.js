import {
  HomeContainer,
  HomeTitle,
  HomeLogIn,
  HomeReg,
  HomeLink,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <HomeContainer data-aos="fade-right">
        <HomeTitle>Welcome to your Phonebook</HomeTitle>
        <HomeLogIn>
          Already have an account? <HomeLink to="/login">Sign in</HomeLink>
        </HomeLogIn>
        <HomeReg>
          Don't have an account? <HomeLink to="/register">Register</HomeLink>
        </HomeReg>
      </HomeContainer>
    </>
  );
};

export default Home;
