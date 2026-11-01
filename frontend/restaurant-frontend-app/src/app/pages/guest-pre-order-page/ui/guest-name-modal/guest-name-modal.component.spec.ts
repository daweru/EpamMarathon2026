import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestNameModalComponent } from './guest-name-modal.component';

describe('GuestNameModalComponent', () => {
  let fixture: ComponentFixture<GuestNameModalComponent>;
  let component: GuestNameModalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestNameModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows a specific error when the name is longer than 9 characters', () => {
    component.name.set('Alexandria');
    component.touched.set(true);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Name must be no more than 9 characters.');
    expect(component.valid()).toBeFalse();
  });

  it('shows a specific error when the name contains non-Latin characters', () => {
    component.name.set('Олена');
    component.touched.set(true);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'Use Latin letters, spaces, periods, hyphens, or apostrophes only.'
    );
    expect(component.valid()).toBeFalse();
  });

  it('accepts a name matching the example format', () => {
    component.name.set('Jonson D.');

    expect(component.valid()).toBeTrue();
  });
});
