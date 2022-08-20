import React, {FC} from "react";

export const TheHeader: FC = () => {
  const signIn = () => {
    console.log('Auth success');
  }

  return (
    <header>
      <div className="header__logo">
        Logo
      </div>

      <div className="header__button">
        <button onClick={() => signIn()}>Auth</button>
      </div>
    </header>
  )
}