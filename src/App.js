import Content from "./components/content";
import ContentItems from "./components/content/content-item";
import Header from "./components/header";
import HeaderItems from "./components/header/header-items";
import Logo from "./components/header/header-logo";
import SideBar from "./components/sidebar";
import SidebarItems from "./components/sidebar/sidebar-items";

function App() {
  return (
    <div>
      <Header>
        <Logo></Logo>
        <HeaderItems></HeaderItems>
      </Header>

      <Content>
        <ContentItems></ContentItems>
      </Content>

      <SideBar>
        <SidebarItems></SidebarItems>
      </SideBar>
    </div>
  );
}

export default App;
