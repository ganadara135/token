
# 에어드랍용 솔리디티 작성
## 에어드랍 호출 메소드  <br >
function mintAirDrop(address _to, uint256 _amount)  public returns (bool)  <br>

## 토큰발행 정보(하드코딩)   <br>
string public constant name = "KING";       토큰명 <br>
string public constant symbol = "KING";     심볼 <br>
uint public constant decimals = 18;             <br>
uint public constant INITIAL_SUPPLY = 1000 * (10 ** decimals);      발행양 <br>

## ABI 정보 <br>
build -> contracts -> *.json  파일 안에 있습니다.  <br>
<br>
<br>

# Docker 실행 방법 <br>
# 열어주는 포트  9545, 8545, 7545, 3000  <br>
\> docker run -it -p 9545:9545 -p 8545:8545 -p 7545:7545 -p 3000:3000  --volume=$(pwd):/king3/  --name king3 -d node <br>
\> npm i -g n    <br>
\> n stable      <br>
\> npm i         <br>
\> npm i --unsafe-perm -g truffle        <br>
\> truffle develop                       <br>

<br>

## ----------------   truffle 내부에서         <br>
\>> compile                                 <br>
\>> migrate                                  <br>
\>> test                                     <br>

