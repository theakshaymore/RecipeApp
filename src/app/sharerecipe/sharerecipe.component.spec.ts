import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharerecipeComponent } from './sharerecipe.component';

describe('SharerecipeComponent', () => {
  let component: SharerecipeComponent;
  let fixture: ComponentFixture<SharerecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharerecipeComponent]
    });
    fixture = TestBed.createComponent(SharerecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
