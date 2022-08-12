import React from 'react';

const FormNotification = ({
  status,
  title,
  message
}: {
  status: FormStatus;
  title: string;
  message: string;
}): JSX.Element => {
  return (
    <>
      <div className={status}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </>
  );
};

export default FormNotification;
