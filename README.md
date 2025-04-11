# Photo Capture

Photo Capture is a JavaScript library that allows you to capture images from a media stream using the browser's camera. It provides an easy-to-use API to start and stop the camera and capture photos.

## Features

- Start and stop the camera.
- Capture photos from the video stream.
- Check if the camera is available.

## How to use

1. Include the library in your HTML file:

    ```html

    Initialize the library with the following options:

    ```html
    <video autoplay></video>
    ```

2. Include the library in your JavaScript file:

    ```javascript
    const photoCapture = new PhotoCapture(document.getElementById('video'));
    ```

    You can call the following methods on the `photoCapture` object:

    | Method   |  Description  |
    |---|---|
    |  startCamera | Starts the camera and displays the video stream in the provided video element. |
    |  stopCamera | Stops the camera and hides the video stream. |
    |  capturePhoto | Captures a photo from the video stream and returns it as a png image data URL |
    |  isCameraAvailable | Checks if the camera is available on the device. Returns a boolean value. |

## Example usage

See [example.html](https://github.com/gagan-bhullar-tech/photo-capture/blob/main/example.html) for usage