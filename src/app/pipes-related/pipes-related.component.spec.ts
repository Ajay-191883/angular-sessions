import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesRelatedComponent } from './pipes-related.component';

describe('PipesRelatedComponent', () => {
  let component: PipesRelatedComponent;
  let fixture: ComponentFixture<PipesRelatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesRelatedComponent]
    });
    fixture = TestBed.createComponent(PipesRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
