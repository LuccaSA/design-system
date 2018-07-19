import { OverlaysModule } from './overlays.module';

describe('OverlaysModule', () => {
  let overlaysModule: OverlaysModule;

  beforeEach(() => {
    overlaysModule = new OverlaysModule();
  });

  it('should create an instance', () => {
    expect(overlaysModule).toBeTruthy();
  });
});
