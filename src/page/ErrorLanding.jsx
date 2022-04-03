import React from "react";

const ErrorLanding = () => {
  const [time, setTime] = React.useState(5);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
      if (time < 0 || time === 0) {
        document.location.href = "/";
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-300">
      <div className="p-5 rounded-lg bg-white flex flex-col items-center w-2/4 h-2/4">
        <h1 className="text-red-600 font-bold text-2xl">ERROR 404</h1>
        <p className="text-green-400 font-medium">
          Đang tiến hành chuyển hướng bạn về trang chủ sau {time}s!
        </p>
      </div>
    </div>
  );
};

export default ErrorLanding;
