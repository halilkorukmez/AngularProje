import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSettingComponent } from './lesson-setting.component';

describe('LessonSettingComponent', () => {
  let component: LessonSettingComponent;
  let fixture: ComponentFixture<LessonSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
