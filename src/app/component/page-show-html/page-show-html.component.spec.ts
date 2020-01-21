import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShowHTMLComponent } from './page-show-html.component';

describe('PageShowHTMLComponent', () => {
  let component: PageShowHTMLComponent;
  let fixture: ComponentFixture<PageShowHTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShowHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShowHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
