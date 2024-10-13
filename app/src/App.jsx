import styled from "styled-components";
import Logo from "/DALL·E 2024-10-13 18.19.52 - A vibrant, modern logo for a restaurant called 'Feast Station'. The design should emphasize a station theme, with subtle culinary elements like plates-modified.png";
const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src={Logo} alt="Logo" height="200px" />
        </div>
        <div className="search">
          <input placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
    </Container>
  );
};
export default App;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;

  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
