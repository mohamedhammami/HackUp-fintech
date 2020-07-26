import { CreditModule } from './credit.module';

describe('CreditModule', () => {
  let creditModule: CreditModule;

  beforeEach(() => {
    creditModule = new CreditModule();
  });

  it('should create an instance', () => {
    expect(creditModule).toBeTruthy();
  });
});
