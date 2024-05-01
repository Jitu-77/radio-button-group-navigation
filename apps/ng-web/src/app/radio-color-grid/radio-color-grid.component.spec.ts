import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioColorGridComponent } from './radio-color-grid.component';

describe('RadioColorGridComponent', () => {
  let component: RadioColorGridComponent;
  let fixture: ComponentFixture<RadioColorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioColorGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioColorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
