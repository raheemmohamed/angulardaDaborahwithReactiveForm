import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveWayBuildFormComponent } from './reactive-way-build-form.component';

describe('ReactiveWayBuildFormComponent', () => {
  let component: ReactiveWayBuildFormComponent;
  let fixture: ComponentFixture<ReactiveWayBuildFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveWayBuildFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveWayBuildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
