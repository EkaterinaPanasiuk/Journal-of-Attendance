import { Button } from "shared/ui/Button";
import modal from "./modal.module.scss";

export function RoleButton({ label, active, onClick }) {
  return (
    <Button className={active ? modal.activeUserRoleButton : modal.userRoleButton} onClick={onClick}>
      {label}
    </Button>
  );
}
