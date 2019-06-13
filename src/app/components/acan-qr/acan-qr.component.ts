import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { QRCode } from 'angular2-qrscanner/lib/qr-decoder/qrcode';

@Component({
  selector: 'app-acan-qr',
  templateUrl: './acan-qr.component.html',
  styleUrls: ['./acan-qr.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AcanQrComponent implements OnInit {
    qr="";
    @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;

    ngOnInit() {
        this.qrScannerComponent.getMediaDevices().then(devices => {
            console.log(devices);
            const videoDevices: MediaDeviceInfo[] = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0){
                let choosenDev;
                for (const dev of videoDevices){
                    if (dev.label.includes('back')){
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                } else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });

        this.qrScannerComponent.capturedQr.subscribe((result: string) => {
            console.log(result);
            alert(result);
            this.qr=result;
        });
    }
    showQRCode() {
        alert(this.qr);       
    }
}
