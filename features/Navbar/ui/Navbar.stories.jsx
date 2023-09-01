import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Navbar } from "./Navbar";

const user = {
  firstName: "Анна",
  lastName: "Иванова",
};

export default {
  component: Navbar,
  decorators: [
    (Story) => {
      const reducer = (state = { user }) => state;
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
  title: "Features/Navbar",
};

function Template(args) {
  return <Navbar {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {};
