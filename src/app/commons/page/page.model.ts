import { Routes, Route } from "@angular/router";

export interface IPage {
  title: string;
  keywords?: string[];
  path: string;
  fullPath: string;
  parent?: Page;
  match(clue: string): boolean;

}
export class Page implements IPage {

  get fullPath(): string {
    if (!this.parent) {
      return this.path;
    }
    return `${this.parent.fullPath}/${this.path}`;
  }
  constructor(
    public path: string,
    public component: any,
    public title: string,
    public parent: Page = null,
    public keywords: string[] = [],
  ) { }

  public static buildRoutes(pages: Page[]): Routes {
    return pages.filter(page => {
      return !page.parent || !pages.includes(page.parent);
    })
    .map(page => page.toRoute(pages));
  }

  public toRoute(pages: Page[]): Route {
    const children = pages.filter( child => {
      return child.parent === this;
    });
    const routeChildren = children.map( page => page.toRoute(pages), []);
    if (routeChildren.length < 1) {
      return { path: this.path, component: this.component };
    }
    return { path: this.path, component: this.component, children: routeChildren};
  }
  public match(clue: string): boolean {
    const normalizedClue = this._normalizeString(clue);
    if (this.title.indexOf(normalizedClue) !== -1) {
      return true;
    }
    for (const keyword of this.keywords) {
      if (keyword.indexOf(normalizedClue) !== -1) {
        return true;
      }
    }
    return false;
  }

  private _normalizeString(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
