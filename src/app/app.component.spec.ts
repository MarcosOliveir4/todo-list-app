import { render } from '@testing-library/angular';

import { AppComponent } from './app.component';

const sut = async () => {
  return await render(AppComponent);
};

describe('AppComponent', () => {
  it('should create the app', async () => {
    const { fixture } = await sut();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'todo-list-app' title`, async () => {
    const { fixture } = await sut();
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-list-app');
  });

  it('should render title', async () => {
    const { fixture } = await sut();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, todo-list-app'
    );
  });
});
