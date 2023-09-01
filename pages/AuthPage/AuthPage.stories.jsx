import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "app/store";
import AuthPage from "./AuthPage";

export default {
  component: AuthPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
  title: "Pages/AuthPage",
};

function Template(args) {
  return <AuthPage {...args} />;
}

export const Primary = Template.bind({});
