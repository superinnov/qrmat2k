import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';

@Component({
  selector: 'app-acan-qr',
  templateUrl: './acan-qr.component.html',
  styleUrls: ['./acan-qr.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AcanQrComponent implements OnInit {
    qr="";   
    m: { [id: string]: string} = {
        "000001": "bureau",
        "000002": "chaise",
        "000003": "bureau",
        "000004": "chaise",
        "000005": "armoire",
        "000006": "bureau",
        "000007": "armoire",
        "000008": "table",
        "000009": "fauteuil",
        "000010": "fauteuil"    
    };

    getKey(el: {}){
        return Object.keys(el)[0];
    }
  
    getValue(el: { [x: string]: any; }){
        return el[this.getKey(el)];
    }
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
            alert("Article (id:" + result + ") : " + this.m[result]);
            this.qr=result;
        });
    }
    showQRCode() {
        alert("Article (id:" + this.qr + ") : " + this.m[this.qr]);       
    }
    qrCode(): string {
        return "Article (id:" + this.qr + ") : " + this.m[this.qr];
    }
}
