import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Navbar } from "features/Navbar/ui/Navbar";
import UserInfo from "./UserInfo";

const user = {
  firstName: "Анна",
  lastName: "Иванова",
  lastSync: "2023-07-25T17:46:00.000Z",
};

const userInfo = {
  courses: [
    "Робототехника: LEGO Education SPIKE Prime",
    "Спортивная робототехника: юные изобретатели (на базе конструкторов Lego WEDO 2.0)",
  ],
  email: "anna.ivanova@mail.com",
  firstName: "Анна",
  groups: ["MA-Rb1-001-1", "MA-LSr1-1-01-11", "MA-Rb1-001-2"],
  id: 30,
  isActive: true,
  isMetodist: true,
  isStaff: false,
  isSuperuser: true,
  isTeacher: true,
  lastName: "Иванова",
  lastUpdate: "2023-06-19T20:28:51.222845+03:00",
  middleName: "Сергеевна",
  studyFields: [
    {
      short_study_field: null,
      study_field: "Робототехника",
    },
    {
      short_study_field: null,
      study_field: "Техномейкерство",
    },
  ],
  username: "Anna.Ivanova",
};

export default {
  component: UserInfo,
  decorators: [
    (Story) => {
      const reducer = (state = { user, userInfo }) => state;
      const mockStore = configureStore({ reducer });
      return (
        <BrowserRouter>
          <Provider store={mockStore}>
            <Story />
          </Provider>
        </BrowserRouter>
      );
    },
  ],
  title: "Pages/UserInfo",
};

function Template() {
  return (
    <>
      <Navbar />
      <UserInfo />
    </>
  );
}

export const Primary = Template.bind({});
Primary.args = {};
