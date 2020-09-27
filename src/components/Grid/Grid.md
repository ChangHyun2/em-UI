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
