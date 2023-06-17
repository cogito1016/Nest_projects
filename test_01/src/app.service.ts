import { Injectable } from '@nestjs/common';
import { DecoEvaluationTest } from './deco_evaluation_test';

@Injectable()
export class AppService {
  decoTest(): string {
    const testInstance = new DecoEvaluationTest();
    testInstance.decorateTest1();
    return 'Hello World!';
  }

  decoComposition(): string {
    return 'composition test';
  }
}
