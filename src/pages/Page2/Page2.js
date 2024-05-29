import React from "react";
import { useSelector } from "react-redux";
import * as S from "./Page2.style";
import useFetchWithAxios from "../../hooks/useFetchWithAxios";

const Page2 = () => {
  const count = useSelector((state) => state.counter.count);

  const fetchParams = {
    get: {
      url: "http://localhost:8080/api/coffee",
      // method: "get",
    },
    // post: {
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   method: "post",
    //   body: { title: "foo", body: "bar", userId: 1 },
    // },
  };

  const {
    data: getData,
    isLoading: getLoading,
    error: getError,
  } = useFetchWithAxios(fetchParams.get);

  // const {
  //   data: postData,
  //   isLoading: postLoading,
  //   error: postError,
  // } = useFetchWithAxios(fetchParams.post);

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

export default Page2;
