export class PropertyDecorationTest {
  @format('Hello')
  greeting: string;
}

function format(formatString: string) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function getter() {
      return `${formatString} ${value}`;
    }

    function setter(newVal: string) {
      value = newVal;
    }

    return {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    };
  };
}
