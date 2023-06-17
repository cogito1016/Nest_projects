import { Injectable } from '@nestjs/common';
import { DecoEvaluationTest } from './deco_evaluation_test';
import { DecoCompositionTest } from './deco_evaluation_test copy';

@Injectable()
export class AppService {
  decoTest(): string {
    const testInstance = new DecoEvaluationTest();
    testInstance.decorateTest1();
    return 'evaluation test';
  }

  decoComposition(): string {
    const testInstance = new DecoCompositionTest();
    testInstance.method();
    return 'composition test';
  }
}
