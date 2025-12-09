import { useState } from 'react';
import Cropper from 'react-easy-crop';

export default function ImageCropper({ image, onCrop, onCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSaveCrop = () => {
    // For projects: 450x350, For clients: 150x150 circular
    onCrop(croppedAreaPixels);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Crop Image</h3>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={16 / 9}
        onCropChange={setCrop}
        onCropComplete={handleCropComplete}
        onZoomChange={setZoom}
      />
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={onCancel} className="btn" style={{ background: '#ddd' }}>
          Cancel
        </button>
        <button onClick={handleSaveCrop} className="btn btn-primary">
          Save Crop
        </button>
      </div>
    </div>
  );
}
