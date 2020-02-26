import { async, TestBed } from '@angular/core/testing';
import { MicroParametriaComponent } from './micro-parametria.component';
describe('MicroParametriaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MicroParametriaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MicroParametriaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=micro-parametria.component.spec.js.map