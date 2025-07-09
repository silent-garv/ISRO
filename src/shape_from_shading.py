# shape_from_shading.py
"""
Surface normal estimation using shape-from-shading (Lambertian or advanced models).
"""
import numpy as np

def estimate_normals(img, sun_direction, albedo=1.0, eps=1e-6):
    """
    Estimate surface gradients (p, q) using the Lambertian model.
    img: normalized grayscale image (float32, [0,1])
    sun_direction: 3-element array (unit vector)
    albedo: assumed constant or estimated
    Returns: gradients p, q (numpy arrays)
    """
    # Unpack sun direction
    sx, sy, sz = sun_direction
    # Avoid division by zero
    sz = sz if abs(sz) > eps else eps
    # Estimate n_z from intensity and sun direction
    # I = A * (n · s) => n · s = I / A
    # Assume n = [p, q, 1] / sqrt(p^2 + q^2 + 1)
    # For Lambertian, invert to get p, q
    I = img / albedo
    # Estimate p and q using least squares (approximate)
    # p = (I*sz - sz^2) / (sx*sz)
    # q = (I*sz - sz^2) / (sy*sz)
    # For simplicity, use:
    p = (I * sz - sz**2) / (sx * sz + eps)
    q = (I * sz - sz**2) / (sy * sz + eps)
    # Mask invalid values
    p = np.nan_to_num(p)
    q = np.nan_to_num(q)
    return p, q
