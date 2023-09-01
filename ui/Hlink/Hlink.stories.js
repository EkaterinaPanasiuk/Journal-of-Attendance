import { Hlink } from "./Hlink";
import "app/index.scss";

export default {
  argTypes: {
    href: "/#",
    text: "Click me",
  },
  component: Hlink,
  tags: ["autodocs"],
  title: "Shared/Link",
};

export const Primary = {
  args: {
    href: "/#",
    text: "Click me",
    variant: "primary",
  },
};
