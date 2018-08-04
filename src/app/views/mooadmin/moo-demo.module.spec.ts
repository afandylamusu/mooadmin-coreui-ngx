import { MooDemoModule } from './moo-demo.module';

describe('ContactModule', () => {
  let contactModule: MooDemoModule;

  beforeEach(() => {
    contactModule = new MooDemoModule();
  });

  it('should create an instance', () => {
    expect(contactModule).toBeTruthy();
  });
});
