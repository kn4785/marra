import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieInfoPage } from './movie-info.page';

describe('MovieInfoPage', () => {
  let component: MovieInfoPage;
  let fixture: ComponentFixture<MovieInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
