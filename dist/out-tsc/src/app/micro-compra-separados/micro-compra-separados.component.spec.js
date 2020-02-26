import { async, TestBed } from '@angular/core/testing';
import { MicroCompraSeparadosComponent } from './micro-compra-separados.component';
describe('MicroCompraSeparadosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MicroCompraSeparadosComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MicroCompraSeparadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=micro-compra-separados.component.spec.js.map