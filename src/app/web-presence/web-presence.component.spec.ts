import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPresenceComponent } from './web-presence.component';

describe('WebPresenceComponent', () => {
  let component: WebPresenceComponent;
  let fixture: ComponentFixture<WebPresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
