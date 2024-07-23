import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkpdfComponent } from './linkpdf.component';

describe('LinkpdfComponent', () => {
  let component: LinkpdfComponent;
  let fixture: ComponentFixture<LinkpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkpdfComponent]
    });
    fixture = TestBed.createComponent(LinkpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
