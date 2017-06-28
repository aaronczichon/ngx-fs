import { ElectronWindow } from '../typings/index';
import { Fs } from './fs.interface';

declare const window: ElectronWindow;

export class FsService {
    private _fs: any;

    private get f_s(): any {
        if (!this._fs) {
            this._fs = window.require ? window.require('fs') : null;
        }
        return this._fs;
    }

    /**
     * determines if SPA is running in Electron
     * @returns {boolean}
     */
    public get isElectronApp(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }

    public get fs(): Fs {
        return <Fs>this.f_s ? this.f_s : null;
    }

}
