import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPagesComponent } from './basic-pages.component';

describe('BasicPagesComponent', () => {
  let component: BasicPagesComponent;
  let fixture: ComponentFixture<BasicPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPagesComponent]
    });
    fixture = TestBed.createComponent(BasicPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
