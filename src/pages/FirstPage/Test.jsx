//import React ,{useState,useEffect}from 'react'; // 리액트와 useState, useEffect를 import
//import styled from 'styled-components'; // styled-components 라이브러리 import
//import axios from 'axios'; // axios 라이브러리 import
//
//const Container = styled.div` // styled-components를 사용하여 스타일이 적용된 div 컴포넌트 생성
//    width:600px;
//    height:200px;
//`

//const LogoConatiner = styled.div` // styled-components를 사용하여 로고 컨테이너 스타일 지정
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    margin: 20px auto;  
//`
//const Child = styled.div` // styled-components를 사용하여 자식 컨테이너 스타일 지정
//    width:100%;
//    display:flex;
//    margin: 50px 30px;
//    align-items: center;
//`
//
//const items = [ // items 배열 생성
//    { title: "title1", age: 33 },
//    { title: "title2", age: 34 },
//    { title: "title3", age: 35 },
//    { title: "title4", age: 36 },
//    { title: "title5", age: 37 },
//    { title: "title6", age: 38 }
//  ];

//const Test = () => { // Test 함수형 컴포넌트 정의
//    const [test,setTest] = useState(); // 상태 변수와 setter 함수 선언
//    
//    useEffect(()=>{ // useEffect 훅 사용
//        const TestFunction = async () =>{ // 비동기 함수 TestFunction 정의
//            const params = 'testDAta' // 임시 데이터 설정
//    
//            try { // 비동기 처리 try-catch
//                const response = await axios.get("url",params); // axios를 사용하여 GET 요청
//                if(response.status === 200 ){ // 상태코드가 200인 경우
//                    setTest(response.data); // 데이터 상태 업데이트
//                } else if (response.status === 500){ // 상태코드가 500인 경우
//                    alert("Server Error"); // 서버 에러 알림
//                }
//            } catch (error) { // 에러 발생 시
//                alert(error); // 에러 알림
//            }
//      
//        }

//        TestFunction(); // 함수 호출
//    },[]) // 의존성 배열 빈 배열 (컴포넌트가 마운트될 때 한 번만 실행)
//    return ( // 컴포넌트 반환
//        <Container> 
//            <Child>
//                <div>a</div>
//                <div>b</div>
//                <div>c</div>
//                <div>d</div>
//
//{items.map((item, index) => ( // items 배열을 순회하면서 값을 표시
//          <div key={index}>
//            {item.title} - {item.age}
//          </div>
//        ))}
//            </Child>
//        </Container>
//    );
//};
//
//export default Test; // Test 컴포넌트를 외부로 공개
