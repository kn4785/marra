import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopratedPage } from './toprated.page';

describe('TopratedPage', () => {
  let component: TopratedPage;
  let fixture: ComponentFixture<TopratedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopratedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
