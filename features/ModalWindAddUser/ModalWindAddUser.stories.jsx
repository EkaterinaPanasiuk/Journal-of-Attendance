import { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "app/store";
import Context from "shared/context/Context";
import { ModalWindAddUser } from "./ui/ModalWindAddUser";

export default {
  component: ModalWindAddUser,
  decorators: [
    (Story) => {
      const [showModal, setShowModal] = useState(true);
      function handleCloseModal() {
        setShowModal(false);
      }
      const modalValue = useMemo(() => {
        return { handleCloseModal, showModal };
      }, [showModal]);
      return (
        <BrowserRouter>
          <Provider store={store}>
            <Context.Provider value={modalValue}>
              <Story />
            </Context.Provider>
          </Provider>
        </BrowserRouter>
      );
    },
  ],
  title: "Features/ModalWindAddUser",
};

function Template(args) {
  return <ModalWindAddUser {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  showModal: true,
};
