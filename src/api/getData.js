import promiseWrapper from "./promiseWrapper";

const getData = (url) => {
  console.log(url);
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);

  return promiseWrapper(promise);
};

export default getData;
