# React_Context-API
리액트를 다루는 기술에서 Context API를 공부해보았습니다.
## 중요한 개념들
- Context는 crateContext함수를 사용하여 생성 파라미터에는 해당 Context의 기본 상태를 지정해줌.
- Context의 값을 받아올 때는 props가 아닌 Consumer를 사용, 이 안에는 중괄호를 열어서 함수(Render Props)를 넣어줌.  
- context의 value를 변경할 때에는 Provider를 사용 (반드시 value값을 지정해주어야 함.)
- context를 동적으로 사용할 때는 새로운 컴포넌트(Provider)를 만들어주고 context의 값을 그 컴포넌트의 기본 값으로 지정해주어야 함.
- Provider 컴포넌트를 작성할 때 상태는 state로, 업데이트 함수는 actions로 묶어서 전달해주어야 함.
- createContext의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치 시켜주어야 함.
