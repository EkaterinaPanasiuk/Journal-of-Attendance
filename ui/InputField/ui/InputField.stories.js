import { InputField } from "./InputField";
import "app/index.scss";

export default {
  argTypes: {
    label: "Введите ваше имя:",
  },
  component: InputField,
  tags: ["autodocs"],
  title: "Shared/InputField",
};

export const Text = {
  args: {
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
  },
};

export const TextWithError = {
  args: {
    error: "Неизвестная ошибка",
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
  },
};

export const Password = {
  args: {
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
    type: "password",
  },
};

export const PasswordWithError = {
  args: {
    error: "Неизвестная ошибка",
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
    type: "password",
  },
};
