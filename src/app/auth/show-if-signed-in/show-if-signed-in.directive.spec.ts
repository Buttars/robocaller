import { ShowIfSignedInDirective } from './show-if-signed-in.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p *appShowIfSignedIn>Text</p>
  `,
})
class TestComponent {}

describe('ShowIfSignedInDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let pEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ShowIfSignedInDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    pEl = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should not be visible', () => {
    expect(pEl).toBeNull();
  });
});
