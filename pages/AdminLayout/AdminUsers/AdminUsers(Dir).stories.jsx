import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Navbar } from "features/Navbar/ui/Navbar";
import { AdminUsers } from "./AdminUsers";

/* eslint-disable sort-keys */
const user = {
  firstName: "Иван",
  id: 22,
  isMetodist: false,
  isSuperuser: true,
  isTeacher: false,
  lastName: "Адмиральский",
  middleName: null,
  status: "resolved",
  username: "Iteen.Admin",
  lastSync: null,
};
const userFilter = {
  isCheckedAdmin: false,
  isCheckedMethod: false,
  isCheckedNoActive: false,
  isCheckedTeach: false,
};
const users = {
  directions: [
    {
      БПЛА: "БПЛА",
    },
    {
      "Веб-технологии": "Веб-технологии",
    },
    {
      Дизайн: "Дизайн",
    },
    {
      "Практическое программирование (Лаборатория)": "IT-Лаборатория",
    },
    {
      "Программирование и GameDev": "GameDev",
    },
    {
      Робототехника: "Робототехника",
    },
    {
      Техномейкерство: "Техномейкерство",
    },
    {
      "Computer Science": "Computer Science",
    },
    {
      "3D-моделирование": "3D",
    },
  ],
  error: null,
  users: [
    {
      id: 9,
      username: "Denis.Kuznetsov",
      first_name: "Денис",
      last_name: "Кузнецов",
      middle_name: "Артёмович",
      is_active: true,
      is_staff: true,
      is_superuser: true,
      is_teacher: false,
      is_metodist: false,
      date_added: "2023-06-07T16:31:20.369252+03:00",
      last_update: "2023-07-12T14:14:02.613280+03:00",
      email: "Denis.Kuznetsov@gmail.com",
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
    {
      id: 1,
      username: "Anna.Ivanova",
      first_name: "Анна",
      last_name: "Иванова",
      middle_name: "Григорьевна",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: false,
      is_metodist: true,
      date_added: "2023-06-07T16:31:20.369252+03:00",
      last_update: "2023-06-13T17:33:02.000314+03:00",
      email: null,
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
    {
      id: 2,
      username: "Marina-Ekaterina.Petrovskaya-Skvortsovskaya-Sigizmundovskaya",
      first_name: "Екатерина",
      last_name: "Петровская-Скворцовская-Сигизмундовская",
      middle_name: "Вениаминовна",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: true,
      is_metodist: false,
      date_added: "2023-06-07T16:31:20.369252+03:00",
      last_update: "2023-07-03T00:13:29.666936+03:00",
      email: "Marina-Ekaterina.Petrovskaya-Skvortsovskaya-Sigizmundovskaya@mail.ru",
      study_groups: ["stub group 1", "stub group 2", "stub group 3"],
      study_courses: ["stub course 1", "stub course 2", "stub course 3"],
      study_fields: [
        {
          short_study_field: "IT-Лаборатория",
          study_field: "Практическое программирование (Лаборатория)",
        },
        {
          short_study_field: "3D",
          study_field: "3D-моделирование",
        },
      ],
    },
  ],
};
const usersSorting = {
  sort: "directions",
  sortDirection: true,
};
/* eslint-enable sort-keys */

export default {
  component: AdminUsers,
  decorators: [
    (Story) => {
      const reducer = (state = { user, userFilter, users, usersSorting }) => state;
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
  title: "Pages/AdminUsers/Sort-directions",
};

function Template() {
  return (
    <>
      <Navbar />
      <AdminUsers />
    </>
  );
}

export const Primary = Template.bind({});
Primary.args = {};
