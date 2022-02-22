import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarautoComponent } from './editarauto.component';

describe('EditarautoComponent', () => {
  let component: EditarautoComponent;
  let fixture: ComponentFixture<EditarautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
