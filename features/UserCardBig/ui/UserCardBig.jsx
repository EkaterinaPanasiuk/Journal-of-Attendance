import { InputField } from "shared/ui/InputField";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserIcon } from "shared/ui/userIcon/UserIcon";
import { WrapWithTitleSpans } from "shared/ui/wrapWithTitle&Spans/WrapWithTitle&Spans";
import { Button } from "shared/ui/Button";
import compareRusEngNum from "shared/lib/compareRusEngNum";
import stylesBigCard from "./styles.module.scss";

export function UserCardBig() {
  const navigate = useNavigate();
  const { id, courses, email, groups, studyFields, username, isTeacher } = useSelector((state) => state.userInfo);
  return (
    id && (
      <section className={stylesBigCard.userCardBig}>
        <div className={stylesBigCard.userPersonInfo} style={{ width: "100%" }}>
          <UserIcon />
        </div>
        <div className={stylesBigCard.userDataInfo}>
          <div className={stylesBigCard.columnLeft}>
            <h4 className={stylesBigCard.columnTitle}>Данные для доступа</h4>
            <InputField label="Логин" value={username || ""} className={stylesBigCard.input} disabled />
            <InputField label="Email" value={email || ""} className={stylesBigCard.input} disabled />
            <h4 className={stylesBigCard.columnTitle} style={{ margin: "24px 0" }}>
              Пароль
            </h4>
            <p>Доступен при редактировании пользователя</p>
          </div>
          {isTeacher && (
            <div className={stylesBigCard.columnRight}>
              <h4 className={stylesBigCard.columnTitle}>Учебная информация</h4>
              <WrapWithTitleSpans
                title="Направления"
                emptyText="Нет направлений"
                arr={studyFields.map((item) => item.study_field).sort(compareRusEngNum)}
                variant="blue"
              />
              <WrapWithTitleSpans title="Курсы" emptyText="Нет курсов" arr={[...courses].sort(compareRusEngNum)} variant="violet" />
              <WrapWithTitleSpans title="Группы" emptyText="Нет групп" arr={groups} variant="green" />
            </div>
          )}
        </div>
        <Button
          variant="warning"
          size="medium"
          content="Редактировать"
          onClick={() => {
            navigate("edit");
          }}
        />
      </section>
    )
  );
}
