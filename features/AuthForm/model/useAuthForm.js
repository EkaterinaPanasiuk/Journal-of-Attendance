import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { maxLength, minLength, required, validation } from "shared/lib/validation";
import { fetchToken, removeToken } from "./authSlice";
import { MSG_1 } from "./errorsTitles";

export function useAuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passInput = useRef(null);
  const nameInput = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const [formError, setFormError] = useState("");
  const [isButtonBlock, setIsButtonBlock] = useState(false);
  const err = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (err) {
      setFormError(err);
      setIsButtonBlock(false);
      dispatch(removeToken());
    }
  }, [err, dispatch]);

  // Clearing fields  when entering
  function useClearFieldError(field, setError) {
    useEffect(() => {
      if (field) setError("");
    }, [field, setError]);
  }
  useClearFieldError(username, setNameError);
  useClearFieldError(password, setPassError);

  // Function for field validation
  const validateField = (text, min, max) => {
    return validation(text, [minLength(min), maxLength(max)]);
  };

  const focusInputByRef = (ref) => {
    ref.current?.focus();
  };

  // The main function for submitting the form
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const nameError = validation(username, [required(MSG_1)]);
    const passError = validation(password, [required(MSG_1)]);
    const formError = validateField(username, 3, 60) || validateField(password, 8, 15);
    setPassword("");
    if (nameError || passError) {
      focusInputByRef(nameError ? nameInput : passInput);
      setNameError(nameError);
      setPassError(passError);
      setFormError("");
      return;
    }
    if (formError) {
      setFormError(formError);
      return;
    }
    setIsButtonBlock(true);
    dispatch(fetchToken({ navigate, password, username }));
  };

  return {
    formError,
    formSubmitHandler,
    isButtonBlock,
    nameError,
    nameInput,
    passError,
    passInput,
    password,
    setPassword,
    setUsername,
    username,
  };
}
