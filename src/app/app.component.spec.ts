import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ButtonsComponent } from './buttons/buttons.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, ContentComponent, ButtonsComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have app-header and app-content components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headerComponent = compiled.querySelector('app-header');
    const contentComponent = compiled.querySelector('app-content');

    expect(headerComponent).toBeTruthy();
    expect(contentComponent).toBeTruthy();
  });
});
