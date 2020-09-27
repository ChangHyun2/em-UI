Component.style.js
    _style : props에 의해 결정되지 않는 정적 스타일링

Component.js
    props: {
        tag : 컴포넌트 태그
        myStyle : 추가적인 emotion 스타일로, 기존 스타일링을 override
        children : 태그 컴포넌트 하위로 전달
        otherProps : 태그 컴포넌트 props로 전달
    }
    styles [
        myStyle : shift로 앞으로 채울 것 (emotion의 스타일링 우선순위)
        _style : import한 정적 스타일
        style : props에 의해 결정되는 스타일, 내용이 분리될 경우 쪼개어 push
    ] 
Demo.js
    demo 컴포넌트
    docs 만들 떄 사용