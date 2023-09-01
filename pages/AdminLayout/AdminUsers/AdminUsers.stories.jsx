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
      id: 3,
      username: "A.S",
      first_name: "Вера",
      last_name: "Ахмедова",
      middle_name: "Сергеевна",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: true,
      is_metodist: false,
      date_added: "2023-06-07T16:31:20.369252+03:00",
      last_update: "2023-06-28T10:33:38.955402+03:00",
      email: null,
      study_groups: ["stub group 1", "stub group 2", "stub group 3"],
      study_courses: ["stub course 1", "stub course 2", "stub course 3"],
      study_fields: [
        {
          short_study_field: "Computer Science",
          study_field: "Computer Science",
        },
        {
          short_study_field: "3D",
          study_field: "3D-моделирование",
        },
      ],
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
      id: 27,
      username: "ITeen.Admin3",
      first_name: "Пётр",
      last_name: "Толкачёв",
      middle_name: "Джангович",
      is_active: true,
      is_staff: true,
      is_superuser: true,
      is_teacher: false,
      is_metodist: false,
      date_added: "2023-06-13T21:37:24.389048+03:00",
      last_update: "2023-06-28T18:48:46.316588+03:00",
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
      ],
    },
    {
      id: 20,
      username: "Anna.PetrovaA",
      first_name: "Анна",
      last_name: "Петрова",
      middle_name: "Ивановна",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: true,
      is_metodist: true,
      date_added: "2023-06-08T19:57:33.288679+03:00",
      last_update: "2023-06-24T21:12:17.935380+03:00",
      email: null,
      study_groups: ["stub group 1", "stub group 2", "stub group 3"],
      study_courses: ["stub course 1", "stub course 2", "stub course 3"],
      study_fields: [
        {
          short_study_field: "БПЛА",
          study_field: "БПЛА",
        },
        {
          short_study_field: "Веб-технологии",
          study_field: "Веб-технологии",
        },
        {
          short_study_field: "Дизайн",
          study_field: "Дизайн",
        },
        {
          short_study_field: "IT-Лаборатория",
          study_field: "Практическое программирование (Лаборатория)",
        },
        {
          short_study_field: "GameDev",
          study_field: "Программирование и GameDev",
        },
        {
          short_study_field: "Робототехника",
          study_field: "Робототехника",
        },
        {
          short_study_field: "Техномейкерство",
          study_field: "Техномейкерство",
        },
        {
          short_study_field: "Computer Science",
          study_field: "Computer Science",
        },
        {
          short_study_field: "3D",
          study_field: "3D-моделирование",
        },
      ],
    },
    {
      id: 26,
      username: "Anna.Ahmedova",
      first_name: "Анна",
      last_name: "Ахмедова",
      middle_name: "Павловна",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: true,
      is_metodist: false,
      date_added: "2023-06-13T19:42:03.071968+03:00",
      last_update: "2023-07-02T17:22:17.201770+03:00",
      email: null,
      study_groups: ["stub group 1", "stub group 2", "stub group 3"],
      study_courses: ["stub course 1", "stub course 2", "stub course 3"],
      study_fields: [],
    },
    {
      id: 88,
      username: "Artem.Ivanov",
      first_name: "Артем",
      last_name: "Иванов",
      middle_name: "",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: false,
      is_metodist: true,
      date_added: "2023-07-11T00:35:45.065870+03:00",
      last_update: "2023-07-11T00:38:48.525368+03:00",
      email: "rddfhd@mail.ru",
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
    {
      id: 25,
      username: "Yan.Go",
      first_name: "Ян",
      last_name: "Горцев",
      middle_name: "Андреевич",
      is_active: true,
      is_staff: true,
      is_superuser: true,
      is_teacher: false,
      is_metodist: false,
      date_added: "2023-06-13T17:49:04.615331+03:00",
      last_update: "2023-07-11T01:02:10.621033+03:00",
      email: null,
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
    {
      id: 22,
      username: "Iteen.Admin",
      first_name: "Иван",
      last_name: "Адмиральский",
      middle_name: null,
      is_active: true,
      is_staff: true,
      is_superuser: true,
      is_teacher: false,
      is_metodist: false,
      date_added: "2023-06-11T22:02:05.977602+03:00",
      last_update: "2023-07-04T22:12:00.735410+03:00",
      email: null,
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
    {
      id: 10,
      username: "Viktor.Demchuk",
      first_name: "Виктор",
      last_name: "Демчук",
      middle_name: "Леонидович",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: true,
      is_metodist: false,
      date_added: "2023-06-07T16:31:20.369252+03:00",
      last_update: "2023-06-28T10:42:34.630705+03:00",
      email: null,
      study_groups: ["stub group 1", "stub group 2", "stub group 3"],
      study_courses: ["stub course 1", "stub course 2", "stub course 3"],
      study_fields: [
        {
          short_study_field: "БПЛА",
          study_field: "БПЛА",
        },
        {
          short_study_field: "Веб-технологии",
          study_field: "Веб-технологии",
        },
      ],
    },
    {
      id: 147,
      username: "Ivan.Ivanov1",
      first_name: "Иван",
      last_name: "Иванов",
      middle_name: "Иванович",
      is_active: true,
      is_staff: false,
      is_superuser: false,
      is_teacher: false,
      is_metodist: true,
      date_added: "2023-07-12T18:40:45.917076+03:00",
      last_update: "2023-07-12T18:40:45.917122+03:00",
      email: "ivan9@mail.ru",
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
    {
      id: 17,
      username: "Vilhelmina.Kristorozh",
      first_name: "Вильгельмина",
      last_name: "Христорождественскаяка",
      middle_name: "Сергеевна",
      is_active: false,
      is_staff: false,
      is_superuser: true,
      is_teacher: false,
      is_metodist: false,
      date_added: "2023-06-08T19:16:51.799102+03:00",
      last_update: "2023-06-28T10:49:22.427280+03:00",
      email: null,
      study_groups: null,
      study_courses: null,
      study_fields: [],
    },
  ],
};
const usersSorting = {
  sort: "chrono",
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
  title: "Pages/AdminUsers/Sort-chrono",
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
