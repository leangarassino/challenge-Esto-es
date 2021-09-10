import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProjectsTwoComponent } from './menu-projects-two.component';

describe('MenuProjectsTwoComponent', () => {
  let component: MenuProjectsTwoComponent;
  let fixture: ComponentFixture<MenuProjectsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuProjectsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProjectsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
