import {NgModule} from '@angular/core';
import {FsService} from './src/fsService';
import {FsServiceRef} from './src/fsServiceRef';

export * from './src/fsService';
export * from './src/fsServiceRef';

@NgModule({
    declarations: [],
    exports: [],
    providers: [{ provide: FsService, useClass: FsServiceRef }]
})
export class NgxFsModule {

}
