import { MonhocModule } from './monhoc.module';

describe('MonhocModule', () => {
  let monhocModule: MonhocModule;

  beforeEach(() => {
    monhocModule = new MonhocModule();
  });

  it('should create an instance', () => {
    expect(monhocModule).toBeTruthy();
  });
});
