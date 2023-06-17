export class AccessorDecorationTest {
  constructor(private name: string) {}

  @Enumerable(true)
  get getName() {
    return this.getName;
  }

  @Enumerable(true)
  set setName(name: string) {
    this.name = name;
  }
}

function Enumerable(enumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = enumerable;
  };
}
