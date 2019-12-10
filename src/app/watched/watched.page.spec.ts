import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchedPage } from './watched.page';

describe('WatchedPage', () => {
  let component: WatchedPage;
  let fixture: ComponentFixture<WatchedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
