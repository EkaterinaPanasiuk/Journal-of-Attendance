import { ErrorPage } from "./ErrorPage";

export default {
  component: ErrorPage,
  title: "Pages/ErrorPage",
};

function Template(args) {
  return <ErrorPage {...args} />;
}

export const Primary = Template.bind({});
