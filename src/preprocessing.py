# preprocessing.py
"""
Image preprocessing: radiometric correction, normalization, grayscale conversion, metadata extraction.
"""
import cv2
import numpy as np

def radiometric_correction(img):
    """
    Apply radiometric correction to the image (stub).
    For real use, implement sensor-specific correction here.
    """
    # Example: simple denoising (can be replaced with more advanced methods)
    img = cv2.fastNlMeansDenoising(img, None, h=10)
    return img

def normalize_brightness(img):
    """
    Normalize image brightness to [0, 1].
    """
    return cv2.normalize(img.astype(np.float32), None, 0, 1, cv2.NORM_MINMAX)

def ensure_grayscale(img):
    """
    Convert image to grayscale if not already.
    """
    if len(img.shape) == 3:
        return cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return img

def preprocess_image(image_path, output_path):
    """
    Full preprocessing pipeline for a single image.
    1. Load image
    2. Grayscale conversion
    3. Radiometric correction
    4. Brightness normalization
    5. Save processed image
    """
    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    img = ensure_grayscale(img)
    img = radiometric_correction(img)
    img = normalize_brightness(img)
    cv2.imwrite(output_path, (img * 255).astype(np.uint8))
    return output_path
