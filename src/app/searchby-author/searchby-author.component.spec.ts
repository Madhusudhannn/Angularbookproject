import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyAuthorComponent } from './searchby-author.component';

describe('SearchbyAuthorComponent', () => {
  let component: SearchbyAuthorComponent;
  let fixture: ComponentFixture<SearchbyAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
