import React from "react";
import { useSelector } from "react-redux";
import * as S from "./SecondPage.style";
import useFetchWithAxios from "../../hooks/useFetchWithAxios";
import GetValue from "../GetValue";

const SecondPage = () => {
  const count = useSelector((state) => state.counter.count);
  const localAddress = useSelector((state) => state.localAddress.value);
  const fetchParams = {
    get: {
      url: `${localAddress}users/get/qwe123`,
      method: "get",
    },
  };

  const {
    data: getData,
    isLoading: getLoading,
    error: getError,
  } = useFetchWithAxios(fetchParams.get);

  function RequestSection({ title, data, isLoading, error }) {
    return (
      <div>
        <h1>{title}</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    );
  }

  return (
    <S.Container>
      <h1>{count}</h1>
      <div>페이지2</div>
      <br />
      <hr />
      <GetValue />
      {/* <h1>GET Request</h1> */}
      <RequestSection
        title="GET Request"
        data={getData}
        isLoading={getLoading}
        error={getError}
      />
      {/* <RequestSection
        title="POST Request"
        data={postData}
        isLoading={postLoading}
        error={postError}
      /> */}
    </S.Container>
  );
};

export default SecondPage;
