import { NavSideModule } from './nav-side.module';

describe('NavSideModule', () => {
  let navSideModule: NavSideModule;

  beforeEach(() => {
    navSideModule = new NavSideModule();
  });

  it('should create an instance', () => {
    expect(navSideModule).toBeTruthy();
  });
});
