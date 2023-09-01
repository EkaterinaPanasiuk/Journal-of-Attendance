import { Checkbox } from ".";
import "app/index.scss";

export default {
  argTypes: {},
  component: Checkbox,
  tags: ["autodocs"],
  title: "Shared/Checkbox",
};

export const Primary = {
  args: {
    id: "ch1",
    label: "Press me",
  },
};
