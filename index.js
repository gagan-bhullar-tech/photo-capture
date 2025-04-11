export class PhotoCapture {
    constructor(videoElement) {
        if (!(videoElement instanceof HTMLVideoElement)) {
            throw new Error("videoElement must be an instance of HTMLVideoElement");
        }
        this.videoElement = videoElement;
    }

    startCamera() {
        if (this.videoElement.srcObject) {
            throw new Error("Camera already started");
            return;
        }
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("getUserMedia not supported");
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                this.videoElement.srcObject = stream;
                this.videoElement.play();
                this.stopCamera();
            })
            .catch((error) => {
                throw new Error("Error accessing camera: " + error);
            });
    }

    stopCamera() {
        if (!this.videoElement.srcObject) {
            throw new Error("Camera not started");
            return;
        }
        const stream = this.videoElement.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            this.videoElement.srcObject = null;
        }
    }

    capture() {
        if (!this.videoElement.srcObject) {
            throw new Error("Camera not started");
            return;
        }
        const canvas = document.createElement("canvas");
        canvas.width = this.videoElement.videoWidth;
        canvas.height = this.videoElement.videoHeight;
        const context = canvas.getContext("2d");
        context.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/png");
    }

    static isCameraAvailable() {
        return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    }
}