import { async, TestBed } from '@angular/core/testing';
import { MicroCompraComponent } from './micro-compra.component';
describe('MicroCompraComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MicroCompraComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MicroCompraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=micro-compra.component.spec.js.map