import { DsNavSideModule } from './nav-side.module';

describe('NavSideModule', () => {
  let navSideModule: DsNavSideModule;

  beforeEach(() => {
    navSideModule = new DsNavSideModule();
  });

  it('should create an instance', () => {
    expect(navSideModule).toBeTruthy();
  });
});
