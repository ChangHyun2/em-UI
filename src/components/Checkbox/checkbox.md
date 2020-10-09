{ disabled, color = 'blue-600', size = 1, ...otherProps }

props
- disabled
- color

수정할 내용
- svgIcon dompurify 적용하기 or 다른 방법 찾아보기
- 체크박스에 사용할 svg 타입 나눠보기
- svgIcon 생각해보기

issue
- https://stackoverflow.com/questions/17616233/css-hover-sometimes-doesnt-work-on-svg-paths/17616309


label hover일 때
- indicator background 효과
- indicator insetbox-shadow 효과

label hover , input:checked일 때
- indicator background white 

input:checked일 때
- svg transform scale효과

```js

&:checked:checked:checked+span{
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