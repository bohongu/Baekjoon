# userEvent & fireEvent

fireEvent.click(element) 보다 useEvent.click(element)를 사용하는 것이 더 좋은 방법이다

### userEvent

- userEvent는 fireEvent를 사용해서 만들어졌다
- fireEvent는 어떠한 element타입이든 똑같은 반응을 보여주지만 userEvent는 각 element 타입에 맞는 더울 적절한 반응을 보여준다
- 예를 들어 fireEvent로 버튼을 클릭하면 fireEvent.click(button)이 focus 되지 않지만 userEvent로 하면 focus가 된다.
- 실제 사용하는 유저가 보기에 실제 버튼을 클릭하는 행위가 더 잘 표현되기에 userEvent를 사용하는 게 좋다
- 테스트를 할 때 실제 user가 사용하듯이 테스트해야하기 때문