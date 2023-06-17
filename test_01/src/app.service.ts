import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  decoTest(): string {
    const testInstance = new TestClass();
    testInstance.decorateTest1();
    return 'Hello World!';
  }
}

function deco_1(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('데코레이터 deco_1 가 평가합니다');
}

function deco_2(value: string) {
  console.log('데코레이터 deco_2 가 평가합니다');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(value);
  };
}

class TestClass {
  @deco_1
  decorateTest1() {
    console.log('함수 decorateTest1 가 호출됩니다.');
  }

  @deco_2('Hello')
  decorateTest2() {
    console.log('함수 decorateTest2 가 호출됩니다.');
  }
}
