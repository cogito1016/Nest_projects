@reportableClassDecorator
export class ClassDecorationTest {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function reportableClassDecorator<T extends { new (...args: any[]) }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = 'http://www.example.com';
  };
}
