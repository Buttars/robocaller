import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreUiModule } from './core-ui';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

describe('AppComponent', () => {
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (id: string) => ({
        valueChanges: () => new BehaviorSubject({ campaigns: [] }),
        set: (d: any) => new Promise((resolve, reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreUiModule],
      declarations: [AppComponent],
      providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'robocaller'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('robocaller');
  });

  it('should render title in a app-nav tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-nav').textContent).toContain('Robocaller');
  });
});
