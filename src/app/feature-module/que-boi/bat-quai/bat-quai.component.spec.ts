import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatQuaiComponent } from './bat-quai.component';

describe('BatQuaiComponent', () => {
  let component: BatQuaiComponent;
  let fixture: ComponentFixture<BatQuaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatQuaiComponent]
    });
    fixture = TestBed.createComponent(BatQuaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
