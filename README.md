
# 에어드랍용 솔리디티 작성
에어드랍 호출 메소드
function mintAirDrop(address _to, uint256 _amount)  public returns (bool)

# Docker 실행 방법 <br>
# 열어주는 포트  9545, 8545, 7545, 3000, 3001  <br>
> docker run -it -p 9545:9545 -p 8545:8545 -p 7545:7545 -p 3000:3000  --volume=$(pwd):/king3/  --name king3 -d node <br>
\> npm i -g n    <br>
> n stable      <br>
> npm i         <br>
> npm i --unsafe-perm -g truffle        <br>
> truffle develop                       <br>
----------------   truffle 내부에서         <br>
>> compile                                 <br>
>> migrate                                  <br>
>> test                                     <br>

