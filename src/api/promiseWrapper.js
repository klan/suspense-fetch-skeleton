const promiseWrapper = (promise) => {
  let status = "pending";
  let response;

  const suspend = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspend;
      } else if (status === "error") {
        throw response;
      } else {
        return response;
      }
    }
  };
};

export default promiseWrapper;
