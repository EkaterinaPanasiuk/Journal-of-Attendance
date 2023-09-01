import { lazy, Suspense } from "react";

import resetpassword from "./resetpassword.module.scss";

function ResetPasswordPage() {
  const ResetPasswordBlock = lazy(() => import("../../features/ResetPasswordBlock/ui/ResetPasswordBlock"));

  return (
    <Suspense>
      <div className={resetpassword.container}>
        <ResetPasswordBlock />
      </div>
    </Suspense>
  );
}

export default ResetPasswordPage;
