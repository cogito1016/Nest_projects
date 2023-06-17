export class MethodDecorationTest {
  @HandleError()
  hello() {
    console.log('메서드호출');
    throw new Error('테스트 에러 발생');
  }
}
function HandleError() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);

    const method = descriptor.value;

    descriptor.value = function () {
      try {
        method();
      } catch (e) {
        //에러핸들링 로직구현
        console.log('에러로 잡혀버렸넹');
      }
    };
  };
}
