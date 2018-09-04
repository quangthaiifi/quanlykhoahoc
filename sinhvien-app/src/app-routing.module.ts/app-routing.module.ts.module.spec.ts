import { AppRouting.Module.TsModule } from './app-routing.module.ts.module';

describe('AppRouting.Module.TsModule', () => {
  let appRoutingModuleTsModule: AppRouting.Module.TsModule;

  beforeEach(() => {
    appRoutingModuleTsModule = new AppRouting.Module.TsModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModuleTsModule).toBeTruthy();
  });
});
