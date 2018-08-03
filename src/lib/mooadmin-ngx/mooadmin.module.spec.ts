import { MooadminModule } from './mooadmin.module';

describe('MooadminModule', () => {
  let mooadminModule: MooadminModule;

  beforeEach(() => {
    mooadminModule = new MooadminModule();
  });

  it('should create an instance', () => {
    expect(mooadminModule).toBeTruthy();
  });
});
