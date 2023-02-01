import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGistComponent } from './ngx-gist.component';

describe('NgxGistComponent', () => {
  let component: NgxGistComponent;
  let fixture: ComponentFixture<NgxGistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
