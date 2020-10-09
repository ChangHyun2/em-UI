
# v.0

수정할 내용
- 모바일에 대응할 수 있는 크기 만들기
- 정적/동적 스타일링 파일 나누기
- props 정리
- 컴포넌트에 적용할 color, font-size 정리하기
- 패딩, margin, 폰트 사이즈 어떻게 적용할지 고민
- proptypes 추가하기
- theming 어떻게 제공할지
- 리팩토링하기
- 타 브라우저 테스트하기
- docs, md파일 정리

## Component

### Backdrop

수정할 내용
- [1] transition 옵션 추가하기 (react transition group)  [o]
- [2] duration prop이 전달되지 않을 때 transition 적용하지 않게 바꾸기

수정 사항
- [1] transition group > fade 컴포넌트 생성

props
- open : @Booleans
- color
- duration : transition duration @number (ms)

### BoxGrid

수정할 내용 : padding 사방 설정

props 

- pad : 패딩 em  @Number  #1.5
- round : 둥근모서리 em @Number #false

### Button 

버튼은 font-size inherit이 발생하지 않아 > padding em 적용 시, 자신의 font-size 사용 > Size 사용 불가

**전체적으로 수정할 것**

- color 체계 정리해보기
- custom color 어떻게 지원할지 생각해보기
- 아이콘 버튼 추가하기
- 링크 클릭 시, 새 탭 target 속성 추가하기

### Checkbox

{ disabled, color = 'blue-600', size = 1, ...otherProps }

props
- disabled
- color

수정할 내용
- svgIcon dompurify 적용하기 or 다른 방법 찾아보기
- 체크박스에 사용할 svg 타입 나눠보기
- svgIcon 생각해보기

issue
- svg dangerouslyInner
- https://stackoverflow.com/questions/17616233/css-hover-sometimes-doesnt-work-on-svg-paths/17616309


```js

&:checked:checked:checked+span{ // input Id로 적용해보기
    background-color: #fff;
    & svg{
        transform:scale(1);
    } 
}

&:hover span:first-of-type{
    background-color: ${lighten(color, 4)};
    box-shadow: inset 0 0 0 1px ${hueColor}
}

```

### Radio

checkbox 복붙해서 대충 마무리함
다시 점검해볼 것

### Container

수정할 내용
- 전체적으로 수정할 것
- spacing
- gutter
  

props
- justify : flex-justify 옵션을 그대로 적용 @string
- spacing : padding 픽셀 전달 @number
- align : flex-align-items @string
- direction : flex-direction @string
- wrap : true일 경우 내부 요소가 다음 줄로 넘어가지 않음 @Boolean

### Grid

수정할 내용
- xs, sm, md, lg, xl에 대한 or 체킹 개선해보기

props
- row : 그리드를 row로 사용할 지 결정
  - wrap : row로 사용 시, flex-wrap 유무 결정
- auto : content에 따라 width가 결정됨
  - auto일 경우 row, xs~xl과 사용 불가
- xs : xs부터 width : (xs/12)%
- sm : sm부터 width : (sm/12)%
- md : md부터 width : (md/12)%
- lg : lg부터 width : (lg/12)%
- xl : xl부터 width : (sm/12)%

### Loading

수정할 내용
- props로 전달받는 size value(number)에 대응 가능한 config로 변경해보기
    - 크기, stroke굵기, 속도

props
- size : sm, md, lg
- color
- cx : x축 중앙지점
- cy : y축 중앙지점
- componentProps

### Modal

수정할 내용
- 모달 백드랍 트랜지션 분리하기
    - 언마운트 시, 모달 반응이 백드랍에 비해 느림

구현할 내용
- esc키 입력 시 close [o]
- children focus [o]
- 커스텀 백드랍 렌더링 [o]

props
- BackdropComponent : custom 백드랍 렌더링
- BackdropProps : 백드랍에 전달할 props
- hideBackdrop : 백드랍 렌더링 x
- onBackdropClick
- onClose : 클로즈할 시 발생시킬 이벤트
- open
- fromLeft
- fromRight
- fromTop
- duration={ fade , transform}
- focusRef : 모달 마운트 후 포커싱할 DOM의 ref

### Sizer

props
- size @Number (px)

## Transition

### Fade