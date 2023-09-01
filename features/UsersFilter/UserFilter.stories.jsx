import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { UserFilter } from "./index";

const userFilter = {
  isCheckedAdmin: true,
  isCheckedMethod: false,
  isCheckedNoActive: false,
  isCheckedTeach: true,
};

export default {
  component: UserFilter,
  decorators: [
    (Story) => {
      const reducer = (state = { userFilter }) => state;
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
  title: "Features/UserFilter",
};

function Template(args) {
  return <UserFilter {...args} />;
}

export const Primary = Template.bind({});
